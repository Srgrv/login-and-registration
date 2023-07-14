import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Lists = () => {
  const lists = useSelector((state) => state.home.lists);
  return (
    <div>
      {lists.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
};

export default Lists;
