import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then(setData)
      .catch((err) => setData({ error: err.message }));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>React + Vercel in G12</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;
