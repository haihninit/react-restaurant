import React from 'react';
import '../styles/NavbarComponent.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button
} from 'reactstrap';

class NavbarComponent extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
                <Navbar className="navbar-home" dark expand="md" fixed="top">
                    <NavbarBrand href="/">Sơn Dược Ký</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/#">
                                    <Button outline className="btn-login">Đăng nhập</Button>
                                </NavLink>
                            </NavItem>
                            <NavItem className="register">
                                <NavLink href="/#">Tạo tài khoản</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
        );
    }
};
export default NavbarComponent;
