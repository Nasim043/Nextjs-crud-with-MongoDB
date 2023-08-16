import { useRouter } from "next/navigation";
import { HiOutlineTrash } from "react-icons/hi";

export default function RemoveBtn({ id }) {
  const router = useRouter();
  const handleDelete = async () => {
    console.log("i am here", id);

    const confirmed = confirm("Are you sure?");
    if (confirmed) {
      const res = await fetch(`https://localhost:3000/api/topics/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.refresh();
      }
    }
  };

  return (
    <HiOutlineTrash onClick={handleDelete} size={24} className="text-red-400" />
  );
}
