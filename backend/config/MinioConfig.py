import io
import json
from minio import Minio
from fastapi import UploadFile
from pydantic_settings import BaseSettings, SettingsConfigDict
from config.LogConfig import logger

class MinioSettings(BaseSettings):
    HOST: str
    PORT: str
    ACCESS_KEY: str
    SECRET_KEY: str

    @property
    def client(self):
        return Minio(
            endpoint=f"{self.HOST}:{self.PORT}", 
            access_key=self.ACCESS_KEY, 
            secret_key=self.SECRET_KEY, 
            secure=False
        )

    model_config = SettingsConfigDict(
        env_file=".env_s3", 
        env_prefix="MINIO_",
        extra='ignore'
    )

    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self._initialize_bucket()

    def _initialize_bucket(self):
        if not self.client.bucket_exists("images"):
            self.client.make_bucket("images")
            policy = {
                "Version": "2012-10-17",
                "Statement": [
                    {
                        "Effect": "Allow",
                        "Principal": "*",
                        "Action": ["s3:GetObject"],
                        "Resource": ["arn:aws:s3:::images/*"]
                    }
                ]
            }
            self.client.set_bucket_policy("images", json.dumps(policy))
            logger.info("Bucket created")
        else:
            logger.warning("Bucket already exists")

    async def upload_file(self, file: UploadFile):
        file_data = await file.read()
        file_stream = io.BytesIO(file_data)
        
        saved_file = self.client.put_object(
            bucket_name="images",
            object_name=file.filename,
            data=file_stream,
            length=len(file_data),
            content_type=file.content_type
        )

        return saved_file

    async def delete_file(self, file_name: str):
        self.client.remove_object("images", file_name)

minio = MinioSettings()