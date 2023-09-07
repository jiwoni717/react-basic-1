/* state (data:{}) 생성
    Fragment : 가상 루트 태그
*/
import {Component, Fragment} from "react";
import axios from "axios";

class App2 extends Component{
    constructor(props) {
        super(props);
        /*
            생성자 함수
              1. 멤버변수 설정 => state(=>데이터값 변경)
              2. 이벤트 등록

            function => useState("") => hooks
         */
        this.state={
            category1:[],
            category2:[],
            category3:[]
        }
    }
    componentDidMount() {
        axios.get('http://localhost/food/category1')
            .then(response=>{
                console.log(response.data)
                this.setState({category1:response.data})
            })

        axios.get('http://localhost/food/category2')
            .then(response=>{
                console.log(response.data)
                this.setState({category2:response.data})
            })

        axios.get('http://localhost/food/category3')
            .then(response=>{
                console.log(response.data)
                this.setState({category3:response.data})
            })
    }

    render() {
        const cate1 = this.state.category1.map((c, key)=>
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

        const cate2 = this.state.category2.map((c, key)=>
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

        const cate3 = this.state.category3.map((c, key)=>
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
}

export default App2;