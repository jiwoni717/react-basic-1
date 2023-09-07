import {Fragment} from "react";
import axios from "axios";

function Home(){

    const btnClick=()=>{
        alert("믿고 보는 맛집 리스트 클릭")
    }

    const btnClick2=()=>{
        alert("지역별 맛집 리스트 클릭")
    }

    const btnClick3=()=>{
        alert("메뉴별 맛집 리스트 클릭")
    }

    return (
        <Fragment>
            <div className={"row"}>
                <div className={"text-center"}>
                    <input type={"button"} className={"btn btn-sm btn-default"} value={"믿고 보는 맛집 리스트"} style={{"marginRight":"5px"}} onClick={btnClick}/>
                    <input type={"button"} className={"btn btn-sm btn-default"} value={"지역별 맛집 리스트"} onClick={btnClick2}/>
                    <input type={"button"} className={"btn btn-sm btn-default"} value={"메뉴별 맛집 리스트"} style={{"marginLeft":"5px"}} onClick={btnClick3}/>
                </div>
            </div>
        </Fragment>
    )
}

export default Home