import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import UserPage from "./pages/UserPage";
import AdminPage from "./pages/AdminPage";
import OwnerPage from "./pages/OwnerPage";

const API_URL =
  "https://67eca027aa794fb3222e43e2.mockapi.io/members";

function App() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMembers() {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();

        setMembers(data);
      } catch (error) {
        console.error("Cannot fetch members:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchMembers();
  }, []);

  async function addMember(newMember) {
    try {
      const response = await fetch(API_URL, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(newMember),
      });

      const createdMember = await response.json();

      setMembers((currentMembers) => [
        ...currentMembers,
        createdMember,
      ]);
    } catch (error) {
      console.error("Cannot add member:", error);
    }
  }

  async function deleteMember(id) {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      setMembers((currentMembers) =>
        currentMembers.filter(
          (member) => member.id !== id
        )
      );
    } catch (error) {
      console.error("Cannot delete member:", error);
    }
  }

  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/user"
          element={
            <UserPage
              members={members}
              loading={loading}
            />
          }
        />

        <Route
          path="/admin"
          element={
            <AdminPage
              members={members}
              loading={loading}
              onAddMember={addMember}
              onDeleteMember={deleteMember}
            />
          }
        />

        <Route
          path="/owner"
          element={<OwnerPage />}
        />
      </Routes>
    </>
  );
}

export default App;