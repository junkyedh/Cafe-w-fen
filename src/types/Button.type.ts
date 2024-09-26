export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "link" | "primary" | "secondary" | "teriary";
  size: "small" | "medium" | "large";
  fullWidth?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  href?: string;
  block?: boolean;
  rounded: "none" | "sm" | "md" | "lg" | "full";
  hover?: string;
  onFocus?: React.FocusEventHandler<HTMLButtonElement>;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  className?: string;
  border?: string;
  backgroundColor?: string;
  textColor?: string;
  padding?: string;
  iconSpacing?: string;
  type?: "button" | "submit" | "reset";

  justifyContent?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around";
  alignItems?: "center" | "flex-start" | "flex-end" | "baseline" | "stretch"; // căn chỉnh theo trục dọc
  flexDirection?: "row" | "column";
  accessibleLabel?: string;
  onHover?: React.MouseEventHandler<HTMLButtonElement>;
}
