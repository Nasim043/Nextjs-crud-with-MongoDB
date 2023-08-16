import { HiPencilAlt } from "react-icons/hi";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
export default function TopicList() {
  return (
    <div className="border border-slate-300 px-3 py-4 my-4 flex justify-between item-start gap-4 rounded-md">
      <div className="bg-red-100">
        <h2>Title</h2>
        <p>description</p>
      </div>
      <div className="flex gap-2">
        <RemoveBtn />
        <Link href={"/editTopic/123"}>
          <HiPencilAlt size={24} />
        </Link>
      </div>
    </div>
  );
}
