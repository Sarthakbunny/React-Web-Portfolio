import React, {useState, useEffect} from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'

function Header() {
    const [activeIndex, setActiveIndex] = useState(null);

    useEffect(() => {
        var location = window.location.href.split('/')[3];
        switch(location){
            case '':
                setActiveIndex(0);
                break;
            case 'projects':
                setActiveIndex(1);
                break;
            case 'contact-me':
                setActiveIndex(2);
                break;
            case 'blogs':
                setActiveIndex(3);
                break;
            default:
                setActiveIndex(0);
                break;
        }
    }, [])
    
    return (
        <Navbar bg="dark" expand="lg" variant='dark'>
            <Container>
                <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link active={activeIndex === 0} href="/">About</Nav.Link>
                        <Nav.Link active={activeIndex === 1} href="/projects">Projects</Nav.Link>
                        <Nav.Link active={activeIndex === 2} href="/contact-me">Contact-Me</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link active={activeIndex === 3} href="/blogs">Blogs</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header