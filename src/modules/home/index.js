import React from 'react';
import NavbarComponent from "./components/NavbarComponent";
import JumbotronComponent from "./components/JumbotronComponent";
import MenuComponent from "./components/MenuComponent";
import FooterComponent from "./components/FooterComponent";

const HomePage = () => {
    return (
        <>
            <NavbarComponent/>
            <JumbotronComponent/>
            <MenuComponent/>
            <FooterComponent/>
        </>
    )
};
export default HomePage