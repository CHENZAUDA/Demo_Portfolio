import styled from 'styled-components'

export const colors = {
  mainFontColor: "#28253b",
  secondaryFontColor: "#3648ff",
  mutedFontColor: "#777"
}

export const Page = styled.div`
  width: 100%;
  height: calc(100vh - 173.6px);
  background: #fff;
`

export const MiniPage = styled.div`
  width: 100%;
  height: 300px;
  background: #fff;
`
export const PrimaryButton = styled.button`
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    background-color: transparent;
    border: 1px solid #fff;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #fff;
    letter-spacing: 1px;
    transition: all 0.5s;
    border-radius: 16px;
    text-transform: capitalize;
    cursor: pointer;
    &:hover {
      background-color: #fff;
      color: ${colors.mainFontColor}
    }`

export const MenuIcon = styled.img`
    width: 30px;
    height: 30px;
    opacity: 0.5;
    margin-top: 12px;
    margin-bottom: 12px;
    cursor: pointer;
`;

export const VerticalLine = styled.div`
    height: 34px;
    width: 3px;
    display:flex;
    background: ${colors.secondaryFontColor};
    margin-top: 16px;
    margin-bottom: 16px;
`;
