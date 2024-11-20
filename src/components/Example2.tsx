import { useState } from "react";

export function Example2() {
  // Examples 2: Input Change Event

  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <input type="text" value={value} onChange={handleChange} />
      <p>Current value: {value}</p>
    </div>
  );
}
