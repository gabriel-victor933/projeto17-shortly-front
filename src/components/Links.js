import { styled } from "styled-components"
import { BsFillTrashFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Links({links, getLinks, setLinks}){

    const navigate = useNavigate()

    

    useEffect(()=>{
        const token = localStorage.getItem("token")

        if(!token) navigate("/")

        getLinks(token)
    },[])



    function handleDelete(id){

        const token = localStorage.getItem("token")
        const config = {headers: {"Authorization": `Bearer ${token}`}}
        axios.delete(`${process.env.REACT_APP_API_URL}/urls/${id}`,config)
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            alert(err.response.data)
            const token = localStorage.getItem("token")
            getLinks(token)
        })

        const newLinks = links.filter((link)=> link.id !== id)
        setLinks(newLinks)
    }


    return (
        <>
        
        {links?.map((link)=>{
            return (
                <Section key={link.id}>
                    <div className="infos">
                        <p>{link.url}</p>
                        <p>link: <a href={`https://shortlyapi-fxb5.onrender.com/urls/open/${link.shortUrl}`}>{link.shortUrl}</a></p>
                        <p>Quantidade de visitantes: {link.visitCount}</p>
                    </div>
                    <div className="delete">
                        <BsFillTrashFill size="22px" color="#EA4F4F" onClick={()=>handleDelete(link.id)}/>
                    </div>
                </Section>
            )
        })}
        </>
    )
}

const Section = styled.div`

    width: 100%;
    height: 60px;
    display: flex;
    border: 1px solid rgba(120, 177, 89, 0.25);
    border-radius: 12px;
    margin: 21px 0px;

    div {
        display: flex;
        align-items: center;
    }

    .delete {
        width: 20%;
        background: #FFFFFF;
        box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
        border-radius: 0px 12px 12px 0px;
        justify-content: center;

    }

    .infos {
        width: 80%;
        background: #80CC74;
        box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
        border-radius: 12px 0px 0px 12px;
        justify-content: space-between;
        padding-left: 10px;
        padding-right: 30px;

        p,a {
            background-color:transparent;
            font-weight: 400;
            font-size: 14px;
            line-height: 18px;
            color: #FFFFFF;
        }

        
    }

`