import { anestAxios } from "@/libs/axios";
import { Course, Courses } from "@/types/course/course";

const api = "/course";
class CourseService {
  constructor() {
    console.log("creating new instance of course.service");
  }

  getCourses() {
    return anestAxios.get<Courses>(`${api}/all`);
  }

  getCourse(id: string) {
    return anestAxios.get<Course>(`${api}/${id}`);
  }
}

// Export a singleton instance in the global namespace
export const courseService = new CourseService();
