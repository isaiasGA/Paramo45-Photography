import styled from 'styled-components';

//Header

export const Nav = styled.nav`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    border-bottom: .5px solid #D4D4D4;
    background: white;
    position: fixed;
    width: 100%;
    height: 10%;
    background-color: #FCF4EC;
`;

export const NavLinks = styled.div`
    display: flex;
    justify-content: space-between;
    width: 72%;
`;


export const LogoContainer = styled.div`
  width: 5%;
  margin: 3% 1% 3% 13%;
`;

export const ImgLogo = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 50%;
`;




//Home
  export const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid #987C6B;;
    font-weight: bold;
    font-size: 1.6rem;
    color: #272727;
    margin: 0 1em;
    padding: 0.25em 3em;
    text-align: center;
    margin-left: 9%;
 `;

    
