import PropTypes from "prop-types";
const Cart = ({ selectCourse, creditTime, remainingTime, totalCost }) => {
  return (
    <div className="bg-white rounded-lg p-4">
      <div className="border-b-2 border-gray-400 pb-4 mb-5">
        <h2 className="text-2xl font-bold text-[#2F80ED] ">
          Credit Hour Remaining {remainingTime} hr
        </h2>
      </div>
      <h2 className="text-2xl font-bold mb-3">Course Name</h2>
      <ol className="list-decimal list-inside pb-4 border-b-2 border-gray-400 mb-5">
        {selectCourse.map((actor) => (
          <li key={actor.id}>{actor.course_title}</li>
        ))}
      </ol>
      <h2 className="text-2xl font-medium pb-4 border-b-2 border-gray-400 mb-5">
        Total Credit Hour : {creditTime}
      </h2>
      <h2 className="text-2xl font-semibold">Total Price : {totalCost} USD</h2>
    </div>
  );
};

Cart.propTypes = {
  selectCourse: PropTypes.object.isRequired,
  creditTime: PropTypes.number.isRequired,
  remainingTime: PropTypes.number.isRequired,
  totalCost: PropTypes.number.isRequired,
};

export default Cart;
