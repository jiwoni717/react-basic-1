import {Fragment, useEffect, useState} from "react"; //React-Hooks
import axios from "axios";

function App3(){
    // 1. 변수 선언
    const [category1, setCategory1] = useState([]);
    const [category2, setCategory2] = useState([]);
    const [category3, setCategory3] = useState([]);

    // 2. 데이터 읽기
    useEffect(() => {
        //componentDidMount()
        axios.get('http://localhost/food/category1').then(response=>{
            setCategory1(response.data)
        })

        axios.get('http://localhost/food/category2').then(response=>{
            setCategory2(response.data)
        })

        axios.get('http://localhost/food/category3').then(response=>{
            setCategory3(response.data)
        })

    }, []);

    const cate1 = category1.map((c,key)=>
        <div className="col-md-3" key={c.cno}>
            <div className="thumbnail">
                <a href="#">
                    <img src={c.poster} alt="Lights" style={{"width":"100%"}}/>
                    <div className="caption">
                        <p>{c.title}</p>
                    </div>
                </a>
            </div>
        </div>
    )

    const cate2 = category2.map((c,key)=>
        <div className="col-md-4" key={c.cno}>
            <div className="thumbnail">
                <a href="#">
                    <img src={c.poster} alt="Lights" style={{"width":"100%"}}/>
                    <div className="caption">
                        <p>{c.title}</p>
                    </div>
                </a>
            </div>
        </div>
    )

    const cate3 = category3.map((c,key)=>
        <div className="col-md-3" key={c.cno}>
            <div className="thumbnail">
                <a href="#">
                    <img src={c.poster} alt="Lights" style={{"width":"100%"}}/>
                    <div className="caption">
                        <p>{c.title}</p>
                    </div>
                </a>
            </div>
        </div>
    )

    return (
        <Fragment>
            <h2 className={"text-center"}>믿고 보는 맛집 리스트</h2>
            <hr/>
            <div className={"row"}>
                {cate1}
            </div>

            <h2 className={"text-center"}>지역별 맛집 리스트</h2>
            <hr/>
            <div className={"row"}>
                {cate2}
            </div>

            <h2 className={"text-center"}>메뉴별 맛집 리스트</h2>
            <hr/>
            <div className={"row"}>
                {cate3}
            </div>
        </Fragment>
    )
}

export default App3