"""update

Revision ID: d8cd0d582f36
Revises: 34d9f932e965
Create Date: 2024-07-17 13:07:37.702709

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'd8cd0d582f36'
down_revision = '34d9f932e965'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('speakers',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=50), nullable=False),
    sa.Column('bio', sa.Text(), nullable=False),
    sa.Column('photo', sa.String(length=100), nullable=True),
    sa.Column('contact_info', sa.String(length=100), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['users.user_id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.drop_table('speaker')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('speaker',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('name', sa.VARCHAR(length=50), autoincrement=False, nullable=False),
    sa.Column('bio', sa.TEXT(), autoincrement=False, nullable=False),
    sa.Column('photo', sa.VARCHAR(length=100), autoincrement=False, nullable=True),
    sa.Column('contact_info', sa.VARCHAR(length=100), autoincrement=False, nullable=True),
    sa.Column('user_id', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['users.user_id'], name='speaker_user_id_fkey'),
    sa.PrimaryKeyConstraint('id', name='speaker_pkey')
    )
    op.drop_table('speakers')
    # ### end Alembic commands ###
