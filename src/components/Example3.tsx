import { useState } from "react";

interface FormData {
  name: string;
}

export function Example3() {
  // Examples 3: Handling Form Submit Event

  const [formData, setFormData] = useState<FormData>({ name: "" });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
