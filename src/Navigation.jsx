import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";

export default function Navigation() {
  const [search, setSearch] = useState("");
  
  return (
    <Navbar className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <Nav className="mr-auto">
          <Nav.Link href="/">Employee List</Nav.Link>
          <Nav.Link href="">Medical Details</Nav.Link>
          <Nav.Link href="">Bonus</Nav.Link>
        </Nav>
        <form>
          <input
            id="search"
            type="text"
            placeholder="Search Employee"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </div>
    </Navbar>
  );
}
