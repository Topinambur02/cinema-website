from fastapi import APIRouter
from auth.auth_router import auth_router
from controller.SeatController import seat_router
from controller.HallController import hall_router
from controller.UserController import user_router
from controller.MovieController import movie_router
from controller.ImageController import image_router
from controller.GenreController import genre_router
from controller.SessionController import session_router
from controller.BookingController import booking_router

api_router = APIRouter(prefix='/api')

api_router.include_router(hall_router, prefix='/hall', tags=['hall'])
api_router.include_router(movie_router, prefix='/movie', tags=['movie'])
api_router.include_router(image_router, prefix='/image', tags=['image'])
api_router.include_router(genre_router, prefix='/genre', tags=['genre'])
api_router.include_router(seat_router, prefix='/seat', tags=['seat'])
api_router.include_router(session_router, prefix='/session', tags=['session'])
api_router.include_router(auth_router, prefix='/auth', tags=['auth'])
api_router.include_router(user_router, prefix='/user', tags=['user'])
api_router.include_router(booking_router, prefix='/booking', tags=['booking'])