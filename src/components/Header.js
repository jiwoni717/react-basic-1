function Header(){
    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">React(Hooks)</a>
                </div>
                <ul className="nav navbar-nav">
                    <li className="active"><a href="#">Home</a></li>
                    <li className="dropdown">
                        <a className="dropdown-toggle" data-toggle="dropdown" href="#">맛집
                            <span className="caret"></span></a>
                        <ul className="dropdown-menu">
                            <li><a href="#">지역별 맛집</a></li>
                            <li><a href="#">맛집 추천</a></li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <a className="dropdown-toggle" data-toggle="dropdown" href="#">여행
                            <span className="caret"></span></a>
                        <ul className="dropdown-menu">
                            <li><a href="#">명소</a></li>
                            <li><a href="#">자연</a></li>
                            <li><a href="#">쇼핑</a></li>
                        </ul>
                    </li>
                    <li><a href="#">커뮤니티</a></li>
                    <li><a href="#">오늘의 뉴스</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header