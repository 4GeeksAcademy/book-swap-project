"""empty message

Revision ID: fd808f4dc90a
Revises: 3e0d9253c8d5
Create Date: 2023-10-02 18:43:29.642770

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'fd808f4dc90a'
down_revision = '3e0d9253c8d5'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.alter_column('name',
               existing_type=sa.VARCHAR(length=50),
               nullable=False)
        batch_op.alter_column('lastname',
               existing_type=sa.VARCHAR(length=100),
               nullable=False)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.alter_column('lastname',
               existing_type=sa.VARCHAR(length=100),
               nullable=True)
        batch_op.alter_column('name',
               existing_type=sa.VARCHAR(length=50),
               nullable=True)

    # ### end Alembic commands ###
