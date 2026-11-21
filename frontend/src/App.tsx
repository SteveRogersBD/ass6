import { useEffect, useState } from "react";

interface Item {
  id: number;
  item: string;
  location: string;
}

function App() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(function () {
    fetch("http://127.0.0.1:5000/api/items")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setItems(data);
      });
  }, []);

  return (
    <div>
      <h1>Campus Lost &amp; Found</h1>
      {items.map(function (item) {
        return (
          <div key={item.id}>
            <h3>{item.item}</h3>
            <p>Location: {item.location}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
