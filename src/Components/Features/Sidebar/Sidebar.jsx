import styled from 'styled-components'
import Links from "../Link/Links";



const StyledNavBarContainer = styled.div`
position: absolute;
display: flex;
flex-direction: column;
width: 80px;
min-height: 120px;
justify-content: flex-start;
align-items: center;
background: #fff;
border-radius: 32px;
box-shadow: 0 0 100px -5px rgb(0 0 0 / 41%);
left: 40px;
padding-top: 16px;
padding-bottom: 16px;
box-sizing: border-box;

`;

function NavBar() {
  return (
    <StyledNavBarContainer>
        <Links />

    </StyledNavBarContainer>
  )
}
export default NavBar;

// display:flex;
// width: 100%;
// background: #fff;
// list-style-type: none;
// justify-content: space-around;
// align-items: center;
