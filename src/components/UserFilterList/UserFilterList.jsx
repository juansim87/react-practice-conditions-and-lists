import { useState } from "react";
import "./UserFilterList.css";

export const UserFilterList = () => {
  const users = [
    { id: 1, name: "Antonio" },
    { id: 2, name: "Beatriz" },
    { id: 3, name: "Carmen" },
    { id: 4, name: "Alfredo" },
    { id: 5, name: "Bárbara" },
    { id: 6, name: "Carlos" },
  ];

  const [searchUser, setSearchUser] = useState("");

  const onInputChange = (event) => {
    setSearchUser(event.target.value);

    // console.log(filteredUsers);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchUser.toLowerCase())
  );

  return (
    <div>
      <h2>Filtro de usuarios</h2>
      <input type="text" value={searchUser} onChange={onInputChange} />
      {filteredUsers.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
};
