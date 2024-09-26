import React from "react";
import cn from "classnames";
import { ButtonProps } from "@/types/Button.type";

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  fullWidth = false,
  loading = false,
  icon,
  href,
  block = false,
  rounded = "md",
  hover,
  onFocus,
  onClick,
  onHover,
  disabled = false,
  className,
  border,
  backgroundColor,
  textColor,
  padding,
  iconSpacing = "0.5rem",
  type = "button",
  justifyContent = "center",
  alignItems = "center",
  flexDirection = "row",
  accessibleLabel,
  children,
  ...props
}) => {
  const isDisabled = loading || disabled;

  const classes = cn(
    `btn-${variant}`,
    {
      "btn-full-width": fullWidth,
      "btn-block": block,
      [`btn-rounded-${rounded}`]: rounded,
      [`hover:${hover}`]: hover,
      [`btn-size-${size}`]: size,
      loading: loading,
      disabled: isDisabled,
    },
    className
  );

  const buttonContent = (
    <div
      className="flex items-center"
      style={{
        justifyContent: justifyContent,
        alignItems: alignItems,
        flexDirection: flexDirection,
      }}
    >
      {loading ? (
        <span className="loader"></span>
      ) : (
        <>
          {icon && <span style={{ marginRight: iconSpacing }}>{icon}</span>}
          {children}
        </>
      )}
    </div>
  );

  return (
    <button
      type={type}
      className={classes}
      disabled={isDisabled}
      aria-label={accessibleLabel}
      onClick={onClick}
      onFocus={onFocus}
      onMouseEnter={onHover}
      style={{
        border,
        backgroundColor,
        color: textColor,
        padding,
      }}
      {...props}
    >
      {buttonContent}
    </button>
  );
};

export default Button;
