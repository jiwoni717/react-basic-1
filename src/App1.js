function App1(props){
    const html = props.movie.map((m)=>
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
            <h2 className={"text-center"}>{props.title}</h2>
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
export default App1;