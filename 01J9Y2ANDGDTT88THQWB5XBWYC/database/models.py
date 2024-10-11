# coding: utf-8
from sqlalchemy import DECIMAL, DateTime  # API Logic Server GenAI assist
from sqlalchemy import Column, DateTime, Float, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

########################################################################################################################
# Classes describing database for SqlAlchemy ORM, initially created by schema introspection.
#
# Alter this file per your database maintenance policy
#    See https://apilogicserver.github.io/Docs/Project-Rebuild/#rebuilding
#
# Created:  October 11, 2024 15:15:07
# Database: sqlite:////tmp/tmp.70aIW7CyC0/Otto-cs/database/db.sqlite
# Dialect:  sqlite
#
# mypy: ignore-errors
########################################################################################################################
 
from database.system.SAFRSBaseX import SAFRSBaseX
from flask_login import UserMixin
import safrs, flask_sqlalchemy
from safrs import jsonapi_attr
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped
from sqlalchemy.sql.sqltypes import NullType
from typing import List

db = SQLAlchemy() 
Base = declarative_base()  # type: flask_sqlalchemy.model.DefaultMeta
metadata = Base.metadata

#NullType = db.String  # datatype fixup
#TIMESTAMP= db.TIMESTAMP

from sqlalchemy.dialects.sqlite import *



class Customer(SAFRSBaseX, Base):
    """
    description: Table storing customer data.
    """
    __tablename__ = 'customers'
    _s_collection_name = 'Customer'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    email = Column(String)
    phone_number = Column(String)
    address = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    AppointmentList : Mapped[List["Appointment"]] = relationship(back_populates="customer")
    ContactLogList : Mapped[List["ContactLog"]] = relationship(back_populates="customer")
    LoanList : Mapped[List["Loan"]] = relationship(back_populates="customer")
    SaleList : Mapped[List["Sale"]] = relationship(back_populates="customer")
    TestDriveList : Mapped[List["TestDrive"]] = relationship(back_populates="customer")



class Employee(SAFRSBaseX, Base):
    """
    description: Employee records within the dealership.
    """
    __tablename__ = 'employees'
    _s_collection_name = 'Employee'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    position = Column(String, nullable=False)
    salary = Column(Float)

    # parent relationships (access parent)

    # child relationships (access children)



class Part(SAFRSBaseX, Base):
    """
    description: Parts inventory with descriptions and quantities.
    """
    __tablename__ = 'parts'
    _s_collection_name = 'Part'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    description = Column(String)
    price = Column(Float, nullable=False)
    quantity_in_stock = Column(Integer, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)



class Vehicle(SAFRSBaseX, Base):
    """
    description: Vehicle inventory with model, make, and specs.
    """
    __tablename__ = 'vehicles'
    _s_collection_name = 'Vehicle'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    make = Column(String, nullable=False)
    model = Column(String, nullable=False)
    year = Column(Integer, nullable=False)
    price = Column(Float, nullable=False)
    vin_number = Column(String, unique=True)

    # parent relationships (access parent)

    # child relationships (access children)
    AppointmentList : Mapped[List["Appointment"]] = relationship(back_populates="vehicle")
    InsuranceList : Mapped[List["Insurance"]] = relationship(back_populates="vehicle")
    SaleList : Mapped[List["Sale"]] = relationship(back_populates="vehicle")
    ServiceList : Mapped[List["Service"]] = relationship(back_populates="vehicle")
    TestDriveList : Mapped[List["TestDrive"]] = relationship(back_populates="vehicle")
    WarrantyList : Mapped[List["Warranty"]] = relationship(back_populates="vehicle")



class Appointment(SAFRSBaseX, Base):
    """
    description: Service appointment scheduling for customers.
    """
    __tablename__ = 'appointments'
    _s_collection_name = 'Appointment'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    customer_id = Column(ForeignKey('customers.id'), nullable=False)
    vehicle_id = Column(ForeignKey('vehicles.id'), nullable=False)
    appointment_date = Column(DateTime, nullable=False)
    notes = Column(String)

    # parent relationships (access parent)
    customer : Mapped["Customer"] = relationship(back_populates=("AppointmentList"))
    vehicle : Mapped["Vehicle"] = relationship(back_populates=("AppointmentList"))

    # child relationships (access children)



class ContactLog(SAFRSBaseX, Base):
    """
    description: Logs of communications with customers.
    """
    __tablename__ = 'contact_logs'
    _s_collection_name = 'ContactLog'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    customer_id = Column(ForeignKey('customers.id'), nullable=False)
    contact_date = Column(DateTime)
    summary = Column(String)

    # parent relationships (access parent)
    customer : Mapped["Customer"] = relationship(back_populates=("ContactLogList"))

    # child relationships (access children)



class Insurance(SAFRSBaseX, Base):
    """
    description: Insurance coverage records for vehicles.
    """
    __tablename__ = 'insurance'
    _s_collection_name = 'Insurance'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    vehicle_id = Column(ForeignKey('vehicles.id'), nullable=False)
    provider = Column(String, nullable=False)
    policy_number = Column(String, nullable=False)
    expiration_date = Column(DateTime, nullable=False)

    # parent relationships (access parent)
    vehicle : Mapped["Vehicle"] = relationship(back_populates=("InsuranceList"))

    # child relationships (access children)



class Loan(SAFRSBaseX, Base):
    """
    description: Loan agreements for financing vehicle purchases.
    """
    __tablename__ = 'loans'
    _s_collection_name = 'Loan'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    customer_id = Column(ForeignKey('customers.id'), nullable=False)
    amount = Column(Float, nullable=False)
    interest_rate = Column(Float, nullable=False)
    term_months = Column(Integer, nullable=False)

    # parent relationships (access parent)
    customer : Mapped["Customer"] = relationship(back_populates=("LoanList"))

    # child relationships (access children)



class Sale(SAFRSBaseX, Base):
    """
    description: Record of sales transactions.
    """
    __tablename__ = 'sales'
    _s_collection_name = 'Sale'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    vehicle_id = Column(ForeignKey('vehicles.id'), nullable=False)
    customer_id = Column(ForeignKey('customers.id'), nullable=False)
    sale_date = Column(DateTime)
    sale_price = Column(Float, nullable=False)

    # parent relationships (access parent)
    customer : Mapped["Customer"] = relationship(back_populates=("SaleList"))
    vehicle : Mapped["Vehicle"] = relationship(back_populates=("SaleList"))

    # child relationships (access children)



class Service(SAFRSBaseX, Base):
    """
    description: Maintenance and service records for vehicles.
    """
    __tablename__ = 'services'
    _s_collection_name = 'Service'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    vehicle_id = Column(ForeignKey('vehicles.id'), nullable=False)
    description = Column(String, nullable=False)
    service_date = Column(DateTime)
    cost = Column(Float)

    # parent relationships (access parent)
    vehicle : Mapped["Vehicle"] = relationship(back_populates=("ServiceList"))

    # child relationships (access children)



class TestDrive(SAFRSBaseX, Base):
    """
    description: Records of vehicle test drives by customers.
    """
    __tablename__ = 'test_drives'
    _s_collection_name = 'TestDrive'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    customer_id = Column(ForeignKey('customers.id'), nullable=False)
    vehicle_id = Column(ForeignKey('vehicles.id'), nullable=False)
    test_drive_date = Column(DateTime)
    feedback = Column(String)

    # parent relationships (access parent)
    customer : Mapped["Customer"] = relationship(back_populates=("TestDriveList"))
    vehicle : Mapped["Vehicle"] = relationship(back_populates=("TestDriveList"))

    # child relationships (access children)



class Warranty(SAFRSBaseX, Base):
    """
    description: Warranty details for sold vehicles.
    """
    __tablename__ = 'warranties'
    _s_collection_name = 'Warranty'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    vehicle_id = Column(ForeignKey('vehicles.id'), nullable=False)
    warranty_provider = Column(String, nullable=False)
    warranty_period_months = Column(Integer, nullable=False)
    start_date = Column(DateTime)

    # parent relationships (access parent)
    vehicle : Mapped["Vehicle"] = relationship(back_populates=("WarrantyList"))

    # child relationships (access children)
