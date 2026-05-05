from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, Text, JSON
from sqlalchemy.orm import relationship
from datetime import datetime
from app.database import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    hashed_password = Column(String, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)

    saved_ballots = relationship("SavedBallot", back_populates="user")


class SavedBallot(Base):
    __tablename__ = "saved_ballots"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)

    title = Column(String, nullable=True)
    address_snapshot = Column(String, nullable=True)
    ballot_data = Column(JSON, nullable=False)

    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow)

    user = relationship("User", back_populates="saved_ballots")
    notes = relationship("BallotNote", back_populates="saved_ballot")


class BallotNote(Base):
    __tablename__ = "ballot_notes"

    id = Column(Integer, primary_key=True, index=True)
    saved_ballot_id = Column(Integer, ForeignKey("saved_ballots.id"), nullable=False)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)

    note_text = Column(Text, nullable=False)

    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow)

    saved_ballot = relationship("SavedBallot", back_populates="notes")