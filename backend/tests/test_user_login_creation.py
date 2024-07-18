from app.models import User


def test_create_user(db):
    user = User(username='testuser', password='testpassword', email='test@example.com', first_name='hyun', last_name='yang')
    db.session.add(user)
    db.session.commit()
    retrieved_user = db.session.query(User).filter_by(username='testuser').first()
    db.session.delete(retrieved_user)
    db.session.commit()
    assert retrieved_user is not None
    assert retrieved_user.username == 'testuser'
    assert retrieved_user.email == 'test@example.com'

