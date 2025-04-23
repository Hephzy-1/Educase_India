import express from 'express';
import { addSchool, listSchools } from "../handlers/school.js";

const route = express.Router();

route.post('/addSchool', addSchool);
route.get('/listSchools', listSchools);

export default route;