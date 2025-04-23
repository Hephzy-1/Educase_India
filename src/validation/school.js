import joi from 'joi';

export const createSchool = joi.object({
  name: joi.string().required(),
  address: joi.string().required(),
  longitude: joi.number().precision(3).required(),
  latitude: joi.number().precision(3).required(),
});

export const getSchools = joi.object({
  longitude: joi.number().precision(3).required(),
  latitude: joi.number().precision(3).required()
});