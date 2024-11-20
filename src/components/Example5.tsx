import { forwardRef, useRef } from "react";

interface CustomInputProps {
  label: string;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  ({ label, onInputChange }, ref) => (
    <form>
      <label>
        {label}
        <input ref={ref} type="text" onChange={onInputChange} />
      </label>
    </form>
  )
);

export function Example5() {
  // Examples 5: Custom Input Component with Event Forwarding

  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Input value:", event.target.value);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <CustomInput
        label="Custom Input"
        onInputChange={handleInputChange}
        ref={inputRef}
      />
      <button onClick={() => inputRef.current?.focus()}>Focus Input</button>
    </div>
  );
}
