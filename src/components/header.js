import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
    background-color: lightblue;
`

const Header = (props) => {
    return (
        <StyledHeader>
            <h1>The Great Redux Art Gallery</h1>
        </StyledHeader>
    );
};

export default Header;