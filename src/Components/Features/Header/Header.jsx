import styled from 'styled-components'
import {Context} from '../Common/AppContext'


function Header() {
const counsumer=Context();
console.log(counsumer.themeState);
const HeaderLink = styled.div`
    width: 100%;
    height: 100%;   
    display:flex; 
    flex-direction:row;
    justify-content:space-around;
    img{
        border: 2px solid black;
        border-radius:20%
    }
    color:${counsumer.themeState.theme?"#fff":"black"}
`;
    return (

        <HeaderLink>
            <p><a href="https://tech-career-alternative.firebaseapp.com/">
                <img src="img/techLogo.jpg" width="100" height="80px" /></a>
                <img src="/protfolio/img/indi.jpg" width="100" height="80px" />

            </p>
            <p style={{marginTop:"45px"}}>my email: czauda@gmail.com</p>
        </HeaderLink>


    )
}
export default Header;