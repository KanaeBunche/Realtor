from models import db,Buyform,IntakeForm,Upload,Appointment
from flask_migrate import Migrate
from flask import Flask, request, make_response,jsonify
from flask_restful import Api, Resource,reqparse
import os
from flask_cors import CORS
import json
from werkzeug.utils import secure_filename


BASE_DIR = os.path.abspath(os.path.dirname(__file__))
DATABASE = os.environ.get(
    "DB_URI", f"sqlite:///{os.path.join(BASE_DIR, 'app.db')}")

app = Flask(__name__)
CORS(app)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})
app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False
app.config['UPLOAD_FOLDER'] = 'upload'


migrate = Migrate(app, db)

db.init_app(app)
api = Api(app)

class BuyformResource(Resource):
    def get(self):
        buyform_data = Buyform.query.all()
        return jsonify([x.to_dict() for x in buyform_data])

    def post(self):
        data = request.get_json()

        # Convert the 'answers' list to a JSON string
        answers_data = data.get('answers', [])
        answers_json = json.dumps(answers_data)

        # Create a new Buyform instance with answers as a JSON string
        buyform_data = Buyform(
            name=data['name'],
            email=data['email'],
            telephone=data['telephone'],
            answers=answers_json,
        )

        db.session.add(buyform_data)
        db.session.commit()
        return make_response(jsonify(buyform_data.to_dict()), 201)

class IntakeFormResource(Resource):
    def get(self):
        intakeform_data = IntakeForm.query.all()
        return jsonify([x.to_dict() for x in intakeform_data])

    def post(self):
        data = request.get_json()

        # Convert the 'answers' list to a JSON string
        answers_data = data.get('answers', [])
        answers_json = json.dumps(answers_data)
        

        # Create a new IntakeForm instance with answers, questions, and other data
        intakeform_data = IntakeForm(
            name=data['name'],
            email=data['email'],
            telephone=data['telephone'],
            answers=answers_json,
        )

        db.session.add(intakeform_data)
        db.session.commit()
        return make_response(jsonify(intakeform_data.to_dict()), 201)



class UploadResource(Resource):
    def get(self):
        upload_data = Upload.query.all()
        return jsonify([x.to_dict() for x in upload_data])

    def post(self):
        name = request.form['name']
        email = request.form['email']
        telephone = request.form['telephone']
        files = []
        for i in range(8):  # Assuming there are 8 files
            file = request.files[f'file{i}']
            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            files.append(filename)  # Save the filename to the list

        # Save the data to the database
        upload_data = Upload(name=name, email=email, telephone=telephone, files=','.join(files))
        db.session.add(upload_data)
        db.session.commit()

        return make_response(jsonify(upload_data.to_dict()), 201)


class AppointmentResource(Resource):
    def get(self):
        appointment_data = Appointment.query.all()
        return jsonify([x.to_dict() for x in appointment_data])

    def post(self):
        data = request.get_json()
        appointment_data = Appointment(**data)
        db.session.add(appointment_data)
        db.session.commit()
        return make_response(jsonify(appointment_data.to_dict()), 201)

api.add_resource(BuyformResource, '/buyform')
api.add_resource(IntakeFormResource, '/intakeform')
api.add_resource(UploadResource, '/upload')
api.add_resource(AppointmentResource, '/appointment')



if __name__ == '__main__':
    app.run(port=5555, debug=True)