import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import shopjpg from "./pngtree-online-shop-logo-design-vector-image_226169.jpg";
import "./navbar.css"

export default function Navigasibar(){
  return (
    <>
      <Navbar className="nav-bg" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={shopjpg}
              width="30"
              height="30"
              className="img-logo"
            />{' '}
            Linnxw S
          </Navbar.Brand>
        </Container>
     </Navbar>
    </>
    )
}