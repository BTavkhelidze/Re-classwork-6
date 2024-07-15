import { useState } from 'react';

function App() {
  const [range, setRange] = useState();

  function findeRange(e) {
    setRange(e.target.value);
  }
  console.log(range);
  return (
    <>
      <h1>header</h1>
      <label>
        <input type='range' min={15} max={50} onChange={findeRange} />
      </label>
      <h1 style={{ fontSize: `${range}px` }}>Adjust my size!</h1>
    </>
  );
}

export default App;
