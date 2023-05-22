import HeaderMain from "../components/HeaderMain"
import Post from "../components/Post"
import Links from "../components/Links"
import axios from "axios"
import { useState } from "react"

export default function Home(){

    const [links,setLinks] = useState([])

    function getLinks(token){
        const config = {headers: {"Authorization": `Bearer ${token}`}}

        axios.get("https://shortlyapi-fxb5.onrender.com/users/me",config)
        .then((res)=>{
            //console.log(res)
            console.log(res)
            localStorage.setItem("name",`${res.data.name}`)
            if(res.data){
                setLinks(res.data?.shortenedUrls)
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    return(
        <>
        <HeaderMain />
        <Post getLinks={getLinks}/>
        <Links getLinks={getLinks} links={links} setLinks={setLinks}/>
        </>
    )
}