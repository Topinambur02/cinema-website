import uvicorn
from fastapi import FastAPI
from APIRouter import api_router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.include_router(api_router)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def main():
    uvicorn.run("Main:app", host="127.0.0.1", port=8000, reload=True)

if __name__ == "__main__":
    main()