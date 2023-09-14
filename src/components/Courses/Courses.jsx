import { useEffect, useState } from "react";
import Course from "../Course/Course";
import Cart from "../Cart/Cart";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [selectCourse, setSelectCourse] = useState([]);
  const [creditTime, setCreditTime] = useState(0);
  const [remainingTime, setRemainingTime] = useState(20);
  const [totalCost, setTotalCost] = useState(0);
  useEffect(() => {
    fetch("./course.json")
      .then((response) => response.json())
      .then((data) => setCourses(data));
  }, []);
  const handleSelection = (course) => {
    const isExist = selectCourse.find((item) => item.id === course.id);
    let count = course.credit_time;
    let cost = course.price;
    if (isExist) {
      return toast("You already added this course.");
    } else {
      selectCourse.forEach(
        (item) => ((count += item.credit_time), (cost += item.price))
      );
      const totalTime = 20 - count;

      if (count > 20) {
        return toast("This is huge enough, firstly finish all of this course.");
      } else {
        setRemainingTime(totalTime);
        setCreditTime(count);
        setTotalCost(cost);
        setSelectCourse([...selectCourse, course]);
      }
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
          <Cart
            selectCourse={selectCourse}
            creditTime={creditTime}
            remainingTime={remainingTime}
            totalCost={totalCost}
          ></Cart>
        </div>
      </div>
    </div>
  );
};

export default Courses;
