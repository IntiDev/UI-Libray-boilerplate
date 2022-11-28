import PropTypes from "prop-types";

const styles = {
  background: "#fff",
  border: "0.2rem solid #0099ff",
  color: "#0099ff",
  letterSpacing: "0.1em",
  fontWeight: "bold",
  padding: "1em",
  textTransform: "uppercase"
};

const Button = ({disabled, label, onClick}) => (
    <button disabled={(!!disabled)} onClick={onClick} style={styles}>
      {label}
    </button>
);

Button.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string,
  onClick: PropTypes.func
};

Button.defaultProps = {
  disabled: false
};

export default Button;
