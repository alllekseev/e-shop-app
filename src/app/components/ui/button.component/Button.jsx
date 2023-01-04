import "./button.scss";
import PropTypes from "prop-types";

export function Button(props) {
  return(
    <>
      <button className="btn" {...props}>{props.children}</button>
    </>
  )
}

Button.propTypes = {
  type: PropTypes.string
}