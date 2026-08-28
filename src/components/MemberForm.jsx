import { useState } from "react";

function MemberForm({ onAddMember }) {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [position, setPosition] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    if (!name || !lastname || !position) {
      return;
    }

    await onAddMember({
      name,
      lastname,
      position,
    });

    setName("");
    setLastname("");
    setPosition("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Create User Here</h3>

      <div className="form-row">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <input
          type="text"
          placeholder="Last Name"
          value={lastname}
          onChange={(event) => setLastname(event.target.value)}
        />

        <input
          type="text"
          placeholder="Position"
          value={position}
          onChange={(event) => setPosition(event.target.value)}
        />

        <button type="submit">Save</button>
      </div>
    </form>
  );
}

export default MemberForm;