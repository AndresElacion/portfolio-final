import { BlurCircleProps } from "../types";

export const BlurCircle = ({
  color = "bg-blue-500",
  position = "top-0 left-0",
  size = "w-72 h-72",
  opacity = "opacity-30"
}: BlurCircleProps) => {
  return (
    <div 
      className={`absolute ${position} ${opacity} blur-[120px] rounded-full ${size} ${color}`}
      style={{ zIndex: 0 }}
    />
  );
};