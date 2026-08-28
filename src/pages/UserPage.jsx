import SectionButtons from "../components/SectionButtons";
import MemberTable from "../components/MemberTable";

function UserPage({ members, loading }) {
  return (
    <main className="container">
      <h1>
        Generation Thailand
        <br />
        Home - User Section
      </h1>

      <SectionButtons />

      {loading ? (
        <p>Loading...</p>
      ) : (
        <MemberTable members={members} />
      )}
    </main>
  );
}

export default UserPage;