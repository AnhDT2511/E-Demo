import { mocked } from "ts-jest/utils";
import { anestAxios } from "@/libs/axios";
import { Course, Courses } from "@/types/course/course";
import { getModule } from "vuex-module-decorators";
import CourseModule from "@/store/course/course.module";
import store from "@/store";

jest.mock("@/libs/axios");

describe("Course Module", () => {
  const CourseInstance = getModule(CourseModule, store);

  const testCourses: Courses = [{
      "id":1,
      "courseName":"Java Core Basic",
      "totalSlot":10,
      "shortDescription":"Java Core Basic",
      "description":"",
      "benefit":"",
      "price":1000000.0,
      "image":"v4.jpg",
      "status":1
    },
    {
      "id":2,
      "courseName":"Java Core Advanced",
      "totalSlot":10,
      "shortDescription":"Java Core Advanced",
      "description":"",
      "benefit":"",
      "price":1000000.0,
      "image":"v2.jpg",
      "status":1
    }
  ];

  const testCourse: Course = {
    "id":1,
    "courseName":"Java Core Basic",
    "totalSlot":10,
    "shortDescription":"Java Core Basic",
    "description":"",
    "benefit":"",
    "price":1000000.0,
    "image":"v4.jpg",
    "status":1
  };

  afterEach(() => {
    CourseModule.state.courses = null;
    CourseModule.state.course = null;
  });

  describe("getters", () => {
    describe("courses & course", () => {
      test("The initial state is null", () => {
        expect(CourseInstance.getCourses).toEqual(null);
        expect(CourseInstance.getCourse).toEqual(null);
      });

      test("Return data", () => {
        CourseModule.state.courses = testCourses as Courses;
        CourseModule.state.course = testCourse as Course;
        expect(CourseInstance.getCourses).toEqual(testCourses);
        expect(CourseInstance.getCourse).toEqual(testCourse);
      });
    });
  });

  describe("mutations", () => {
    describe("setCourses", () => {
      test("state.courses can be set", () => {
        expect(CourseModule.state.courses).toEqual(null);
        store.commit("course/setCourses", testCourses);
        expect(CourseModule.state.courses).toBe(testCourses);
      });
    });

    describe("setCourse", () => {
      test("state.course can be set", () => {
        expect(CourseModule.state.course).toEqual(null);
        store.commit("course/setCourse", testCourse);
        expect(CourseModule.state.course).toBe(testCourse);
      });
    });
  });

  describe("actions", () => {
    describe("setCourses", () => {
      describe("setCourses success", () => {
        beforeEach(() => {
          mocked(anestAxios.get).mockResolvedValue({ data: testCourses });
        });
        test("If the data can be obtained normally, the data will be committed", async () => {
          expect.assertions(3);
          expect(CourseInstance.getCourses).toEqual(null);
          await store.dispatch("course/fetchCourses");
          expect(anestAxios.get).toHaveBeenCalledWith("/course/all");
          expect(CourseInstance.getCourses).toEqual(testCourses);
        });
      });

      // describe("setCourses fail", () => {
      //   beforeEach(() => {
      //     mocked(anestAxios.get).mockRejectedValue(new Error('Async error'));
      //   });
      //   test("If the data can not be retrieved successfully, the data will not be committed", async () => {
      //     expect.assertions(3);
      //     expect(CourseModule.state.courses).toEqual(null);
      //     await store.dispatch("course/fetchCourses");
      //     expect(anestAxios.get).toHaveBeenCalledWith("/course/all");
      //     expect(CourseModule.state.courses).toEqual(null); 
      //   });
      // });
    });

    describe("setCourses", () => {
      describe("setCourse success", () => {
        beforeEach(() => {
          mocked(anestAxios.get).mockResolvedValue({ data: testCourse });
        });
        test("If the data can be obtained normally, the data will be committed", async () => {
          expect.assertions(2);
          expect(CourseInstance.getCourse).toEqual(null);
          await store.dispatch("course/getCourseById");
          expect(CourseInstance.getCourse).toEqual(testCourse);
        });
      });
    });
  });
});