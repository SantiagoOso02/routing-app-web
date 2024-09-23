import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css";


function NavBar() {
 return (
   <>
     <Navbar bg="dark" variant="dark">
       <Container>
         <Navbar.Brand href="/mascotas">Adóptame</Navbar.Brand>
       </Container>
     </Navbar>
   </>
 );
}

export default NavBar;