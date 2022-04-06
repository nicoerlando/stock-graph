import "./header.css"
//mport MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className={"header"}>
      <Link to=""><a><h1>MLDA</h1></a></Link>
    </header>
  );
}