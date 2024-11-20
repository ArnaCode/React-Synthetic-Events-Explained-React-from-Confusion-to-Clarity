import { useState } from "react";

export function Example6() {
  const [dragging, setDragging] = useState(false);

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(false);
    console.log("Item dropped!");
  };

  const handleDragEnter = () => setDragging(true);
  const handleDragLeave = () => setDragging(false);

  return (
    <div
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      style={{
        width: "300px",
        height: "200px",
        border: "2px dashed black",
        backgroundColor: dragging ? "lightseagreen" : "lightcoral",
      }}
    >
      {dragging ? "Release to drop" : "Drag an item here"}
    </div>
  );
}
