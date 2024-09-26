import { IconButtonProps } from "@/types/IconButton.type";
import React from "react";

const sizeMap: Record<string, string> = {
  small: "12px",
  medium: "16px",
  large: "20px",
};

const colorMap: Record<string, string> = {
  primary: "#007BFF",
  secondary: "#6C757D",
  success: "#28A745",
  warning: "#FFC107",
  danger: "#DC3545",
};
const borderRadiusMap: Record<string, string> = {
  none: "0",
  sm: "0.125rem", // 2px
  md: "0.25rem", // 4px
  lg: "0.5rem", // 8px
  xl: "0.75rem", // 12px
  "2xl": "1rem", // 16px
  "3xl": "1.5rem", // 24px
};

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  text,
  size = "medium",
  color = "primary",
  hoverColor,
  activeColor,
  disabledColor = "#E0E0E0",
  backgroundColor,
  borderRadius = "md",
  onClick,
  onHover,
  onFocus,
  isDisabled,
  isActive,
  ariaLabel,
  tabIndex = 0,
  tooltip,
  isIconOnly = false,
}) => {
  const getBackgroundColor = () => {
    if (isDisabled) return disabledColor;
    if (isActive && activeColor) return activeColor;
    return backgroundColor || colorMap[color];
  };

  return (
    <button
      className={`icon-button ${isActive ? "active" : ""}`}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: isIconOnly ? "8px" : "8px 16px",
        fontSize: sizeMap[size],
        backgroundColor: getBackgroundColor(),
        border: "none",
        cursor: isDisabled ? "not-allowed" : "pointer",
        opacity: isDisabled ? 0.6 : 1,
        borderRadius: borderRadiusMap[borderRadius],
        transition: "background-color 0.3s",
      }}
      onClick={isDisabled ? undefined : onClick}
      onMouseEnter={onHover}
      onFocus={onFocus}
      disabled={isDisabled}
      aria-label={ariaLabel || text}
      aria-disabled={isDisabled}
      aria-pressed={isActive}
      tabIndex={tabIndex}
      title={tooltip}
    >
      <span className="icon" style={{ fontSize: sizeMap[size] }}>
        {icon}
      </span>
      {text && !isIconOnly && (
        <span style={{ marginLeft: 8, fontSize: sizeMap[size] }}>{text}</span>
      )}
    </button>
  );
};

export default IconButton;
