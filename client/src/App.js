import React, { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    fetch("/members")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);

  return (
    <div>
      <h3>Hii</h3>
      {typeof data.members == "undefined" && <p>Loading...</p>}
      {data.members && data.members.map((member, i) => <p key={i}>{member}</p>)}
    </div>
  );
};

export default App;
