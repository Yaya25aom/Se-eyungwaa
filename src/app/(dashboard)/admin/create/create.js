
import { create } from "domain";
import { pages } from "next/dist/build/templates/app-page";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Create = () => {
  const router = useRouter();
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const onChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleCreate = async () => {
    const response = await fetch("/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });

    if (response.ok) {
      // Task created successfully
      router.push("/");
    } else {
      // Handle error
      alert("Failed to create task");
    }
  };

  return (
    <>
      <div className="container mx-auto mt-8 max-w-[560px]">
        <div className="flex justify-between items-center pb-4 border-b border-dashed border-gray-900 mb-4">
          <h1 className="text-3xl font-semibold">Create Task</h1>
        </div>
        <form>
          <div className="mb-4">
            <label>Title</label>
            <input
              className="mt-1 px-4 py-2 border border-gray-300 rounded-md block w-full"
              type="text"
              name="title"
              value={task?.title}
              onChange={onChange}
            />
          </div>
          <div className="mb-4">
            <label>Description</label>
            <input
              className="mt-1 px-4 py-2 border border-gray-300 rounded-md block w-full"
              type="text"
              name="description"
              value={task?.description}
              onChange={onChange}
            />
          </div>
          <button
            className="bg-green-600 hover:bg-opacity-80 text-white rounded-lg px-4 py-2 duration-200 w-full"
            type="button"
            onClick={handleCreate}
          >
            Create Task
          </button>
        </form>
      </div>
      <Head>
        <title>Create Task</title>
      </Head>
    </>
  );
};

export default create;