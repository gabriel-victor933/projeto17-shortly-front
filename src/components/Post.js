import { useEffect, useRef } from "react"
import { styled } from "styled-components"
import axios from "axios"

export default function Post({getLinks}){

    const postRef = useRef({url:""})

    useEffect(()=>{

        function handleEvent(e){
            if(e.key == "Enter") handlepost()
        }

        document.addEventListener("keydown",handleEvent)

        return ()=>{
            document.removeEventListener("keydown",handleEvent)
        }
    },[])

    function handlepost(){
        
        const token = localStorage.getItem("token")

        const config = {headers: {"Authorization": `Bearer ${token}`}}

        axios.post("https://shortlyapi-fxb5.onrender.com/urls/shorten",postRef.current,config)
        .then((res)=>{
            getLinks(token)
            alert(`URL encurtada. \nid: ${res.data.id} \nshortURL: ${res.data.shortUrl}`)
            getLinks(token)
        })
        .catch((err)=>{
            console.log(err)
            alert(err.response.data)
        })
    }

    return (
        <Section>
            <input type="url" placeholder="Links que cabem no bolso" onChange={(e)=>postRef.current.url = e.target.value}/>
            <button onClick={handlepost}>Encurtar link</button>
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