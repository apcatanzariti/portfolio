import React from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';

function NavBar () {
    const history = useHistory();

    return (
        <div className='container'>
            <StyledNavContainer>
                <h1><Link to='/'>Anthony Catanzariti</Link></h1>
                <NavLinksDiv>
                    <Link to='/projects'><h2>Projects</h2></Link>
                    <h2>Demos</h2>
                    <h2><Link to='/contact'>Contact</Link></h2>
                </NavLinksDiv>
            </StyledNavContainer>
        </div>
    );
};

export default NavBar;

/* Styling Below This Line */

const StyledNavContainer = styled.div`
    //border: solid 1px red;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 22px 0 22px 0px;
    box-shadow: 0px 3px 10px 0px gray;
    position: fixed;
    width: 99.99%;
    top: 0;
    z-index: 9999;
    background-color: white;

    h1 {
        font-size: 2em;
        color: #565656;
        margin-left: 44px;
    }

    h2 {
        font-size: 1.3em;
        color: #565656;
    }

    a {
        text-decoration: none;
        color: #565656;
    }
`;

const NavLinksDiv = styled.div`
    //border: solid 1px blue;
    display: flex;
    justify-content: space-between;
    margin-right: 44px;
    width: 350px;
`;