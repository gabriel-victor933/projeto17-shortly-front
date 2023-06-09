import img from "../assets/imgs/Logo.png"
import { styled } from "styled-components"
import { useNavigate } from "react-router-dom"

export default function HeaderLogin(){

    const navigate = useNavigate()

    return(
        <Container>
            <div className="sign">
                <p onClick={()=>navigate("/signin")} className="in">Entrar</p>
                <p onClick={()=>navigate("/signup")} className="up">Cadastrar-se</p>
            </div>
            <img src={img} alt="logo" onClick={()=>navigate("/")}/>
            
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 30px;
    position: relative;

    img {
        width: 314px;
        height: 102px;
    }

    .sign{
        display: flex;
        justify-content: flex-end;
        width: 100%;

        p {
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 18px;
            margin: 10px;

            &:hover{
                transform: scale(1.1);
                cursor: pointer;
            }
        }

        .in {
            color: #5D9040;
            }

            .up {
            color: #9C9C9C;
            }
    }
`