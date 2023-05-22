import { styled } from "styled-components"

export default function Post(){

    return (
        <Section>
            <input placeholder="Links que cabem no bolso"/>
            <button>Encurtar link</button>
        </Section>
    )
}

const Section = styled.div`
    margin: 70px 0px 30px 0px;
    width: 100%;
    display: flex;
    justify-content: space-between;

    input {
        width: 75%;
        height: 60px;
        background: #FFFFFF;
        border: 1px solid rgba(120, 177, 89, 0.25);
        box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
        border-radius: 12px;
        padding-left: 20px;
    }

    button {
        width: 20%;
        height: 60px;
        background: #5D9040;
        border-radius: 12px;
        border: none;
        
        font-weight: 700;
        font-size: 14px;
        line-height: 18px;
        color: #FFFFFF;
        
        &:hover{
            transform: scale(1.1)
        }
    }
`