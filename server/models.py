

from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.orm import validates

from config import db


class User(db.Model):
    __tablename__ = 'users'
    
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.Integer, unique=True)

#     reviews = db.relationship('Review', back_populates='')
    

class Media(db.Model, SerializerMixin):
    __tablename__ = 'medias'

    id = db.Column(db.Integer, primary_key=True)
    media_type = db.Column(db.String)
    streaming_platform = db.Column(db.String)
    title = db.Column(db.String)
    image_url = db.Column(db.String)

    @validates('media_type')
    def validate_type(self, key, media_type):
        media_types = ['Movie', 'Series']

        if media_type not in media_types:
            raise ValueError('Media Type must be Movie or Series')
        return media_type
    
    @validates('streaming_platform')
    def validate_streaming(self, key, platform):
        platforms = ['HBO', 'Max', 'Hulu', 'Netflix', 'Prime', 'Peacock']

        if platform not in platforms:
            raise ValueError('Must be one of the big 6')
        return platform
    
    @validates('title')
    def validate_title(self, key, title):
        if not (1 <= len(title) <= 32):
            raise ValueError('Incorrect title length')
        return title

#     reviews = db.relationship('Review', back_populates='')
    
    def __repr__(self):
        return f'<Media {self.title}, Type: {self.media_type}, Platform: {self.streaming_platform}'
    

# class Review(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     rating = db.Column(db.Integer)
#     comment = db.Column(db.Integer)

#     user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
#     media_id = db.Column(db.Integer, db.ForeignKey('user.id'))

    # relationships?