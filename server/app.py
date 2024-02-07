
from flask import request, make_response
from flask_restful import Resource

from config import app, db, api

from models import Media

@app.route('/')
def index():
    return '<h1>Project Server</h1>'

class Home(Resource):

    def get(self):

        medias = []
        for media in Media.query.all():
            medias.append(media.to_dict())

        return medias, 200


api.add_resource(Home, '/home', endpoint='home')

if __name__ == '__main__':
    app.run(port=5555, debug=True)