import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators";
import { courseService } from "@/services/course/courses.service";
import { Course, Courses } from "@/types/course/course";

@Module({
  namespaced: true,
  name: "course",
})
export default class CoursesModule extends VuexModule {
  // State
  courses: Courses = null;
  course: Course = null;

  // Getters
  get getCourses(): Courses {
    return this.courses;
  }

  get getCourse(): Course {
    return this.course;
  }

  // Mutations
  @Mutation
  setCourses(data: Courses): void {
    this.courses = data;
  }

  @Mutation
  setCourse(data: Course): void {
    this.course = data;
  }

  // Actions
  @Action({ commit: "setCourses", rawError: true })
  async fetchCourses() {
    const response = await courseService.getCourses();
    return response.data;
  }

  @Action({ commit: "setCourse", rawError: true })
  async getCourseById(id: string) {
    const response = await courseService.getCourse(id);
    return response.data;
  }

  // @Action
  // async fetchCourses() {
  //   const { data } = await courseService.getCourses();
  //   this.context.commit("setCourses", data);
  // }

  // @Action({rawError: true})
  // async getCourseById(id: string) {
  //   const response = await courseService.getCourse(id);
  //   this.context.commit("setCourse", response.data);
  // }
}
