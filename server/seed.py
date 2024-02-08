

# from random import randint, choice as rc

from faker import Faker

from app import app
from models import db, Media, User

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():

        print('Deleting...')
        Media.query.delete()
        User.query.delete()

        medias = []
        users = []

        for i in range(15):
            media = Media(
                media_type = 'Movie',
                streaming_platform = 'HBO',
                title = fake.unique.name(),
                image_url = fake.url(),
            )

            medias.append(media)

        print('Creating Medias...')
        db.session.add_all(medias)

        for i in range(5):
            user = User(
                username = fake.unique.first_name()
            )

            users.append(user)
        
        print('Creating Users...')
        db.session.add_all(users)
        db.session.commit()
        print('Seed Complete')