

# from random import randint, choice as rc

from faker import Faker

from app import app
from models import db, Media

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():

        print('Deleting medias...')
        Media.query.delete()

        print('Creating medias...')
        medias = []

        for i in range(15):
            media = Media(
                media_type = 'Movie',
                streaming_platform = 'HBO',
                title = fake.unique.name(),
                image_url = fake.url(),
            )

            medias.append(media)

        db.session.add_all(medias)
        db.session.commit()
        print('Complete')