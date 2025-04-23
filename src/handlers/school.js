import { SchoolUsecases } from '../usecases/school.js';
import { ErrorResponse } from '../utils/errorResponse.js';
import { createSchool, getSchools } from "../validation/school.js";
import { calculateDistance } from "../utils/distance.js";
import AppResponse from "../utils/appResponse.js"

export const addSchool = async (req, res, next) => {
  const { error, value } = createSchool.validate(req.body);

  if (error) {
    console.error(error.message);
    return next(new ErrorResponse(error.details[0].message, 400));
  }
 
  const { name, ...data } = value;

  const existingSchool = await SchoolUsecases.schoolByName(name);

  if (existingSchool) {
    return next(new ErrorResponse("School already exists", 400));
  }

  const newSchool = await SchoolUsecases.addNewSchool(value);

  return AppResponse(res, "New school has been added", newSchool, 201);

};

export const listSchools = async (req, res, next) => {
  const { error, value } = getSchools.validate(req.query);

  if (error) {
    throw next(new ErrorResponse(error.details[0].message, 400));
  }

  const { latitude, longitude } = value;

  const schools = await SchoolUsecases.listAllSchools();

  if (!schools) {
    throw next(new ErrorResponse("No schools found", 404));
  }

  const schoolsWithDistance = schools
    .map((school) => {
      const distance = calculateDistance(
        parseFloat(latitude),
        parseFloat(longitude),
        school.latitude,
        school.longitude
      );

      return {
        ...school.get({ plain: true }),
        distance
      };
    })
    .sort((a, b) => a.distance - b.distance);  

  return AppResponse(res, "Here is the list of schools", schoolsWithDistance, 200);

};