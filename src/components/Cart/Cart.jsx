import PropTypes from "prop-types";
const Cart = ({ selectCourse }) => {
  return (
    <div className="w-62">
      <h1>Credit Hour Remaining 7 hr</h1>
      <ol className="list-decimal">
        {selectCourse.map((actor) => (
          <li key={actor.id}>{actor.course_title}</li>
        ))}
      </ol>
    </div>
  );
};

Cart.propTypes = {
  selectCourse: PropTypes.object.isRequired,
};

export default Cart;
