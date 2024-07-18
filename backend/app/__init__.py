from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
import logging


db = SQLAlchemy()
migrate = Migrate()

def create_app():
    app = Flask(__name__)
    app.config.from_object('backend.config.Config')
    
    logger = logging.getLogger(__name__)
    logger.setLevel(logging.DEBUG)
    file_handler = logging.FileHandler('error.log')
    file_handler.setLevel(logging.DEBUG)
    logger.addHandler(file_handler)

    from .routes import init_routes
    init_routes(app)

    db.init_app(app)
    migrate.init_app(app, db)

    with app.app_context():
        from . import routes
        from . import models 
        db.create_all()
    
    return app