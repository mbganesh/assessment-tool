import React, { useEffect, useState } from "react";

export default function TESTINGPage() {
  const [myData, setMyData] = useState({
    maths: {
      arr: [4, 5],
    },
  });
  console.log(myData);

  useEffect(() => {
    setMyData({ ...myData, maths: [...myData.maths.arr, 42] });
  }, []);

  return <div>sdadashdasjdg</div>;
}
