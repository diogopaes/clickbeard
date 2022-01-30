import { Container } from "./styles";

import Logo from "../../assets/logo.svg";
import Bg from "../../assets/bg.png";

export function Header() {
    return (
        <Container style={{backgroundImage: `url(${Bg})`}}>
            <img src={Logo} alt="ClickBeard" />
            <p>Procurando um barbeiro?<br/> Seus problemas acabaram hahaha</p>
        </Container>
    )
}