import { PrimaryButton } from '../../Features/Common/CommonStyles'
import styled from 'styled-components'

const Pic = styled.img`
border-radius:24%
`
function Project(props) {

    return (
        <div>
            <Pic src={props.image} height="170px" width="150px" alt="project" />
            <h3>{props.name}</h3>
            <PrimaryButton><a href={props.git}>Github</a></PrimaryButton>
            <PrimaryButton><a href={props.site}>Site</a></PrimaryButton>
        </div>
    )
}
export default Project;