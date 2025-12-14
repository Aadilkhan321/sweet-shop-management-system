from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import SessionLocal
from models import Sweet
from schemas import SweetCreate
from auth import get_admin_user


router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/")
def add_sweet(sweet: SweetCreate, db: Session = Depends(get_db)):
    new_sweet = Sweet(**sweet.dict())
    db.add(new_sweet)
    db.commit()
    return {"message": "Sweet added"}

@router.get("/")
def list_sweets(db: Session = Depends(get_db)):
    return db.query(Sweet).all()
@router.post("/")
def add_sweet(
    sweet: SweetCreate,
    admin=Depends(get_admin_user),
    db: Session = Depends(get_db)
):
    new_sweet = Sweet(**sweet.dict())
    db.add(new_sweet)
    db.commit()
    return {"message": "Sweet added successfully"}
@router.delete("/{id}")
def delete_sweet(
    id: int,
    admin=Depends(get_admin_user),
    db: Session = Depends(get_db)
):
    sweet = db.query(Sweet).filter(Sweet.id == id).first()
    if not sweet:
        raise HTTPException(status_code=404, detail="Sweet not found")

    db.delete(sweet)
    db.commit()
    return {"message": "Sweet deleted"}
