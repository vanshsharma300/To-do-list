import React from "react";

const Task = ({ title, description, deleteTask, index }) => {
  return (
    <div className=" bg-white  rounded-3xl border-2 border-orange-800 my-[16px] mx-[100px] p-4 flex justify-between">
      <div className="">
        <p className="text-xl font-semibold">{title}</p>
        <span className="text-stone-700 font-medium ">{description}</span>
      </div>
      <div className="flex gap-2">  
        <button
          className="text-white bg-red-700 text-6xl rounded-full px-5  hover:bg-red-900 border-[3px] border-sky-800"
          onClick={() => deleteTask(index)}
        >
          -
        </button>
        <button
          className="text-white bg-red-700 text-sm rounded-full px-5  hover:bg-red-900 border-[3px] border-sky-800"
          onClick={() => deleteTask(index)}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default Task;
