"""Initial tables

Revision ID: 5c78bbfd67ad
Revises: 
Create Date: 2025-03-01 22:16:15.895065

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

revision: str = '5c78bbfd67ad'
down_revision: Union[str, None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None

def upgrade() -> None:
    op.create_table('movie',
    sa.Column('name', sa.String(), nullable=False),
    sa.Column('imageID', sa.Integer(), nullable=False),
    sa.Column('ageLimit', postgresql.ENUM('ALL_AGES', 'AGE_RESTRICTION_6', 'AGE_RESTRICTION_12', 'AGE_RESTRICTION_16', 'AGE_RESTRICTION_18', name='age_limit'), nullable=False),
    sa.Column('id', sa.Integer(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )

def downgrade() -> None:
    op.drop_table('movie')
