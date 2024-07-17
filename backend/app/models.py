from . import db
from datetime import datetime


class User(db.Model):
    __tablename__ = 'users'
    user_id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(128), nullable=False)
    first_name = db.Column(db.String(100), nullable=False)
    last_name = db.Column(db.String(100), nullable=False)
    roles = db.Column(db.String(100))
    is_active = db.Column(db.Boolean, default=True)
    is_superuser = db.Column(db.Boolean, default=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow())
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow())

    def __repr__(self):
        return '<User %r>' % self.username


class Venue(db.Model):
    __tablename__ = 'venues'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))

    def format(self):
        return {
            'id': self.id,
            'name': self.name
        }
    

class EventRegistration(db.Model):
    __tablename__ = 'attendees'
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(100), unique=True, nullable=False)
    last_name = db.Column(db.String(100), unique=True, nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    phone = db.Column(db.String(100), unique=True, nullable=False)
    job_title = db.Column(db.String(100), unique=True, nullable=False)
    company_name = db.Column(db.String(100), unique=True, nullable=False)
    company_size = db.Column(db.String(50), unique=True, nullable=False)
    subject = db.Column(db.String(250), nullable=False)

    def format(self):
        return {
            'id': self.id,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'email': self.email,
            'phone': self.phone,
            'job_title': self.job_title,
            'company_name': self.company_name,
            'company_size': self.company_size,
            'subject': self.subject
        }


class Speaker(db.Model):
    __tablename__ = 'speakers'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    company = db.Column(db.String(100), nullable=False)
    position = db.Column(db.String(100), nullable=False)
    bio = db.Column(db.String(200), nullable=False)
    speaker_avatar = db.Column(db.String(100), nullable=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    def __repr__(self):
        return f'<Speaker {self.name}>'

    def serialize(self):
        return {

            'id': self.id,
            'name': self.name,
            'email': self.email,
            'company': self.company,
            'position': self.position,
            'bio': self.bio,
            'speaker_avatar': self.speaker_avatar,
            'created_at': self.created_at.isoformat(),
            'updated_at': self.updated_at.isoformat()

        }