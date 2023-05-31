import HeaderLogin from "../components/HeaderLogin"
import { styled } from "styled-components"
import { useRef } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function SignUp(){

    const formRef = useRef({email: "",password:"", name:"",confirmPassword:""})
    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault()
        console.log(formRef.current)
       axios.post(`${process.env.REACT_APP_API_URL}/signup`,formRef.current)
       .then((data)=>{
        console.log(data)
        alert("usuario cadastrado com sucesso!")
        navigate("/signin")
       })
       .catch((err)=>{
        
        alert(err.response.data)
       })
    }

    return(
        <>
        <HeaderLogin />
        <Page onSubmit={handleSubmit}>
            <input placeholder="Nome" type="text" onChange={(e)=> formRef.current.name = e.target.value} required/> 
            <input placeholder="E-mail" type="email" onChange={(e)=> formRef.current.email = e.target.value} required/>
            <input placeholder="Senha" type="password" onChange={(e)=> formRef.current.password = e.target.value} required/>
            <input placeholder="Senha" type="password" onChange={(e)=> formRef.current.confirmPassword = e.target.value} required/>
            <input type="submit" placeholder="Entrar" value="Entrar" className="submit"/>
        </Page>
        </>
    )
}

const Page = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px;

    input {
            width: 769px;
            height: 60px;
            border: 1px solid rgba(120, 177, 89, 0.25);
            box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
            border-radius: 12px;
            margin: 12.5px;

            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 18px;
            /* identical to box height */
            padding: 10px;

            &::placeholder {
                color: #9C9C9C;
            }

    }

    .submit {
        width: 182px;
        height: 60px;
        background: #5D9040;
        border-radius: 12px;
        color: white;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 18px;

        &:hover{
            transform: scale(1.1)
        }
    }
`

