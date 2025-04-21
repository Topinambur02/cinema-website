from exception.ImageNotFoundException import ImageNotFoundException
from DTO.ImageDTO import ImageDTO
from repository.ImageRepository import repository
from mapper.ImageMapper import ImageMapper as mapper
from config.MinioConfig import minio
from fastapi import UploadFile

class ImageService:
    async def get_all(self) -> list[ImageDTO]:
        images = await repository.get_all()
        return [mapper.to_dto(dto_model=ImageDTO, orm_model=image) for image in images]
    
    async def get_by_id(self, id: int) -> ImageDTO:
        image = await repository.get_by_id(id)

        if not(image):
            raise ImageNotFoundException()
        
        return mapper.to_dto(dto_model=ImageDTO, orm_model=image)
    
    async def create(self, image: UploadFile) -> ImageDTO:
        await minio.upload_file(image)

        image_dict = {
            "name": image.filename,
            "size": image.size,
            "url": f"http://{minio.HOST}:{minio.PORT}/images/{image.filename}"
        }
    
        created_image = await repository.create(image_dict)
        return mapper.to_dto(dto_model=ImageDTO, orm_model=created_image)
    
    async def update(self, id: int, uploaded_image: UploadFile) -> ImageDTO:
        image = await repository.get_by_id(id)
        
        if not(image):
            raise ImageNotFoundException()

        await minio.upload_file(uploaded_image)

        image_dict = {
            "name": uploaded_image.filename,
            "size": image.size,
            "url": f"http://{minio.HOST}:{minio.PORT}/images/{uploaded_image.filename}"
        }

        updated_image = await repository.update(id, image_dict)
        return mapper.to_dto(dto_model=ImageDTO, orm_model=updated_image)
    
    async def delete(self, id: int) -> None:
        image = await repository.get_by_id(id)

        if not(image):
            raise ImageNotFoundException()
        
        deleted_image = await repository.delete(id)
        await minio.delete_file(deleted_image.name)

service = ImageService()