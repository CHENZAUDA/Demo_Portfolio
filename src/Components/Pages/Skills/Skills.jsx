import styled from 'styled-components'
import { colors, Page } from '../../Features/Common/CommonStyles';
import SkillBar from '../../Features/Common/SkillBar';
const StyledAboutMePage = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap:wrap ;
    width: 30%;
    height: calc(100vh - 173.6px);
    justify-content: flex-start;
    align-items: center;
    position:relativ;
    color:  ${colors.secondaryFontColor};
    h2 {
        font-size: 30px;
    }
    p {
        color: ${colors.mutedFontColor};
        text-align: center;
        font-weight: 400;
    }
`;

const AboutMeBody = styled.div`
    width: 100%;
    min-height: 400px;
    margin-top: 16px;
    display: flex;
`;

const AboutMeImage = styled.div`
    padding: 32px;
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    img {
        border-radius: 32px;
        height: 80%;
    }
`;

const AboutMeDetails = styled.div`
    padding: 32px;
    width: 50%;
    display: flex;
    flex-direction: column;
    span {
        display: inline-block;
        margin-top: 16px;
        margin-bottom: 16px;
        font-size: 20px;
    }
    h3 {
        color: ${colors.secondaryFontColor};
        font-size: 24px;
    }
    p {
        margin-bottom: 16px;
        width: 75%;
        text-align: left;
    }
`;


const StyledSkillContainer = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position:absolute;
margin-left:765px;
    top:170px

`;

function Skills() {

    return (
        <Page>
            <StyledAboutMePage>
                <AboutMeBody>
                    <AboutMeImage>
                        <img src="/portfolio/img/mePic.jpg" alt="About me" />
                    </AboutMeImage>
                    <AboutMeDetails>
                        <span>Hello & Welcome</span>
                        <h3>Chen Zauda.</h3>
                        <span>Full Stuck Developer • Junior • </span>

                    </AboutMeDetails>
                </AboutMeBody>
                <h2>About Me</h2>
                <p><b>my skills:</b><br />
                    <b>develope skills:</b> <br /> i learned in full stuck: HTML, CSS, JAVASCRIPT, OOP, C#, DOT NET, SQL, REACT, Developing ASP.NET,ASP.NET MVC,ANGULAR.JS.<br />
                    <b>professional skills:</b> <br /> Verbal communication, Teamwork ,Self-propelled capability ,Planning and organization ,flexibility <br />
                    <b>personal skills:</b> <br /> Has good interpersonal skills, ability to work under pressure, high work ethic and service consciousness.<br />
                The ability to work independently, teamwork and multiple investment.
                </p>

            </StyledAboutMePage>
            <StyledSkillContainer>
                <SkillBar skillName="HTML" skillLevel={100} />
                <SkillBar skillName="CSS" skillLevel={60} />
                <SkillBar skillName="JAVASCRIPT" skillLevel={90} />
                <SkillBar skillName="C#" skillLevel={85} />
                <SkillBar skillName="REACT" skillLevel={80} />
            </StyledSkillContainer>
        </Page>
    );
}

export default Skills;