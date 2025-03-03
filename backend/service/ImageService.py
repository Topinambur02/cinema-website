from dto.ImageDTO import ImageDTO
from repository.ImageRepository import repository
from mapper.ImageMapper import ImageMapper as mapper
from config.MinioConfig import minio
from fastapi import HTTPException, UploadFile

class ImageService:
    async def get_all(self) -> list[ImageDTO]:
        images = await repository.get_all()
        return [mapper.to_dto(dto_model=ImageDTO, orm_model=image) for image in images]
    
    async def get_by_id(self, id: int) -> ImageDTO:
        image = await repository.get_by_id(id)
        return mapper.to_dto(dto_model=ImageDTO, orm_model=image)
    
    async def create(self, image: UploadFile) -> ImageDTO:
        await minio.upload_file(image)

        image_dict = {
            "name": image.filename,
            "size": image.size,
            "url": f"http://{minio.url}/images/{image.filename}"
        }
    
        created_image = await repository.create(image_dict)
        return mapper.to_dto(dto_model=ImageDTO, orm_model=created_image)
    
    async def update(self, id: int, image: UploadFile) -> ImageDTO:
        await minio.upload_file(image)

        image_dict = {
            "name": image.filename,
            "size": image.size,
            "url": f"http://{minio.url}/images/{image.filename}"
        }

        created_image = await repository.update(id, image_dict)
        return mapper.to_dto(dto_model=ImageDTO, orm_model=created_image)
    
    async def delete(self, id: int) -> None:
        if await repository.get_by_id(id) is None:
            raise HTTPException(status_code=404, detail="Image not found")
        image = await repository.delete(id)
        await minio.delete_file(image.name)

service = ImageService()