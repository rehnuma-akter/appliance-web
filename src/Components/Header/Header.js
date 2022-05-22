import React from 'react';
import {
    Navbar,
    Container,
    Nav,
    Form,
    FormControl,
    Button
} from "react-bootstrap";
import './Header.css';

const Header = () => {
    return (
    <div className='header'>
        <Navbar expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">Appliance Corner</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: "100px" }}
                        navbarScroll
                        >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">Shop</Nav.Link>
                        <Nav.Link href="#action2">About</Nav.Link>
                        <Nav.Link href="#">Contact</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        />
                        <Button variant="outline-primary"><span className='search'>Search</span></Button>
                    </Form>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
    );
};

export default Header;