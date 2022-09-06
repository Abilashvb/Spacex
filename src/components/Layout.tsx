import React, { useEffect } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import './Style.css';

const Layout: React.FunctionComponent = (props) => {

    useEffect(() => {
        document.title = 'Spacex';
    }, []);

    return (
        <div>
            <Navbar className="navBar">
                <Container>
                    <Navbar.Brand>SpaceX</Navbar.Brand>
                </Container>
            </Navbar>
            {props.children}
        </div>
    )
}

export default Layout;