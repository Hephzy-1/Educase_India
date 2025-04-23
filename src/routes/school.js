import express from 'express';
import { addSchool, listSchools } from "../handlers/school.js";
import AppResponse from "../utils/appResponse.js";

const route = express.Router();

route.get('/', (req, res) => {
  return AppResponse(res, null, 'Welcome to my API', 200);
});
route.post('/addSchool', addSchool);
route.get('/listSchools', listSchools);

export default route;