from flask import current_app as app
from flask import Flask, jsonify, request
from .models import *

def init_routes(app):
    @app.route("/")
    def index():
        return "Welcome to Bizza REST API Server"

    # @app.route("/api/v1/venues")
    # def venues():
    #     return jsonify({"id": 1, "name": "Auditorium A"}), 404

    @app.route("/api/v1/venues", methods=['POST'])
    def add_venues():
        if request.method == 'POST':
            name = request.get_json().get('name')
            all_venues = Venue.query.filter_by(name=name).first()
            if all_venues:
                return jsonify(message="Venue name already exists!"), 409
            venue = Venue(name=name)
            db.session.add(venue)
            db.session.commit()
            return jsonify({
                'success': True,
                'venues': venue.format()
            }), 201
        
    @app.route("/api/v1/venues", methods=['GET'])
    def retrieve_venues():
        if request.method == 'GET':
            all_venues = Venue.query.all()
            if all_venues:
                return jsonify({
                    'success': True,
                    'venues': [venue.format() for venue in all_venues]
                }), 200
            return jsonify(message="No venue record found"), 404

    @app.route("/api/v1/venues/<int:id>", methods=['GET'])
    def retrieve_venue(id):
        if request.method == 'GET':
            venue = Venue.query.filter(Venue.id == id).first()
            if venue:
                return jsonify({
                    'success': True,
                    'venue': venue.format()
                }), 200
            return jsonify(message="Record id not found"), 404
        
    @app.route("/api/v1/venues/<int:id>", methods=['PUT'])
    def update_venue(id):
        if request.method == 'PUT':
            name = request.get_json().get('name')
            venue = Venue.query.get(id)
            if not venue:
                return jsonify(message='Venue record not found'), 404
            venue.name = name
            db.session.commit()
            return jsonify({
                'success': True,
                'updated venue': venue.format()
            }), 200
        
    @app.route('/venues/<int:id>', methods=['DELETE'])
    def remove_venue(id):
        venue = Venue.query.filter_by(id=id).first()
        if venue:
            db.session.delete(venue)
            db.session.commit()
            return jsonify({
                'success': True,
                'message': 'You deleted a venue',
                'deleted': venue.format()
            }), 202
        return jsonify(message="That venue does not exist"), 404

    # @app.route("/api/v1/speakers/")
    # def speakers():
    #     firstname = request.args.get("firstname")
    #     lastname = request.args.get("lastname")
    #     if firstname is not None and lastname is not None:
    #         return jsonify(message="The speaker's fullname : " + firstname + " " + lastname)
    #     return jsonify(message="No query parameters in the url")

    # @app.route("/api/v1/speakers/<int:speaker_id>")
    # def get_speaker(speaker_id):
        # Use the speaker ID to fetch the appropriate speaker
        # data
        # ...
        # Return the speaker data as a JSON response
        # return jsonify(speaker_data)

    @app.route("/api/v1/events-registration", methods=['POST'])
    def add_attendees():
        if request.method == 'POST':
            json_data = request.get_json()
            first_name = json_data.get('first_name')
            last_name = json_data.get('last_name')
            email = json_data.get('email')
            phone = json_data.get('phone')
            job_title = json_data.get('job_title')
            company_name = json_data.get('company_name')
            company_size = json_data.get('company_size')
            subject = json_data.get('subject')
            if first_name and last_name and email and phone and subject:
                all_attendees = EventRegistration.query.filter_by(email=email).first()
                if all_attendees:
                    return jsonify(message="Email address already exists!"), 409
                new_attendee = EventRegistration(
                    first_name=first_name,
                    last_name=last_name,
                    email=email,
                    phone=phone,
                    job_title=job_title,
                    company_name=company_name,
                    company_size=company_size,
                    subject=subject
                )
                db.session.add(new_attendee)
                db.session.commit()
                return jsonify({
                    'success': True,
                    'new_attendee': new_attendee.format()
                }), 201
            return jsonify({'error': 'Invalid input'}), 400
        

    @app.route("/api/v1/speakers", methods=['GET'])
    def get_speakers():
        speakers = Speaker.query.all()
        if not speakers:
            return jsonify({'error': 'No speakers found'}), 404
        return jsonify([speaker.serialize() for speaker in speakers]), 200


# @app.route("/api/v1/speakers", methods=['POST'])
# def add_speaker():
#     data = request.get_json()
#     name = data.get('name')
#     email = data.get('email')
#     company = data.get('company')
#     position = data.get('position')
#     bio = data.get('bio')
#     avatar = request.files.get('speaker_avatar')
#     # Save the uploaded avatar
#     if avatar and allowed_file(avatar.filename):
#         pass


    @app.route('/logger')
    def logger():
        app.logger.debug('This is a debug message')
        app.logger.info('This is an info message')
        app.logger.warning('This is a warning message')
        app.logger.error('This is an error message')
        return 'Log messages have been written to the log file'