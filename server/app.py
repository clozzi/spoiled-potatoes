
from flask import request, session, make_response
from flask_restful import Resource
from sqlalchemy.exc import IntegrityError

from config import app, db, api

from models import Media, User

@app.route('/')
def index():
    return '<h1>Project Server</h1>'

class Home(Resource):

    def get(self):

        medias = []
        for media in Media.query.all():
            medias.append(media.to_dict())

        return medias, 200
    

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
            return new_user.to_dict(), 201
        
        except IntegrityError:
            return {'error': '422 Unprocessable Entity'}, 422
    
class Login(Resource):

    def get(self):
        pass

    def post(self):
        pass


api.add_resource(Home, '/home', endpoint='home')
api.add_resource(Signup, '/signup', endpoint='signup')
api.add_resource(Login, '/login', endpoint='login')


if __name__ == '__main__':
    app.run(port=5555, debug=True)