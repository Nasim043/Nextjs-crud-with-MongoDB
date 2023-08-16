export default function EditTopicForm() {
  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-center text-3xl mt-8 mb-3">edit topic</h1>
      <form className="space-y-3">
        <input
          type="text"
          className="border border-slate-500 w-full px-2 py-2 rounded-lg"
          placeholder="Topic Title"
        />
        <textarea
          className="border border-slate-500 w-full px-2 py-2 rounded-lg"
          rows={4}
          placeholder="description"
        />
        <button className="font-bold text-white bg-green-600 py-2 px-4 rounded-lg">
          Edit Topic
        </button>
      </form>
    </div>
  );
}
