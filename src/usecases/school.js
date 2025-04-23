import { SchoolRepository } from "../repository/school.js";

export class SchoolUsecases {
  static async addNewSchool (values) {
    const newSchool = await SchoolRepository.addSchool(values)

    return newSchool;
  }

  static async listAllSchools () {
    const school = await SchoolRepository.listSchool()

    return school;
  }

  static async schoolByName (name) {
    const school = await SchoolRepository.getSchoolByName(name)

    return school;
  }
}