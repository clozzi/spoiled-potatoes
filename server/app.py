
from flask import request, session, make_response, jsonify
from flask_restful import Resource
from sqlalchemy.exc import IntegrityError

from config import app, db, api

from models import Media, User

# KeyError: 'user_id' on :5555
@app.before_request
def check_if_logged_in():
    allowed = ['medias', 'signup', 'login', 'check_session']
    if request.endpoint not in allowed and not session['user_id']:
        return {'error': 'Unauthorized'}, 401

# CS issue
@app.route('/')
def index():
    return '<h1>Project Server</h1>'


class Medias(Resource):

    def get(self):
        medias = []
        for media in Media.query.all():
            medias.append(media.to_dict())

        return make_response(jsonify(medias), 200)
    
    def post(self):

        request_json = request.get_json()
        media_type = request_json.get('media_type')
        streaming_platform = request_json.get('streaming_platform')
        title = request_json.get('title')
        image_url = request_json.get('image_url')

        new_media = Media(
            media_type = media_type,
            streaming_platform = streaming_platform,
            title = title,
            image_url = image_url
        )

        try: 
            db.session.add(new_media)
            db.session.commit()

            return make_response(new_media.to_dict()), 201
        
        except IntegrityError:
            return {'error': '422 Unprocessable Entity'}, 422
    

class Signup(Resource):

    def post(self):
        
        request_json = request.get_json()
        username = request_json.get('username')
        new_user = User(
            username=username
        )

        try: 
            db.session.add(new_user)
            db.session.commit()
            session['user_id'] = new_user.id
            return {'id': new_user.id, 'username': new_user.username}, 201
        
        except IntegrityError:
            return {'error': '422 Unprocessable Entity'}, 422
    
class Login(Resource):

    def post(self):
        username = request.get_json()['username']
        user = User.query.filter(User.username == username).first()
        if user:
            session['user_id'] = user.id
            # make_response, jsonify, to_dict
            return jsonify({
                "id": user.id,
                "username": user.username
            })
        return {'error': 'User not registered'}, 400
    
# fix [...]
class CheckSession(Resource):

    def get(self):
        user = User.query.filter(User.id == session.get('user_id')).first()
        if user:
            # make_response, jsonify, to_dict
            return jsonify({
                "id": user.id,
                "username": user.username
            })
        else:
            return {'message': '401: Not Authorized'}, 401

class Logout(Resource):

    def delete(self):
        session['user_id'] = None
        return {'message': '204 No Content'}, 204
    




api.add_resource(Medias, '/medias', endpoint='medias')
api.add_resource(Signup, '/signup', endpoint='signup')
api.add_resource(Login, '/login', endpoint='login')
api.add_resource(CheckSession, '/check_session', endpoint='check_session')
api.add_resource(Logout, '/logout', endpoint='logout')


if __name__ == '__main__':
    app.run(port=5555, debug=True)