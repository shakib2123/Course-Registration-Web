import PropTypes from "prop-types";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoBook } from "react-icons/go";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Course = ({ course, handleSelection }) => {
  const { thumbnail, course_title, course_detail, price, credit_time } = course;
  return (
    <div className="space-y-4  bg-white border-gray-400 p-3 rounded-lg shadow-lg">
      <figure className="w-full">
        <img className="w-full" src={thumbnail} alt="" />
      </figure>
      <h2 className="text-lg font-semibold">{course_title}</h2>
      <p>{course_detail}</p>
      <div className="flex justify-between">
        <p className="flex gap-1 items-center">
          <BsCurrencyDollar></BsCurrencyDollar>
          <p className="font-medium">Price : {price}</p>
        </p>
        <p className="flex gap-1 items-center">
          <GoBook></GoBook>
          <p className="font-medium">Credit : {credit_time}hr</p>
        </p>
      </div>
      <button
        onClick={() => handleSelection(course)}
        className="font-medium text-white bg-[#2F80ED]  w-full"
      >
        Select
      </button>
      <ToastContainer />
    </div>
  );
};

Course.propTypes = {
  course: PropTypes.object.isRequired,
  handleSelection: PropTypes.func.isRequired,
};

export default Course;
