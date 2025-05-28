import { useState, useEffect } from "react";
import data from "./wise_saying.json";

function WiseSaying() {
  const [randomId, setRandomId] = useState(0);

  useEffect(() => {
    setRandomId(Math.floor(Math.random() * 20));
  }, []);

  return (
    <div>
      <p class="italic text-center text-gray-600 mb-6">
        {data[randomId].quote} <br />
        <br />
        <span class="text-sm text-gray-400">{data[randomId].name}</span>
        <br />
      </p>
    </div>
  );
}

export default WiseSaying;
