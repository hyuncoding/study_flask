# from flask import Flask, jsonify, request
# from flask_sqlalchemy import SQLAlchemy
# from flask_migrate import Migrate
# from datetime import datetime
# from backend.app.models import User, Speaker, Venue, EventRegistration

# app = Flask(__name__)
# app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://admin:admin123@localhost:5432/bizza'
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# db = SQLAlchemy(app)
# migrate = Migrate(app, db)

# # defining endpoints

# @app.route("/")
# def index():
#     return "Welcome to Bizza REST API Server"

# # @app.route("/api/v1/venues")
# # def venues():
# #     return jsonify({"id": 1, "name": "Auditorium A"}), 404

# @app.route("/api/v1/venues", methods=['POST'])
# def add_venues():
#     if request.method == 'POST':
#         name = request.get_json().get('name')
#         all_venues = Venue.query.filter_by(name=name).first()
#         if all_venues:
#             return jsonify(message="Venue name already exists!"), 409
#         venue = Venue(name=name)
#         db.session.add(venue)
#         db.session.commit()
#         return jsonify({
#             'success': True,
#             'venues': venue.format()
#         }), 201
    
# @app.route("/api/v1/venues", methods=['GET'])
# def retrieve_venues():
#     if request.method == 'GET':
#         all_venues = Venue.query.all()
#         if all_venues:
#             return jsonify({
#                 'success': True,
#                 'venues': [venue.format() for venue in all_venues]
#             }), 200
#         return jsonify(message="No venue record found"), 404

# @app.route("/api/v1/venues/<int:id>", methods=['GET'])
# def retrieve_venue(id):
#     if request.method == 'GET':
#         venue = Venue.query.filter(Venue.id == id).first()
#         if venue:
#             return jsonify({
#                 'success': True,
#                 'venue': venue.format()
#             }), 200
#         return jsonify(message="Record id not found"), 404
    
# @app.route("/api/v1/venues/<int:id>", methods=['PUT'])
# def update_venue(id):
#     if request.method == 'PUT':
#         name = request.get_json().get('name')
#         venue = Venue.query.get(id)
#         if not venue:
#             return jsonify(message='Venue record not found'), 404
#         venue.name = name
#         db.session.commit()
#         return jsonify({
#             'success': True,
#             'updated venue': venue.format()
#         }), 200
    
# @app.route('/venues/<int:id>', methods=['DELETE'])
# def remove_venue(id):
#     venue = Venue.query.filter_by(id=id).first()
#     if venue:
#         db.session.delete(venue)
#         db.session.commit()
#         return jsonify({
#             'success': True,
#             'message': 'You deleted a venue',
#             'deleted': venue.format()
#         }), 202
#     return jsonify(message="That venue does not exist"), 404

# @app.route("/api/v1/speakers/")
# def speakers():
#     firstname = request.args.get("firstname")
#     lastname = request.args.get("lastname")
#     if firstname is not None and lastname is not None:
#         return jsonify(message="The speaker's fullname : " + firstname + " " + lastname)
#     return jsonify(message="No query parameters in the url")

# # @app.route("/api/v1/speakers/<int:speaker_id>")
# # def get_speaker(speaker_id):
#     # Use the speaker ID to fetch the appropriate speaker
#     # data
#     # ...
#     # Return the speaker data as a JSON response
#     # return jsonify(speaker_data)

# @app.route("/api/v1/events-registration", methods=['POST'])
# def add_attendees():
#     if request.method == 'POST':
#         json_data = request.get_json()
#         first_name = json_data.get('first_name')
#         last_name = json_data.get('last_name')
#         email = json_data.get('email')
#         phone = json_data.get('phone')
#         job_title = json_data.get('job_title')
#         company_name = json_data.get('company_name')
#         company_size = json_data.get('company_size')
#         subject = json_data.get('subject')
#         if first_name and last_name and email and phone and subject:
#             all_attendees = EventRegistration.query.filter_by(email=email).first()
#             if all_attendees:
#                 return jsonify(message="Email address already exists!"), 409
#             new_attendee = EventRegistration(
#                 first_name=first_name,
#                 last_name=last_name,
#                 email=email,
#                 phone=phone,
#                 job_title=job_title,
#                 company_name=company_name,
#                 company_size=company_size,
#                 subject=subject
#             )
#             db.session.add(new_attendee)
#             db.session.commit()
#             return jsonify({
#                 'success': True,
#                 'new_attendee': new_attendee.format()
#             }), 201
#         return jsonify({'error': 'Invalid input'}), 400
        
    
# if __name__ == "__main__":
#     app.run(debug=True, host="0.0.0.0", port=5000)