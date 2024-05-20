import { Schema, model } from 'mongoose';
import {
  Guardian,
  LocalGuardian,
  Student,
  UserName,
} from './student.interface';

const userNameSchema = new Schema<UserName>({
  firstName: { 
    type: String, 
    required: [true, 'Student first name is required'],
    trim: true,
    validate: {
        validator: function (value: string){
            const valueStr = value.charAt(0).toUpperCase() + value.slice(1);
            return value === valueStr;
        },
        message: "{VALUE} is not in capitalized formate"
    }
 },
  middleName: { 
    type: String,
    trim: true,
    validate: {
        validator: function (value: string){
            const valueStr = value.charAt(0).toUpperCase() + value.slice(1);
            return value === valueStr;
        },
        message: "{VALUE} is not in capitalized formate"
    }
},
  lastName: { 
    type: String, 
    required: [true, 'Student last name is required'],
    trim: true,
    validate:{
        validator: function(value: string){
            const valueStr = value.charAt(0).toUpperCase() + value.slice(1);
            return value === valueStr;
        },
        message: "{VALUE} is not in capitalized formate"
    }
 },
});

const guardianSchema = new Schema<Guardian>({
  fatherName: { 
    type: String, 
    required: [true, 'Father name is required'],
    trim: true,
    validate:{
        validator: function(value: string){
            const valueStr = value.charAt(0).toUpperCase() + value.slice(1);
            return value === valueStr;
        },
        message: "{VALUE} is not in capitalized formate"
    }
},
  fatherOccupation: { 
    type: String, 
    required: [true, 'Father occupation is required'],
    trim: true,
 },
  fatherContactNo: { 
    type: String, 
    required: [true, 'Father contact no is required'],
    trim: true,
 },
  motherName: { 
    type: String, 
    required: [true, 'Mother name is required'],
    trim: true,
    validate:{
        validator: function(value: string){
            const valueStr = value.charAt(0).toUpperCase() + value.slice(1);
            return value === valueStr;
        },
        message: "{VALUE} is not in capitalized formate"
    }
 },
  motherOccupation: { 
    type: String, 
    required: [true, 'Mother occupation is required'],
    trim: true
 },
  motherContactNo: { 
    type: String, 
    required: [true, 'Mother contact no is required'],
    trim: true,
 },
});

const localGuardianSchema = new Schema<LocalGuardian>({
  name: { 
    type: String, 
    required: [true, 'Local guardian name is required'],
    trim: true,
    validate:{
        validator: function(value: string){
            const valueStr = value.charAt(0).toUpperCase() + value.slice(1);
            return value === valueStr;
        },
        message: "{VALUE} is not in capitalized formate"
    }
 },
  occupation: { 
    type: String, 
    required: [true, 'Local guardian occupation is required'],
    trim: true
 },
  contactNo: { 
    type: String, 
    required: [true, 'Local guardian contact no is required'],
    trim: true
 },
  address: { 
    type: String, 
    required: [true, 'Local guardian address is required'],
    trim: true
 },
});

const studentSchema = new Schema<Student>({
  id: { 
    type: String, 
    required: true, 
    unique: true
 },
  name: {
    type: userNameSchema, 
    required: [true, 'Student name is required']
},
  gender: {
    type: String,
    enum: {
        values: ['male', 'female', 'other'],
        message: "{VALUE} is not valid"
    },
    required: [true, 'Student gender is required'],
    trim: true
  },
  dateOfBirth: { 
    type: String, 
    required: [true, 'Student date of birth is required'],
    trim: true
 },
  email: { 
    type: String, 
    required: [true, 'Student email is required'], 
    unique: true,
    trim: true
 },
  contactNo: { 
    type: String, 
    required: [true, 'Student contact no is required'],
    trim: true
 },
  emergencyContactNo: { 
    type: String, 
    required: [true, 'Student emergency contact no is required'],
    trim: true
 },
  bloodGroup: {
    type: String,
    enum: {
        values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
        message: "{VALUE} is not valid"
    },
    trim: true
  },
  presentAddress: { 
    type: String, 
    required: [true, 'Student present address is required']
 },
  permanentAddress: { 
    type: String, 
    required: [true, 'Student permanent address is required']
 },
  guardian: {
    type: guardianSchema, 
    required: [true, 'Student gender is required']
},
  localGuardian: {
    type: localGuardianSchema
},
  profileImage: { 
    type: String 
},
  isActive: {
    type: String,
    enum: {
        values: ['active', 'blocked'],
        message: "{VALUE} is not valid"
    },
    default: 'active'
  },
});

//   create a model
export const StudentModel = model<Student>('Student', studentSchema);
