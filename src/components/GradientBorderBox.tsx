import { CSSProperties, ReactNode } from "react";

type PropsType = Readonly<{
  gradient?: string;
  borderWidth?: string;
  borderRadius?: string;
  padding?: string;
  children: ReactNode;
}>;

const GradientBorderBox = ({
  gradient = "linear-gradient(90deg, #FF6EC7 0%, #AE6CFF 0%, #6E79FF 100%)", // Default 2-color gradient
  borderWidth = "2px",
  borderRadius = "0.8rem",
  padding = "1rem",
  children,
}: PropsType) => {
  return (
    <div
      className="relative gradientBorderMask"
      style={
        {
          "--gradient": gradient,
          "--borderWidth": borderWidth,
          "--borderRadius": borderRadius,
          padding: padding,
        } as CSSProperties // ✅ Type assertion to avoid TS error
      }
    >
      {children}
    </div>
  );
};

export default GradientBorderBox;