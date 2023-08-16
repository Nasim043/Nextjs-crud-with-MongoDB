"use client"

import { useRouter } from "next/navigation";

export default function EditTopicForm({ id, oldTitle, oldDescription }) {
  const [title, setTitle] = useState(oldTitle);
  const [description, setDescription] = useState(oldDescription);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("Title and descripttion are required");
      return;
    }

    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description }),
      });
      if (!res.ok) {
        throw new Error("Failed to update topic");
      }

      router.refresh();
      router.push("/");

    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-center text-3xl mt-8 mb-3">edit topic</h1>
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
          Edit Topic
        </button>
      </form>
    </div>
  );
}
