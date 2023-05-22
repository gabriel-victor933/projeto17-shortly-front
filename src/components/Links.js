import { styled } from "styled-components"
import { BsFillTrashFill } from "react-icons/bs";

export default function Links(){

    return (
        <Section>
            <div className="infos">
                <p>http://www.google.com</p>
                <p>e4251A</p>
                <p>Quantidade de visitantes: 20</p>
            </div>
            <div className="delete">
            <BsFillTrashFill size="22px" color="#EA4F4F"/>
            </div>
        </Section>
    )
}

const Section = styled.div`

    width: 100%;
    height: 60px;
    display: flex;
    border: 1px solid rgba(120, 177, 89, 0.25);
    border-radius: 12px;

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

        p {
            background-color:transparent;
            font-weight: 400;
            font-size: 14px;
            line-height: 18px;
            color: #FFFFFF;
        }
    }

`