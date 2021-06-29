import React from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';

function Footer () {
    const history = useHistory();

    return (
        <StyledFooterContainer>
            <StyledText>
                <p>Thanks for checking out my website! 😁</p>
            </StyledText>
            <StyledLinks>
                <p><Link to='/projects'>Projects</Link></p>
                <p><Link to='/'>Demos</Link></p>
                <p><Link to='/contact'>Contact</Link></p>
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

    a {
        text-decoration: none;
        color: #565656;
    }

    a:hover {
        text-decoration: underline;
        text-decoration-color: #afafaf;
    }
`;

const StyledText = styled.div`
    border-right: solid 1px lightgray;
    padding-right: 1rem;
`;

const StyledLinks = styled.div`
    border: none;
    color: #565656;
    //width: 12%;
    width: 250px;
    display: flex;
    justify-content: space-between;
    margin-left: 1rem;
`;