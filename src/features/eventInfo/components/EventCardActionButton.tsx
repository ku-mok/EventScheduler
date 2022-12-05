import { useCallback, useState } from "react";

export type ActionButtonProps = {
  icon: React.ReactNode;
  children: React.ReactNode;
};
function ActionButton(props: ActionButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const setHovered = useCallback(() => setIsHovered(true), []);
  const setNotHovered = useCallback(() => setIsHovered(false), []);
  return (
    <button
      className="btn btn-xs hover:btn-primary gap-2"
      onMouseEnter={setHovered}
      onMouseLeave={setNotHovered}
    >
      {props.icon}
      {isHovered && <span className="text-sm">{props.children}</span>}
    </button>
  );
}

export default ActionButton;
