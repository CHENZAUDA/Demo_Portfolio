import { useEffect, useState } from 'react';
import styled from 'styled-components'
import { colors } from './CommonStyles';

const StyledSkillBar = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 16px;
    margin-bottom: 16px;
    max-width: 350px;
    justify-content: center;
    align-items: center;
    width: 400px;
`;

const TopSkillBar = styled.div`
    display: flex;
    width: 400px;
    justify-content: space-between;
    color: ${colors.mutedFontColor};

`;

const TopSkillBarName = styled.div`
    font-weight: 800;

`;

const SkillBarLine = styled.div`
    width:100%;
    height: 10px;
    background: lightgray;
    border-radius: 16px;
    margin-top: 8px;
    margin-bottom:3px;
`;

function SkillBar(props) {

    const [lineWidth, setLineWidth] = useState(0);

    useEffect(()=>{
        setLineWidth(props.skillLevel);
    },[]);

    return (
      <StyledSkillBar>
          <TopSkillBar>
            <TopSkillBarName>{props.skillName}</TopSkillBarName>
            <div><b>{props.skillLevel}%</b></div>
          </TopSkillBar>
          <SkillBarLine>
              <div style={{width: `${lineWidth}%`, height: '100%', background: `${colors.secondaryFontColor}`, borderRadius: '16px', transition: '3s all'}}></div>
          </SkillBarLine>
      </StyledSkillBar>
    );
  }
  
  export default SkillBar;