import SectionButtons from "../components/SectionButtons";
import MemberForm from "../components/MemberForm";
import MemberTable from "../components/MemberTable";

function AdminPage({
  members,
  loading,
  onAddMember,
  onDeleteMember,
}) {
  return (
    <main className="container">
      <h1>
        Generation Thailand
        <br />
        Home - Admin Section
      </h1>

      <SectionButtons />

      <MemberForm onAddMember={onAddMember} />

      {loading ? (
        <p>Loading...</p>
      ) : (
        <MemberTable
          members={members}
          isAdmin={true}
          onDelete={onDeleteMember}
        />
      )}
    </main>
  );
}

export default AdminPage;