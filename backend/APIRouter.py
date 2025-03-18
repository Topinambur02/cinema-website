from fastapi import APIRouter
from controller.MovieController import movie_router
from controller.ImageController import image_router
from controller.GenreController import genre_router

api_router = APIRouter(prefix='/api')

api_router.include_router(movie_router, prefix='/movie')
api_router.include_router(image_router, prefix='/image')
api_router.include_router(genre_router, prefix='/genre')