from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from flask_migrate import Migrate
import json


metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})

db = SQLAlchemy(metadata=metadata)

class Buyform(db.Model):
    table_name = 'buyform'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    email = db.Column(db.String(255), nullable=False)
    telephone = db.Column(db.String(20), nullable=False)
    answers = db.Column(db.String(5000), nullable=False)

    def __init__(self, name, email, telephone, answers):
        self.name = name
        self.email = email
        self.telephone = telephone
        self.answers = answers

    def to_dict(self):
        return{
            "id": self.id,
            "name": self.name,
            "email": self.email,
            "telephone": self.telephone,
            "answers": json.loads(self.answers) if self.answers else [],
    }

class IntakeForm(db.Model):
    __tablename__ = 'intakeform'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    email = db.Column(db.String(255), nullable=False)
    telephone = db.Column(db.String(20), nullable=False)
    answers = db.Column(db.String(255), nullable=False)


    def __init__(self, name, email, telephone, answers):
        self.name = name
        self.email = email
        self.telephone = telephone
        self.answers = answers
        
    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            "telephone": self.telephone,
            "answers": json.loads(self.answers) if self.answers else [],
        }


class Upload(db.Model):
    __tablename__ = 'upload'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    telephone = db.Column(db.String(255), nullable=False)
    email = db.Column(db.String(255), nullable=False)
    files = db.Column(db.String(100), nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "telephone": self.telephone,
            "email": self.email,
            "files": self.files
        }

class Appointment(db.Model):
    __tablename__ = 'appointment'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    email = db.Column(db.String(255), nullable=False)
    telephone = db.Column(db.String(255), nullable=False)
    selectedDate= db.Column(db.String(255), nullable=False)
    selectedTime= db.Column(db.String(255), nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "telephone": self.telephone,
            "selectedDate": self.selectedDate,
            "selectedTime": self.selectedTime,
        }
