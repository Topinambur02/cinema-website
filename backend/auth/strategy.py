from fastapi_users.authentication import JWTStrategy
from config.JwtConfig import jwtSettings

def get_jwt_strategy() -> JWTStrategy:
    return JWTStrategy(secret=jwtSettings.SECRET_KEY, lifetime_seconds=3600)
