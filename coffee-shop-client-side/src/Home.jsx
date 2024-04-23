/** @format */

import { useLoaderData } from "react-router-dom";

function Home() {
  const data = useLoaderData();
  const handleEdit = (id) => {
    fetch(`http://127.0.0.1:5000/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  const handleDelete = (id) => {
    fetch(`http://127.0.0.1:5000/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  console.log(data);
  return (
    <>
      <div>
        {data.map((name, id) => (
          <div key={id}>
            {name.name}{" "}
            <button onClick={() => handleEdit(name?._id)}>edit</button>
            <button onClick={() => handleDelete(name?._id)}>delete</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
