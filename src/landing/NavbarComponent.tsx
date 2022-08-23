import {Container, Nav, Navbar, Button} from 'react-bootstrap'
import styles from './../Navbar.module.css';

function NavbarComponent() : JSX.Element {

    return (
        <Navbar className={styles.colornav} variant="dark" expand="lg">
            <Container className={styles.containerNav}>
                <Navbar.Brand className="me-5" href="#home">PREDICTION STRIKE.</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className={styles.navLink} href="#home">Home</Nav.Link>
                        <Nav.Link className={styles.navLink} href="#link">NFL</Nav.Link>
                        <Nav.Link className={styles.navLink} href="#link">NBA</Nav.Link>
                        <Nav.Link className={styles.navLink} href="#link">Media</Nav.Link>
                        <Nav.Link className={styles.navLink} href="#link">Portfolio</Nav.Link>
                    </Nav>
                    <Button className={styles.linkButton} variant="warning">Login</Button>{' '}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent;