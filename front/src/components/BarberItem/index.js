import { Container } from "./styles";

export function BarberItem() {
    return (
        <Container>
            <div>
                <span>Nome</span>
                <h4>João Filho</h4>
            </div>
            <div>
                <span>Procedimentos</span>
                <h4>cabelo, barba, bigode</h4>
            </div>
            <div>
                <span>Data de início</span>
                <h4>10/01/2022</h4>
            </div>

            <button>Remover</button>
        </Container>
    )
}