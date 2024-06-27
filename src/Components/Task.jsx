import React from "react";

const Task = ({ title, description, deleteTask, index }) => {
  return (
    <div className="flex justify-center items-center">

    
    <div className=" bg-white  rounded-3xl border-2 border-orange-800 my-[16px]  p-4 flex justify-between  w-5/6  ">
      <div className="flex flex-col ">
        <p className="text-xl font-semibold">{title}</p>
        <span className="text-stone-700 font-medium ">{description}</span>
      </div>
      <div className="flex gap-2 md:gap-6">
        <button
          className="hover:underline text-sm text-violet-800 font-semibold md:text-lg "
          onClick={() => deleteTask(index)}
        >
          Delete
        </button>
        <button
          className="hover:underline text-sm text-violet-800 font-semibold md:text-lg "
          onClick={() => deleteTask(index)}
        >
          Edit
        </button>
      </div>
    </div>
    </div>
  );
};

export default Task;
