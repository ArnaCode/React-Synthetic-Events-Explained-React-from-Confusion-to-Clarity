export function Example1() {
  // Examples 1: Handling Button Click Event

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Button clicked!", event);
  };

  return <button onClick={handleClick}>Click Me!</button>;
}
