import styled from 'styled-components'
import { Page, colors } from '../../Features/Common/CommonStyles';

const StyledMainPage = styled.div`
    width: 100%;
    height: 100%;
    background-color:#b37ee1;
    background: url('https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
    background-size: cover;    
    position: relative;
    opacity: 0.8;

`;

const Darken = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: black;
    opacity: 0.1;
`;

const MainPageBody = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
        font-size: 40px;
    }
`;

const MainPageHeaderLight = styled.span`
    font-weight: 400;
    opacity: 0.75;
    color:  ${colors.secondaryFontColor};

`;

const MainPageHeaderDetails = styled.h2`
    font-size: 25px;
    font-weight: 200;
    margin-bottom: 32px;
    color:white;
`;

const Carousel = styled.div`
padding: 32px;
margin:7px 30px 10px 50px;
width: 10%;
display: flex;
flex-direction:row;
justify-content: space-around;
align-items: center;
img {
  margin:20px;
    border-radius: 32px;
    height: 10%;
}`


function Home() {
    return (
        <Page>
            <StyledMainPage>
                <Darken></Darken>
                <MainPageBody>
                    <MainPageHeaderLight>
                        <h1>I AM Chen Zauda</h1>
                        <MainPageHeaderDetails> 25 years old from Qiryat-Gat, student in Tech-Career.
                                    <Carousel>
                                <img src="img/useReducer.jpg" width="100px" height="100px" alt="one" />
                                <img src="img/useReducer2.jpg" width="100px" height="100px" alt="one" />
                                <img src="img/useReducer3.jpg" width="100px" height="100px" alt="one" />
                            </Carousel>
                        </MainPageHeaderDetails>
                    </MainPageHeaderLight>
                </MainPageBody>
            </StyledMainPage>
        </Page>
    );
}

export default Home;