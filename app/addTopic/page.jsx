"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddTopic() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("Title and descripttion are required");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description }),
      });
      if (res.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-center text-3xl mt-8 mb-3">add new topic</h1>
      <form className="space-y-3" onSubmit={handleSubmit}>
        <input
          type="text"
          className="border border-slate-500 w-full px-2 py-2 rounded-lg"
          placeholder="Topic Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="border border-slate-500 w-full px-2 py-2 rounded-lg"
          rows={4}
          placeholder="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="font-bold text-white bg-green-600 py-2 px-4 rounded-lg">
          Add Topic
        </button>
      </form>
    </div>
  );
}
