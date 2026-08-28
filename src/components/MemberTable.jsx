function MemberTable({ members, isAdmin = false, onDelete }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Last Name</th>
          <th>Position</th>

          {isAdmin && <th>Action</th>}
        </tr>
      </thead>

      <tbody>
        {members.map((member) => (
          <tr key={member.id}>
            <td>{member.name}</td>
            <td>{member.lastname}</td>
            <td>{member.position}</td>

            {isAdmin && (
              <td>
                <button
                  className="delete-button"
                  onClick={() => onDelete(member.id)}
                >
                  Delete
                </button>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default MemberTable;