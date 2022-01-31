import { Container, Loged } from "./styles";

import Logo from "../../assets/logo.svg";
import Bg from "../../assets/bg.png";

export function Header(props) {
    return (
        <Container style={{backgroundImage: `url(${Bg})`}}>
            {props.loged ? (
                <Loged>
                    <img src={Logo} alt="ClickBeard" />
                </Loged>
            ) : (
                <>
                    <img src={Logo} alt="ClickBeard" />
                    <p>Procurando um barbeiro?<br/> Seus problemas acabaram hahaha</p>
                </>
            )}
        </Container>
    )
}