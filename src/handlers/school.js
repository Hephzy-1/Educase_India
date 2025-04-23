import { SchoolUsecases } from '../usecases/school.js';
import asyncHandler from '../middlewares/async.js';
import { ErrorResponse } from '../utils/errorResponse.js';
import { createSchool } from "../validation/school.js";
import { calculateDistance } from "../utils/distance.js";

export const addSchool = asyncHandler(async (req, res, next) => {
  const { error, value } = createSchool.validate(req.body);

  if (error) {
    console.error(error.message);
    return next(new ErrorResponse(error.details[0].message, 400));
  }

  const { name, ...data } = value;

  try {
    const existingSchool = await SchoolUsecases.schoolByName(name);

    if (existingSchool) {
      return next(new ErrorResponse("School already exists", 400));
    }
    
    const newSchool = await SchoolUsecases.addNewSchool(value);
    
    return AppResponse(res, "New school has been added", newSchool, 201);
  } catch (error) {
    console.error(error.message);
    return next(new ErrorResponse("An error occurred while adding the school", 500));
  }
});

export const listSchools = asyncHandler(async (req, res, next) => {
  const { latitude, longitude } = req.body;

  try {
    const schools = await SchoolUsecases.listAllSchools();

    let sortedSchools;

    if (latitude && longitude) {
 
      const schoolsWithDistance = schools.map((school) => {
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
      });

      sortedSchools = schoolsWithDistance.sort((a, b) => a.distance - b.distance);
    } 

    return AppResponse(res, 200, sortedSchools, "Here is the list of schools");
  } catch (error) {
    console.error(error.message);
    return next(new ErrorResponse("An error occurred while fetching the schools", 500));
  }
});