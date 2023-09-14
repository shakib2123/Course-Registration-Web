import { useEffect, useState } from "react";
import Course from "../Course/Course";
import Cart from "../Cart/Cart";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [selectCourse, setSelectCourse] = useState([]);
  useEffect(() => {
    fetch("./course.json")
      .then((response) => response.json())
      .then((data) => setCourses(data));
  }, []);
  const handleSelection = (course) => {
    const isExist = selectCourse.find((item) => item.id === course.id);
    if (isExist) {
      return alert("You already select this course.");
    } else {
      setSelectCourse([...selectCourse, course]);
    }
  };
  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Course Registration
      </h1>
      <div className="flex flex-col md:flex-row gap-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {courses.map((course) => (
            <Course
              key={course.id}
              course={course}
              handleSelection={handleSelection}
            ></Course>
          ))}
        </div>
        <div className="w-2/3">
          <Cart selectCourse={selectCourse}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Courses;
