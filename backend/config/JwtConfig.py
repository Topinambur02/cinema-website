from pydantic_settings import BaseSettings, SettingsConfigDict

class JwtSettings(BaseSettings):
    SECRET_KEY: str

    model_config = SettingsConfigDict(env_file=".env_jwt")

jwtSettings = JwtSettings()
