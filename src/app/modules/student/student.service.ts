import { Student } from './student.interface';
import { StudentModel } from './student.model';

const createdStudentIntoDB = async (student: Student) => {
  // call model
  const result = await StudentModel.create(student);
  return result;
};

const getAllStudentFromDB = async () => {
  // call model
  const result = await StudentModel.find();
  return result;
};

const getSingleStudentFromDB = async (id: string) => {
  // call model
  const result = await StudentModel.findOne({ _id: id });
  return result;
};

export const StudentServices = {
  createdStudentIntoDB,
  getAllStudentFromDB,
  getSingleStudentFromDB,
};
