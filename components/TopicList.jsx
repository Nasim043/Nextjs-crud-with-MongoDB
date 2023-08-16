import { HiPencilAlt } from "react-icons/hi";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function TopicList() {
  const { topics } = await getTopics();
  console.log(topics);

  return (
    <>
      {topics?.map((t) => (
        <div
          key={t._id}
          className="border border-slate-300 px-3 py-4 my-4 flex justify-between item-start gap-4 rounded-md"
        >
          <div>
            <h2 className="font-bold text-2xl">{t.title}</h2>
            <p>{t.description}</p>
          </div>
          <div className="flex gap-2">
            <RemoveBtn id={t._id} />
            <Link href={`/editTopic/${t._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
