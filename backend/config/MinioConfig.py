import io
import json
from minio import Minio
from fastapi import UploadFile

class MinioConfig:
    def __init__(self, url: str, access_key: str, secret_key: str):
        self.url = url
        self.access_key = access_key
        self.secret_key = secret_key

        self.client = Minio(
            endpoint=self.url,
            access_key=self.access_key,
            secret_key=self.secret_key,
            secure=False
        )

        bucket = self.client.bucket_exists("images")

        if not bucket:
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
            print("Bucket created")
        else:
            print("Bucket already exists")

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

minio = MinioConfig(url="localhost:9000", access_key="minioadmin", secret_key="minioadmin")