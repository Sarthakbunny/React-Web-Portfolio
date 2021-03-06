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
            case 'contact':
                setActiveIndex(2);
                break;
            case 'blogs':
                setActiveIndex(4);
                break;
            case 'journey':
                setActiveIndex(3);
                break;
            default:
                setActiveIndex(0);
                break;
        }
    }, [])
    
    return (
        <Navbar bg="light" expand="lg" variant='light'>
            <Container>
                <Navbar.Brand href="/" style={{fontSize: 30}}>Sarthak Srivastava</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link active={activeIndex === 0} href="/">About</Nav.Link>
                        <Nav.Link active={activeIndex === 1} href="/projects">Projects</Nav.Link>
                        <Nav.Link active={activeIndex === 2} href="/contact">Contact</Nav.Link>
                        <Nav.Link active={activeIndex === 3} href="/journey">Journey</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link active={activeIndex === 4} href="/blogs">Blogs</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header