
from flask import request, session, make_response, jsonify
from flask_restful import Resource
from sqlalchemy.exc import IntegrityError

from config import app, db, api

from models import Media, User, Review

@app.before_request
def check_if_logged_in():
    allowed = ['medias', '/medias/<int:id>', 'reviews', 'user_reviews/<int:id>', 'signup', 'login', 'check_session']
    if request.endpoint not in allowed and not session.get('user_id'):
        return {'error': 'Unauthorized'}, 401

@app.route('/')
def index():
    return '<h1>Project Server</h1>'


class Medias(Resource):

    def get(self):
        medias = []
        for media in Media.query.all():
            medias.append(media.to_dict())

        return medias, 200
    
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
            return new_media.to_dict(), 201
        
        except IntegrityError:
            return {'error': '422 Unprocessable Entity'}, 422
        

class MediaById(Resource):

    def get(self, id):
        media = Media.query.filter(Media.id == id).first()

        if media:
            return media.to_dict(), 200
        return {'error': '404 Resource not found'}, 404
    
    
class Reviews(Resource):

    def get(self):
        reviews = []
        for review in Review.query.all():
            reviews.append(review.to_dict())

        return reviews, 200
    
    def post(self):
        request_json = request.get_json()
        rating = request_json.get('rating')
        comment = request_json.get('comment')

        review = Review(
            rating = rating,
            comment = comment,
        )

        try: 
            db.session.add(review)
            db.session.commit()

            return review.to_dict(), 201
        
        except IntegrityError:
            return {'error': '422 Unprocessable Entity'}, 422
        

class ReviewByUserId(Resource):

    def get(self, id):
        reviews = []
        for review in Review.query.filter(Review.user_id == id).all():
            reviews.append(review.to_dict())

        if reviews:
            return reviews, 200
        return {'error': '404 Resource not found'}, 404


class ReviewById(Resource):

    def patch(self, id):
        review = Review.query.filter_by(id = id).first()

        if review:
            data = request.get_json()
            for attr in data:
                setattr(review, attr, data.get(attr))

            db.session.add(review)
            db.session.commit()

            return review.to_dict(), 200
        return {'error': '404 Resource not found'}, 404
    
    def delete(self, id):
        review = Review.query.filter_by(id = id).first()

        if review:
            db.session.delete(review)
            db.session.commit()

            return {'message': 'Review {id} deleted'}, 200
    

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
            return user.to_dict(), 200
        return {'error': 'User not registered'}, 400
    
class CheckSession(Resource):

    def get(self):
        user = User.query.filter(User.id == session.get('user_id')).first()
        if user:
            return user.to_dict(), 200
        else:
            return {'message': '401: Not Authorized'}, 401

class Logout(Resource):

    def delete(self):
        session['user_id'] = None
        return {'message': '204 No Content'}, 204
    


api.add_resource(Medias, '/medias', endpoint='medias')
api.add_resource(MediaById, '/medias/<int:id>', endpoint='medias/:id')
api.add_resource(Reviews, '/reviews', endpoint='reviews')
api.add_resource(Signup, '/signup', endpoint='signup')
api.add_resource(Login, '/login', endpoint='login')
api.add_resource(CheckSession, '/check_session', endpoint='check_session')
api.add_resource(Logout, '/logout', endpoint='logout')
api.add_resource(ReviewById, '/reviews/<int:id>', endpoint='reviews/:id')
api.add_resource(ReviewByUserId, '/user_reviews/<int:id>', endpoint='user_reviews/:id')


if __name__ == '__main__':
    app.run(port=5555, debug=True)