import React from "react";
import PropTypes from "prop-types";

const Button = ({
  className,
  href,
  handleClick,
  type,
  width = "fit-content",
  children,
}) => {
  let Button = "button";
  const props = {};
  if (handleClick) {
    props.onClick = handleClick;
    props.className = `btn ${className}`;
  }
  if (href) {
    Button = "a";
    props.href = href;
  }
  return (
    <Button
      className={className}
      type={type}
      {...props} // ! => as same as onClick = {handleClick}
    >
      <span className={className} style={{ width: width }}>
        {children}
      </span>
    </Button>
  );
};

Button.propTypes = {};

export default Button;
