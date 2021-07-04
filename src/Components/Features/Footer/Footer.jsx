import styled from 'styled-components'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';


const MainFooter = styled.div`
    display: flex;
    width: 100%;
    background: #fff;
    justify-content: space-around;
    align-items: center;

`;

function Footer() {
    return (
        <MainFooter>
            <a href="https://github.com/CHENZAUDA"><GitHubIcon  style={{ color: "#3648ff" }}  fontSize="large" /></a>
            <a href="https://www.linkedin.com/in/chen-zauda-73950316a/"><LinkedInIcon  style={{ color: "#3648ff" }}  fontSize="large" /></a>
            <a href="https://www.facebook.com/chen.zauda"><FacebookIcon style={{ color: "#3648ff" }}  fontSize="large" /></a>
        </MainFooter>
    )
}
export default Footer;