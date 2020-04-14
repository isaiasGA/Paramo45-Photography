import styled from 'styled-components';

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
