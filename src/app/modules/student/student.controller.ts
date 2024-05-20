import { Request, Response } from 'express';
import { StudentServices } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    // get data
    const { student: studentData } = req.body;

    // will call service func to send this data
    const result = await StudentServices.createdStudentIntoDB(studentData);

    // send response
    res.status(200).json({
      success: true,
      message: 'Student is created successfully!',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllStudent = async (req: Request, res: Response) => {
  try {
    // will call service func to send a request
    const result = await StudentServices.getAllStudentFromDB();

    // get response
    res.status(200).json({
      success: true,
      message: 'Student data are received successfully!',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;

    // will call service to send a request
    const result = await StudentServices.getSingleStudentFromDB(studentId);

    // get response
    res.status(200).json({
      success: true,
      message: 'Student single data is received successfully!',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const StudentControllers = {
  createStudent,
  getAllStudent,
  getSingleStudent,
};
