import sys
import os

from backend import config

sys.path.append(os.path.abspath(os.path.dirname(__file__)))

import pytest
from app import create_app, db as _db
from app.models import User
from sqlalchemy import event
from sqlalchemy.orm import sessionmaker

@pytest.fixture(scope='session')
def app():
    app = create_app()

    with app.app_context():
        # _db.create_all()
        yield app
    #     # _db.drop_all()

@pytest.fixture(scope='session')
def db(app):
    _db.app = app
    yield _db

@pytest.fixture(scope='function')
def session(db):
    """Creates a new database session for a test."""
    connection = db.engine.connect()
    transaction = connection.begin()

    options = dict(bind=connection, binds={})
    session = db.create_scoped_session(options=options)

    session.begin_nested()

    @event.listens_for(session, "after_transaction_end")
    def end_savepoint(session, transaction):
        if transaction.nested and not transaction._parent.nested:
            session.begin_nested()

    db.session = session

    yield session

    session.remove()
    transaction.rollback()
    connection.close()
