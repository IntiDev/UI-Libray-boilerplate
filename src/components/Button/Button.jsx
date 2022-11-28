import React from 'react';
import PropTypes from 'prop-types';
import {ButtonStyled } from "./Button.styled";

const Button = ({ primary, size, label }) => (
    <ButtonStyled className={`${primary ? 'primary' : 'secondary'} ${size}`}>
      {label}
    </ButtonStyled>
);

Button.propTypes = {
  primary: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired
};

Button.defaultProps = {
  primary: false,
  size: 'medium'
};

export default Button;
