from fastapi import FastAPI
from database import engine, Base
import models
from auth import router as auth_router
from sweets import router as sweet_router

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(auth_router, prefix="/api/auth")
app.include_router(sweet_router, prefix="/api/sweets")
