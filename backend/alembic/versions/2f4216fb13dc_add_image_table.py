"""Add Image table

Revision ID: 2f4216fb13dc
Revises: 5c78bbfd67ad
Create Date: 2025-03-03 14:09:41.484842

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa

revision: str = '2f4216fb13dc'
down_revision: Union[str, None] = '5c78bbfd67ad'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None

def upgrade() -> None:
    op.create_table('image',
    sa.Column('name', sa.String(), nullable=False),
    sa.Column('size', sa.Integer(), nullable=False),
    sa.Column('url', sa.String(), nullable=False),
    sa.Column('id', sa.Integer(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_foreign_key(None, 'movie', 'image', ['imageID'], ['id'], ondelete='CASCADE')

def downgrade() -> None:
    op.drop_constraint(None, 'movie', type_='foreignkey')
    op.drop_table('image')
