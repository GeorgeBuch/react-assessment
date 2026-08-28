import { Link } from "react-router-dom";

function SectionButtons() {
  return (
    <div className="section-buttons">
      <Link to="/user">
        <button>User Home Section</button>
      </Link>

      <Link to="/admin">
        <button>Admin Home Section</button>
      </Link>
    </div>
  );
}

export default SectionButtons;