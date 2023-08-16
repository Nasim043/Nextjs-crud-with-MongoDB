import EditTopicForm from "@/components/EditTopicForm";

const getTopicsById = async() => {
    try {
        const res = await fetch(`https://localhost:3000/api/topics/${id}`, {cache: 'no-store'});

        if(!res.ok){
            throw new Error('Failed to fetch topic');
        }
        return res.json();
    } catch (error) {
        console.log(error);
    }
}

export default async function editPage({ params }) {
  const { id } = params;
  const { topic } = await getTopicsById(id);
  const {title, description } = topic;
  return <EditTopicForm id={id} oldTitle={title} oldDescription={description} />;
}
