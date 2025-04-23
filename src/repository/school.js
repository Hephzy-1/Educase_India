export class SchoolRepository {
  static async addSchool(values) {
    const school = await School.create({
      name: values.name,
      address: values.address,
      longitude: values.longitude,
      latitude: values.latitude
    });
    return school;
  }

  static async listSchool() {
    const schools = await School.findAll();
    return schools;
  }

  static async getSchoolByName(name) {
    const school = await School.findOne({ where: { name } });
    return school;
  }
}