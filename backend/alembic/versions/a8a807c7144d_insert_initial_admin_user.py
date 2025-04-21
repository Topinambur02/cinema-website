"""insert initial admin user

Revision ID: a8a807c7144d
Revises: 446a6769b95f
Create Date: 2025-04-21 16:23:25.988800

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'a8a807c7144d'
down_revision: Union[str, None] = '446a6769b95f'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.execute("""
        INSERT INTO "user" (email, hashed_password, role, is_active, is_superuser, is_verified)
        VALUES ('alex@example.com', '$2a$12$wMgf6rs6NxxAYzPYSJg7GeyjaZW4v5tFLNjUYyRxslBgpPNhKt1Ra', 'ADMIN', true, false, false);
    """)


def downgrade() -> None:
    op.execute("""
        DELETE FROM "user"
        WHERE email = 'alex@example.com';
    """)
