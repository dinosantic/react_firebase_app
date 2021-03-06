import { Link } from "react-router-dom";
//custom hook - context
import { useTheme } from "../../hooks/useTheme";
//components
import Searchbar from "../Searchbar";
//styles
import "./Navbar.css";

export default function Navbar() {
  const { color } = useTheme();

  return (
    <div className="navbar" style={{ backgroundColor: color }}>
      <nav>
        <Link to="/" className="brand">
          <h1>Cooking</h1>
        </Link>
        <Searchbar />
        <Link to="/create">Create recipe</Link>
      </nav>
    </div>
  );
}
