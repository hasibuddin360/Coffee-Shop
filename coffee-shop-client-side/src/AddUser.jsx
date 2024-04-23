/** @format */

import { useState } from "react";

function AddUser() {
  const [gender, setGender] = useState(null);
  const [active, setActive] = useState(null);

  const handleAddUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const newUser = { name, email, gender, active };

    fetch("http://127.0.0.1:5000/users", {
      method: "POST",
      headers: { "content-type": "application/JSON" },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <>
      <div>
        <form onSubmit={handleAddUser}>
          <h1>New User</h1>

          <div>
            <input type='text' name='name' placeholder='Enter your name' />
          </div>

          <div>
            <input type='email' name='email' placeholder='Enter your mail' />
          </div>

          <div>
            <input
              onChange={(e) =>
                e.target.checked ? setGender("male") : setGender(null)
              }
              type='checkbox'
              name='gender'
              value='1'
              className='checkbox'
            />
            Male
            <input
              onChange={(e) =>
                e.target.checked ? setGender("female") : setGender(null)
              }
              type='checkbox'
              name='gender'
              value='2'
              className='checkbox'
            />{" "}
            Female
          </div>

          <div>
            <input
              onChange={(e) =>
                e.target.checked ? setActive("active") : setGender(null)
              }
              type='checkbox'
              name='active'
              value='active'
              className='checkbox'
            />
            Active
            <input
              onChange={(e) =>
                e.target.checked ? setActive("inactive") : setGender(null)
              }
              type='checkbox'
              name='active'
              value='deactive'
              className='checkbox'
            />{" "}
            Inactive
          </div>

          <div>
            <button type='submit'>Save</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddUser;
