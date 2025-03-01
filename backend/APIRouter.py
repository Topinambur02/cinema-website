from fastapi import APIRouter
from controller.MovieController import movie_router

api_router = APIRouter(prefix='/api')

api_router.include_router(movie_router, prefix='/movie')