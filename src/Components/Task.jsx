import React from "react";

const Task = ({ title, description, deleteTask, index }) => {
  return (
    <div className=" bg-white  rounded-3xl border-2 border-orange-800 my-[16px] mx-[100px] p-4 flex justify-between">
      <div className="">
        <p className="text-xl font-semibold">{title}</p>
        <span className="text-stone-700 font-medium ">{description}</span>
      </div>
      <div>  
        <button
          className="text-white bg-red-700 text-4xl rounded-full px-3  hover:bg-red-900 "
          onClick={() => deleteTask(index)}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Task;
