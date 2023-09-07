import logo from './logo.svg';
import './App.css';
import {Component, Fragment} from "react";
import axios from "axios";

/*
      라이브러리 => import
      => 한개의 라이브러리에서 여러개를 가져올 때 : import {Component, Fragment} from 'react';
      => class → react-hooks(function)
        문법사항
          1) 클래스, 함수명 : 첫자는 대문자 → 소문자로 쓰면 html로 인식한다
          2) 이벤트는 JavaScript를 이용해서 처리
          3) HTML을 만들어서 전송
          4) JSX를 사용한다
            JavaScript + XML → 반드시 루트 태그를 사용한다
              <h1></h1>
              <h1></h1> → 오류남

            속성 → 반드시 값 첨부할 때 "" 붙일것
            style 적용할 때 → style = {{margin : ''}}
            외부 CSS 적용 → className=""
          5) return (html)
            return (<html>...)
            return (
            )
            return → 오류남
            (
            )
          6) 클래스 메모리 할당, 함수 호출
            class App{ ===> <App/>로 호출
            }

            function App(){ ===> <App/>로 호출
            }

            <div>
              <Header/>
              <Home/>
              <Footer/>
            </div>
          7) 자동 수행 메소드(생명 주기)
            window.onload = function(){}
            $(function(){})
            mounted:function(){} : vue
            componentDidMount(){} : react
              => render() : HTML을 해당위치에 보내는 역할
            componentDidUpdate(){}
              => 값이 변경됐을 때도 render()호출
              => 변수
                state : data:{} → 변경이 가능한 데이터
                props : 속성으로 값을 받을 때 → 불변의 데이터

      1. 방식
        - 클래스형
          class App extends Component{}
        - function App(){} → React(MVC의 View) → client (서버 : NodeJS, Spring)
          단점 : 단방향 통신
        - funciton App(){} → 양방향 : Redux

        ┌Vue, React 장단점
        ├Vue와 React의 차이점
        └가상돔
 */
class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        /* HTML을 추가 */
        const html = this.props.movie.map((m)=>
            <tr>
                <td className={"text-center"}>{m.rank}</td>
                <td className={"text-center"}>
                    <img src={"https://www.kobis.or.kr/"+m.thumbUrl} style={{"width":"30%"}}/>
                </td>
                <td>{m.movieNm}</td>
                <td className={"text-center"}>{m.director}</td>
                <td className={"text-center"}>{m.genre}</td>
            </tr>
        )
        return (
          <div className={"row"}>
            <h2 className={"text-center"}>일일 박스오피스</h2>
              <table className={"table"}>
                  <thead>
                    <tr>
                        <th className={"text-center"}>순위</th>
                        <th className={"text-center"}></th>
                        <th className={"text-center"}>영화명</th>
                        <th className={"text-center"}>감독</th>
                        <th className={"text-center"}>장르</th>
                    </tr>
                  </thead>
                  <tbody>
                    {html}
                  </tbody>
              </table>
          </div>
        )
    }
}


export default App;
