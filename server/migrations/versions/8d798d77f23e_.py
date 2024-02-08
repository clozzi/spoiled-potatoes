"""empty message

Revision ID: 8d798d77f23e
Revises: 2a358bbca649
Create Date: 2024-02-08 13:42:32.345409

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '8d798d77f23e'
down_revision = '2a358bbca649'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.alter_column('username',
               existing_type=sa.INTEGER(),
               type_=sa.String(),
               existing_nullable=True)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.alter_column('username',
               existing_type=sa.String(),
               type_=sa.INTEGER(),
               existing_nullable=True)

    # ### end Alembic commands ###
