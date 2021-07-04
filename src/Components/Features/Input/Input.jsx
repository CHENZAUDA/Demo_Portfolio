import Button from '../Button/Button'
import { colors } from '../../Features/Common/CommonStyles'
import styled from 'styled-components'

const Head = styled.legend`
color:  ${colors.secondaryFontColor};

`
function Input() {


    function submitHandler(event) {
        console.log(event.target);
        const firstName = event.target[0].value;
        const lastName = event.target[1].value;
        const phone = event.target[2].value;
        const email = event.target[3].value;
        const subject = "Hello from Tech-Career";
        const body = `${firstName} ${lastName} - ${phone} <br> ${email}`;
        console.log("hello")
        window.open(`mailto:czauda@gmail.com?subject=${subject}&body=${body}`);
    }

    return (
        <div>
            <fieldset>
                <Head>Contact Me</Head>
                <form onSubmit={submitHandler}>
                    <div><input type="text" name="first" placeholder="Enter first name" /></div>
                    <div><input type="text" name="last" placeholder="Enter last name" /></div>
                    <div><input type="text" name="phone" placeholder="Enter Phone Number" /></div>
                    <div><input type="text" name="amount" placeholder="Enter Email" /></div>
                    <Button type="submit"/>
                </form>
            </fieldset>
        </div>
    )
}
export default Input;