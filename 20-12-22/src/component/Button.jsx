export function Button() {
  const consoleLog = () => {
    console.log("Hello world!");
  };
  return (
    <button className="btn" onClick={consoleLog}>
      Click Me!
    </button>
  );
}
