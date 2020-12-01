<template>
  <div class="home pt-5">
    <div class="row">
      <div class="text-center w-100">
        <br /><br />

        <button
          type="button"
          class="btn btn-success mr-2"
          v-on:click="getAll()"
        >
          Get all course
        </button>
        <button
          type="button"
          class="btn btn-success mr-2"
          v-on:click="getOne('22')"
        >
          Get one
        </button>

        <br /><br />

        <div v-if="isActive">
          <div v-for="(c, index) in courses" :key="index" :course="c">
            {{ c.courseName }}
          </div>
        </div>

        <div v-if="course">
          {{ course.courseName }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Course, Courses } from "@/types/course/course";
import { getModule } from "vuex-module-decorators";
import CourseModule from "../store/course/course.module";

@Component
export default class Home extends Vue {
  /** data */
  private isActive = true;
  private courses: Courses = null;
  private course: Course = null;

  private CourseInstance = getModule(CourseModule, this.$store);

  /** computed */
  // get courses() {
  //   return this.CoursesInstance.getCourses;
  // }

  // get course() {
  //   return this.CoursesInstance.getCourse;
  // }

  /** methods */
  async getAll() {
    this.isActive = true;
    try {
      await this.CourseInstance.fetchCourses();
      this.courses = this.CourseInstance.getCourses;
    } catch (e) {
      this.courses = null;
      console.log(this.CourseInstance.courses);
      switch (e.response.status) {
        case 400:
          this.$toasted.success("Toasted !!");
          break;
        case 500:
        default:
          this.$toasted.error("Toasted 500!!");
      }
    }
  }

  async getOne(id: string) {
    this.isActive = false;
    try {
      await this.CourseInstance.getCourseById(id);
      this.course = this.CourseInstance.getCourse;
    } catch (e) {
      this.course = null;
      switch (e.response.status) {
        case 400:
          this.$toasted.error("Toasted 400!!");
          break;
        case 404:
          this.$toasted.error("Toasted 404!!");
          break;
        case 500:
        default:
          this.$toasted.error("Toasted 500!!");
      }
    }
  }
}
</script>
