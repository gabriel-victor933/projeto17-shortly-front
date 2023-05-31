import { useEffect, useState } from "react"
import { styled } from "styled-components"
import img2 from "../assets/imgs/Vector.png"
import axios from "axios"

export default function Ranking(){

    const [rank,setRank] = useState([])

    useEffect(()=>{

        axios.get(`${process.env.REACT_APP_API_URL}/ranking`)
        .then((res)=>{
            setRank(res.data)
        })
    },[])

    console.log(rank)

    return (
        <Container>
            <div className="logo">
                <img src={img2} alt="img"/>
                <h1>Ranking</h1>    
            </div>
            <div className="rank" >
            {rank.map((p,i)=> <p key={p.id}>{i + 1}. {p.name} - {p.linksCount} links - {p.visitCount} visualizações</p>)}
            </div>
        </Container>
    )
}

const Container = styled.div`
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 60px 0px;

    .rank {
        background: #FFFFFF;
        border: 1px solid rgba(120, 177, 89, 0.25);
        box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
        border-radius: 24px 24px 0px 0px;
        padding: 10px;

        p {
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 500;
            font-size: 22px;
            line-height: 28px;
            color: #000000;
            margin: 6px;
        }
    }

    .logo {
        display: flex;
        justify-content: center;
        margin-bottom: 15px;
    }

    img {
        width: 56px;
        height: 50px;
        margin: 0px 5px;
    }

    h1 {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 700;
        font-size: 36px;
        line-height: 45px;
        color: #000000;
        margin: 0px 5px;
    }
`