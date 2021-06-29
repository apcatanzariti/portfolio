import React from 'react';
import styled from 'styled-components';

function Footer () {

    return (
        <StyledFooterContainer>
            <StyledText>
                <p>Thanks for checking out my website! 😁 All design and code done by me from scratch</p>
            </StyledText>
            <StyledLinks>
                <p>Projects</p>
                <p>Demos</p>
                <p>Contact</p>
            </StyledLinks>
        </StyledFooterContainer>
    );
};

export default Footer;

/* Styling Below This Line */

const StyledFooterContainer = styled.div`
    //border: solid 1px red;
    color: #565656;
    background-color: #FFFFFF;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    font-size: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3rem;
    margin-top: 5rem;
    box-shadow: 0px -3px 10px 0px lightgray;
`;

const StyledText = styled.div`
    border-right: solid 1px lightgray;
    padding-right: 1rem;
`;

const StyledLinks = styled.div`
    border: none;
    color: #565656;
    width: 12%;
    display: flex;
    justify-content: space-between;
    margin-left: 1rem;
`;