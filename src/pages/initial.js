import HeaderLogin from "../components/HeaderLogin"
import { styled } from "styled-components"
import Ranking from "../components/Ranking"

export default function Initial(){

    return(
        <>
        <HeaderLogin />
        <Ranking />
        <Info>Crie sua conta para usar nosso serviço!</Info>
        </>
    )
}

const Info = styled.div`
text-align: center;
    font-family: 'Lexend Deca';
font-style: normal;
font-weight: 700;
font-size: 36px;
line-height: 45px;
color: #000000;
`

