import { useState } from "react";

export function Example4() {
  // Examples 4: Mouse Enter and Leave Events

  const [hovering, setHovering] = useState(false);

  const handleMouseEnter = () => setHovering(true);

  const handleMouseLeave = () => setHovering(false);

  return (
    <p
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        width: "300px",
        height: "100px",
        backgroundColor: hovering ? "lightseagreen" : "lightslategray",
        transitionDuration: "0.15s",
      }}
    >
      {hovering ? "Hovering!" : "Not Hovering"}
    </p>
  );
}
