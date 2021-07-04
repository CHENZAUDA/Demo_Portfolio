import styled from 'styled-components'
import { Page , colors } from '../../Features/Common/CommonStyles';
import Project from './Project';

const StyledMainPage = styled.div`
    width: 100%;
    height: 100%;
    background: url('https://images.pexels.com/photos/5947658/pexels-photo-5947658.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500');
    background-size: cover;
    position: relative;
    opacity: 0.8;

`;

const Darken = styled.div`
    width: 100%;
    height: calc(100vh - 173.6px);
    position: absolute;
    background-color: black;
    opacity: 0.5;
`;

const MainPageBody = styled.div`
    width: 100%;
    height: calc(100vh - 173.6px);
    position: absolute;
    color:  ${colors.secondaryFontColor};
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
        font-size: 40px;
    }
`;

const StyledProjects = styled.div`
    display: flex;
    > div {
        margin: 0 16px;
    }
`;

function Portfolio() {
    return (
      <Page>
          <StyledMainPage>
              <Darken></Darken>
              <MainPageBody>
                   <h1>Portfolio</h1>
                  <StyledProjects>
                  <Project name="Calculater" git="https://github.com/CHENZAUDA/calculater" site=" https://chenzauda.github.io/calculater/" image="img/calculator.jpg"/>
                  <Project name="Flex Model"  git="https://github.com/CHENZAUDA/flex.model" site=" https://chenzauda.github.io/flex.model/" image="img/flexModel.jpg"/>  
                  <Project name="Resume"  git="https://github.com/CHENZAUDA/resume" site="https://chenzauda.github.io/resume/" image="img/resume.jpg"/>
                  <Project name="Gallery"  git="https://github.com/CHENZAUDA/gallery" site="https://chenzauda.github.io/gallery/" image="img/gallery.jpg"/>
                  </StyledProjects>
              </MainPageBody>
          </StyledMainPage>
      </Page>
    );
  }
  
  export default  Portfolio;