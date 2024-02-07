
from flask import request, make_response
from flask_restful import Resource

from config import app, db, api

from models import Media

@app.route('/')
def index():
    return '<h1>Project Server</h1>'

class Home(Resource):

    def get_all_media():
        
        all_media = [Media.query.all()]
        return make_response(all_media.to_dict(), 200)

if __name__ == '__main__':
    app.run(port=5555, debug=True)