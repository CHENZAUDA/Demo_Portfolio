import styled from 'styled-components'
import { Page } from '../../Features/Common/CommonStyles';
import Input from '../../Features/Input/Input';

const StyledMainPage = styled.div`
    width: 100%;
    height: 100%;
    background: url('https://images.pexels.com/photos/1416530/pexels-photo-1416530.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
    background-size: cover;
    position: relative;
    opacity: 0.8;
`;

const Darken = styled.div`
    width: 100%;
    height: calc(100vh - 173.6px);
    position: absolute;
    background-color: black;
    opacity: 0.6;
`;

const MainPageBody = styled.div`
    width: 100%;
    height: calc(100vh - 173.6px);
    position: absolute;
    color: #fff;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
        font-size: 40px;
    }
`;

function Contact() {
    return (
      <Page>
          <StyledMainPage>
              <Darken></Darken>
              <MainPageBody>
                    <Input />
              </MainPageBody>
          </StyledMainPage>
      </Page>
    );
  }
  
  export default Contact;