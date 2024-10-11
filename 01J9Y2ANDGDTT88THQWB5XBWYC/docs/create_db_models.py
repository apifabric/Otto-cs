import decimal

import logging



logging.getLogger('sqlalchemy.engine.Engine').disabled = True  # remove for additional logging

import sqlalchemy



from sqlalchemy.sql import func  # end imports from system/genai/create_db_models_inserts/create_db_models_prefix.py

from logic_bank.logic_bank import Rule

from sqlalchemy import create_engine, Column, Integer, String, Float, ForeignKey, DateTime, Boolean
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from datetime import datetime

Base = declarative_base()

# Define the data model classes with brief description in docstring

class Customer(Base):
    """description: Table storing customer data."""
    __tablename__ = 'customers'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    email = Column(String)
    phone_number = Column(String)
    address = Column(String)


class Vehicle(Base):
    """description: Vehicle inventory with model, make, and specs."""
    __tablename__ = 'vehicles'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    make = Column(String, nullable=False)
    model = Column(String, nullable=False)
    year = Column(Integer, nullable=False)
    price = Column(Float, nullable=False)
    vin_number = Column(String, unique=True)


class Sale(Base):
    """description: Record of sales transactions."""
    __tablename__ = 'sales'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    vehicle_id = Column(Integer, ForeignKey('vehicles.id'), nullable=False)
    customer_id = Column(Integer, ForeignKey('customers.id'), nullable=False)
    sale_date = Column(DateTime, default=datetime.utcnow)
    sale_price = Column(Float, nullable=False)


class Employee(Base):
    """description: Employee records within the dealership."""
    __tablename__ = 'employees'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    position = Column(String, nullable=False)
    salary = Column(Float)


class Service(Base):
    """description: Maintenance and service records for vehicles."""
    __tablename__ = 'services'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    vehicle_id = Column(Integer, ForeignKey('vehicles.id'), nullable=False)
    description = Column(String, nullable=False)
    service_date = Column(DateTime, default=datetime.utcnow)
    cost = Column(Float)


class Part(Base):
    """description: Parts inventory with descriptions and quantities."""
    __tablename__ = 'parts'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    description = Column(String)
    price = Column(Float, nullable=False)
    quantity_in_stock = Column(Integer, nullable=False)


class Appointment(Base):
    """description: Service appointment scheduling for customers."""
    __tablename__ = 'appointments'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    customer_id = Column(Integer, ForeignKey('customers.id'), nullable=False)
    vehicle_id = Column(Integer, ForeignKey('vehicles.id'), nullable=False)
    appointment_date = Column(DateTime, nullable=False)
    notes = Column(String)


class Insurance(Base):
    """description: Insurance coverage records for vehicles."""
    __tablename__ = 'insurance'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    vehicle_id = Column(Integer, ForeignKey('vehicles.id'), nullable=False)
    provider = Column(String, nullable=False)
    policy_number = Column(String, nullable=False)
    expiration_date = Column(DateTime, nullable=False)


class Loan(Base):
    """description: Loan agreements for financing vehicle purchases."""
    __tablename__ = 'loans'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    customer_id = Column(Integer, ForeignKey('customers.id'), nullable=False)
    amount = Column(Float, nullable=False)
    interest_rate = Column(Float, nullable=False)
    term_months = Column(Integer, nullable=False)


class ContactLog(Base):
    """description: Logs of communications with customers."""
    __tablename__ = 'contact_logs'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    customer_id = Column(Integer, ForeignKey('customers.id'), nullable=False)
    contact_date = Column(DateTime, default=datetime.utcnow)
    summary = Column(String)


class Warranty(Base):
    """description: Warranty details for sold vehicles."""
    __tablename__ = 'warranties'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    vehicle_id = Column(Integer, ForeignKey('vehicles.id'), nullable=False)
    warranty_provider = Column(String, nullable=False)
    warranty_period_months = Column(Integer, nullable=False)
    start_date = Column(DateTime, default=datetime.utcnow)


class TestDrive(Base):
    """description: Records of vehicle test drives by customers."""
    __tablename__ = 'test_drives'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    customer_id = Column(Integer, ForeignKey('customers.id'), nullable=False)
    vehicle_id = Column(Integer, ForeignKey('vehicles.id'), nullable=False)
    test_drive_date = Column(DateTime, default=datetime.utcnow)
    feedback = Column(String)

# Create an SQLite database
engine = create_engine('sqlite:///system/genai/temp/create_db_models.sqlite')

# Create tables in the database
Base.metadata.create_all(engine)

# Establish session
Session = sessionmaker(bind=engine)
session = Session()

# Add sample data for each table
session.add_all([
    Customer(first_name='John', last_name='Doe', email='john.doe@example.com'),
    Customer(first_name='Jane', last_name='Smith', email='jane.smith@example.com'),
    Vehicle(make='Toyota', model='Camry', year=2022, price=24000, vin_number='VIN123'),
    Vehicle(make='Honda', model='Civic', year=2021, price=22000, vin_number='VIN456'),
    Sale(vehicle_id=1, customer_id=1, sale_price=23000),
    Sale(vehicle_id=2, customer_id=2, sale_price=21000),
    Employee(first_name='Alice', last_name='Jones', position='Sales Manager', salary=70000),
    Employee(first_name='Bob', last_name='Davis', position='Technician', salary=50000),
    Service(vehicle_id=1, description='Oil Change', cost=30),
    Part(name='Brake Pad', description='Front brake pads', price=50, quantity_in_stock=20),
    Appointment(customer_id=1, vehicle_id=1, appointment_date=datetime(2023, 12, 18), notes='Routine check-up'),
    Insurance(vehicle_id=1, provider='State Farm', policy_number='POL123', expiration_date=datetime(2024, 12, 31)),
    Loan(customer_id=1, amount=20000, interest_rate=3.5, term_months=60),
    ContactLog(customer_id=1, summary='Discussed loan options'),
    Warranty(vehicle_id=1, warranty_provider='Toyota Warranty', warranty_period_months=24),
    TestDrive(customer_id=2, vehicle_id=2, feedback='Liked the handling')
])

# Commit the transaction
session.commit()

# Optionally close the session
session.close()
