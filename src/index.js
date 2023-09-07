import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import App1 from './App1';
import App2 from './App2';
import App3 from "./App3";
import App4 from "./App4";

const root = ReactDOM.createRoot(document.querySelector(".container"));
const movie = [{"startYearDate":"2023.09.03","endYearDate":"2023.09.03","startDate":"2023년 09월 03일(일)","endDate":"2023년 09월 03일(일)","movieCd":"20226431","showDt":"20230903","thumbUrl":"/common/mast/movie/2023/07/thumb/thn_6ceb3200629f42c8bbac3fedf994a5ff.jpg","movieNm":"오펜하이머","movieNmEn":"Oppenheimer","synop":"“나는 이제 죽음이요, 세상의 파괴자가 되었다.”\r\n세상을 구하기 위해 세상을 파괴할 지도 모르는 선택을 해야 하는 천재 과학자의 핵개발 프로젝트.","prdtYear":"2023","indieYn":null,"artmovieYn":null,"multmovieYn":null,"showTm":"180","showTs":"9","director":"크리스토퍼 놀란","prNm":null,"dtNm":"유니버설픽쳐스인터내셔널 코리아(유)","repNationCd":"미국","movieType":"장편","moviePrdtStat":"개봉","genre":"스릴러,드라마","watchGradeNm":"15세이상관람가","openDt":"20230815","salesAmt":953493507,"audiCnt":88250,"scrCnt":1158,"showCnt":3445,"rank":1,"rankInten":0,"rankOldAndNew":"OLD","rownum":1},{"startYearDate":"2023.09.03","endYearDate":"2023.09.03","startDate":"2023년 09월 03일(일)","endDate":"2023년 09월 03일(일)","movieCd":"20233014","showDt":"20230903","thumbUrl":"/common/mast/movie/2023/08/thumb/thn_2205177b673543e199c03f8b7edf74cf.jpg","movieNm":"타겟","movieNmEn":"Don't Buy the Seller","synop":"영화 <타겟>은 중고거래로 범죄의 표적이 된 수현의 일상 속에서 벌어지는 서스펜스를 담은 스릴러","prdtYear":"2022","indieYn":null,"artmovieYn":null,"multmovieYn":null,"showTm":"101","showTs":"24","director":"박희곤","prNm":"(주)영화사피어나","dtNm":"플러스엠 엔터테인먼트","repNationCd":"한국","movieType":"장편","moviePrdtStat":"개봉","genre":"스릴러","watchGradeNm":"15세이상관람가","openDt":"20230830","salesAmt":638009123,"audiCnt":63547,"scrCnt":961,"showCnt":3445,"rank":2,"rankInten":0,"rankOldAndNew":"OLD","rownum":2},{"startYearDate":"2023.09.03","endYearDate":"2023.09.03","startDate":"2023년 09월 03일(일)","endDate":"2023년 09월 03일(일)","movieCd":"20204264","showDt":"20230903","thumbUrl":"/common/mast/movie/2023/08/thumb/thn_3b27ff34ec6d4214ad7aa177bfabbcba.jpg","movieNm":"콘크리트 유토피아","movieNmEn":"Concrete Utopia","synop":"“아파트는 주민의 것”\r\n\r\n온 세상을 집어삼킨 대지진, 그리고 하루아침에 폐허가 된 서울.\r\n모든 것이 무너졌지만 오직 황궁 아파트만은 그대로다.\r\n\r\n소문을 들은 외부 생존자들이 황궁 아파트로 몰려들자 \r\n위협을 느끼기 시작하는 입주민들.\r\n생존을 위해 하나가 된 그들은 새로운 주민 대표 ‘영탁’을 중심으로 \r\n외부인의 출입을 철저히 막아선 채 아파트 주민만을 위한 새로운 규칙을 만든다.\r\n\r\n덕분에 지옥 같은 바깥 세상과 달리\r\n주민들에겐 더 없이 안전하고 평화로운 유토피아 황궁 아파트.\r\n\r\n하지만 끝이 없는 생존의 위기 속\r\n그들 사이에서도 예상치 못한 갈등이 시작되는데...! \r\n\r\n살아남은 자들의 생존 규칙 \r\n따르거나\r\n떠나거나\r\n","prdtYear":"2021","indieYn":null,"artmovieYn":null,"multmovieYn":null,"showTm":"129","showTs":"59","director":"엄태화","prNm":"클라이맥스 스튜디오(주),(주)비에이치 엔터테인먼트","dtNm":"롯데컬처웍스(주)롯데엔터테인먼트","repNationCd":"한국","movieType":"장편","moviePrdtStat":"개봉","genre":"드라마,기타","watchGradeNm":"15세이상관람가","openDt":"20230809","salesAmt":571025902,"audiCnt":58184,"scrCnt":970,"showCnt":3064,"rank":3,"rankInten":0,"rankOldAndNew":"OLD","rownum":3},{"startYearDate":"2023.09.03","endYearDate":"2023.09.03","startDate":"2023년 09월 03일(일)","endDate":"2023년 09월 03일(일)","movieCd":"20226500","showDt":"20230903","thumbUrl":"/common/mast/movie/2023/08/thumb/thn_4aa89836d8bd4e148a787ded8c6215b6.jpg","movieNm":"달짝지근해: 7510","movieNmEn":"HONEYSWEET","synop":"타고난 미각 100%, 현실 감각은 0% 제과 연구원 ‘치호’(유해진).\r\n과자밖에 모르는 ‘치호’ 앞에 직진밖에 모르는 세상 긍정 마인드 ‘일영’(김희선)이 나타나고,\r\n‘치호’는 인생의 새로운 맛을 알아가기 시작한다.\r\n여기에 염치없고 철까지 없는 형 ‘석호’(차인표), 자아도취 제과회사 사장 ‘병훈’(진선규),\r\n예측불가한 과몰입러 ‘은숙’(한선화)까지 제대로 엮이게 된 ‘치호’.\r\n매일 쳇바퀴 같은 삶을 살던 그의 인생이 버라이어티한 변화로 뒤덮이기 시작하는데...\r\nOMG 세상에 이런 맛이!\r\n올여름, 달짝지근해진 그가 온다!","prdtYear":"2022","indieYn":null,"artmovieYn":null,"multmovieYn":null,"showTm":"118","showTs":"36","director":"이한","prNm":"(주)무비락","dtNm":"(주)마인드마크","repNationCd":"한국","movieType":"장편","moviePrdtStat":"개봉","genre":"코미디","watchGradeNm":"12세이상관람가","openDt":"20230815","salesAmt":562875954,"audiCnt":56612,"scrCnt":936,"showCnt":2817,"rank":4,"rankInten":0,"rankOldAndNew":"OLD","rownum":4},{"startYearDate":"2023.09.03","endYearDate":"2023.09.03","startDate":"2023년 09월 03일(일)","endDate":"2023년 09월 03일(일)","movieCd":"20228930","showDt":"20230903","thumbUrl":"/common/mast/movie/2023/05/thumb/thn_1d8f3d4b27d8479e9250de7c217028ec.jpg","movieNm":"엘리멘탈","movieNmEn":"Elemental","synop":"디즈니·픽사의 놀라운 상상력!\r\n올여름, 세상이 살아 숨 쉰다\r\n\r\n불, 물, 공기, 흙 4개의 원소들이 살고 있는 ‘엘리멘트 시티’\r\n재치 있고 불처럼 열정 넘치는 ‘앰버'는 어느 날 우연히\r\n유쾌하고 감성적이며 물 흐르듯 사는 '웨이드'를 만나 특별한 우정을 쌓으며,\r\n지금껏 믿어온 모든 것들이 흔들리는 새로운 경험을 하게 되는데... \r\n\r\n제76회 칸 영화제 폐막작 선정!\r\n<굿 다이노> 피터 손 감독 연출\r\n<인사이드 아웃>, <소울> 피트 닥터 제작 참여\r\n\r\n6월 14일 극장 대개봉,\r\n웰컴 투 ‘엘리멘트 시티’!","prdtYear":"2023","indieYn":null,"artmovieYn":null,"multmovieYn":null,"showTm":"109","showTs":"9","director":"피터 손","prNm":null,"dtNm":"월트디즈니컴퍼니코리아 유한책임회사","repNationCd":"미국","movieType":"장편","moviePrdtStat":"개봉","genre":"애니메이션","watchGradeNm":"전체관람가","openDt":"20230614","salesAmt":284539765,"audiCnt":28753,"scrCnt":585,"showCnt":981,"rank":5,"rankInten":0,"rankOldAndNew":"OLD","rownum":5},{"startYearDate":"2023.09.03","endYearDate":"2023.09.03","startDate":"2023년 09월 03일(일)","endDate":"2023년 09월 03일(일)","movieCd":"20218541","showDt":"20230903","thumbUrl":"/common/mast/movie/2023/06/thumb/thn_a68cc44d22d84acf9d861d5c931a4254.jpg","movieNm":"밀수","movieNmEn":"Smugglers","synop":"열길 물속은 알아도 한길 사람 속은 모른다!\r\n\r\n 평화롭던 바닷가 마을 군천에 화학 공장이 들어서면서 하루아침에 일자리를 잃은 해녀들.\r\n\r\n먹고 살기 위한 방법을 찾던 승부사 '춘자'(김혜수)는\r\n\r\n바다 속에 던진 물건을 건져 올리기만 하면 큰돈을 벌 수 있다는\r\n\r\n밀수의 세계를 알게 되고 해녀들의 리더 '진숙'(염정아)에게 솔깃한 제안을 한다.\r\n\r\n위험한 일임을 알면서도 생계를 위해 과감히 결단을 내린 해녀 '진숙'은\r\n\r\n전국구 밀수왕 '권 상사'를 만나게 되면서 확 커진 밀수판에 본격적으로 빠지게 된다.\r\n\r\n그러던 어느 날, 일확천금을 얻을 수 있는 일생일대의 기회가 찾아오고\r\n\r\n사람들은 서로를 속고 속이며 거대한 밀수판 속으로 휩쓸려 들어가기 시작하는데...\r\n\r\n물길을 아는 자가 돈길의 주인이 된다!\r\n","prdtYear":"2023","indieYn":null,"artmovieYn":null,"multmovieYn":null,"showTm":"129","showTs":"3","director":"류승완","prNm":"(주)외유내강","dtNm":"(주)넥스트엔터테인먼트월드(NEW)","repNationCd":"한국","movieType":"장편","moviePrdtStat":"개봉","genre":"범죄","watchGradeNm":"15세이상관람가","openDt":"20230726","salesAmt":191306732,"audiCnt":19093,"scrCnt":628,"showCnt":1074,"rank":6,"rankInten":0,"rankOldAndNew":"OLD","rownum":6},{"startYearDate":"2023.09.03","endYearDate":"2023.09.03","startDate":"2023년 09월 03일(일)","endDate":"2023년 09월 03일(일)","movieCd":"20233075","showDt":"20230903","thumbUrl":"/common/mast/movie/2023/08/thumb/thn_098348536b8248e6b3d5374dc0aedcb0.jpg","movieNm":"신체모음.zip","movieNmEn":"Body Parts","synop":"“마지막 조각은 바로 너야”\r\n\r\n사이비 종교 단체를 잠입 취재하는 막내 기자 ‘시경’.\r\n특별한 의식에 초대받아 참여하게 되고, 교인들은 차례대로 소원을 빌고 제물을 바친다.\r\n드디어 ‘시경’의 차례가 된 순간,\r\n제물이 바로 신체 조각이란 사실을 깨닫고 충격에 휩싸이게 되는데…\r\n\r\n눈, 코, 입… 각 신체 조각에 얽힌 6개의 이야기!\r\n모든 신체가 모이면 날것의 공포가 깨어난다!","prdtYear":"2022","indieYn":"Y","artmovieYn":null,"multmovieYn":"Y","showTm":"104","showTs":"7","director":"최원경,전병덕,이광진,지삼,김장미,서형우","prNm":"(주)싸이더스,주식회사 헤이데이프로덕션","dtNm":"(주)스튜디오디에이치엘,(주)싸이더스","repNationCd":"한국","movieType":"옴니버스","moviePrdtStat":"개봉","genre":"공포(호러)","watchGradeNm":"15세이상관람가","openDt":"20230830","salesAmt":86536600,"audiCnt":9244,"scrCnt":247,"showCnt":622,"rank":7,"rankInten":0,"rankOldAndNew":"OLD","rownum":7},{"startYearDate":"2023.09.03","endYearDate":"2023.09.03","startDate":"2023년 09월 03일(일)","endDate":"2023년 09월 03일(일)","movieCd":"20223831","showDt":"20230903","thumbUrl":"/common/mast/movie/2023/07/thumb/thn_19a25e5cf13e4a48b291e47150fe119f.jpg","movieNm":"스파이 코드명 포춘","movieNmEn":"Operation Fortune: Ruse de guerre","synop":"전 세계 검은 무기 거래 왕, 슈퍼 빌런 ‘그렉’\r\n그가 정체 파악조차 불가능한 ‘핸들’을 거래한다는 첩보 내용이 입수된다.\r\n국가 정보국은 전세계를 붕괴시킬 수도 있는 이것이 무엇인지 대혼돈에 빠지게 되고… \r\n\r\n이 혼돈을 해결할 자는 오직 하나!\r\n액션 만랩, 수트 핏과 꿀성대까지!\r\n모든 것이 완벽한 업계 최고의 스파이 ‘포춘’\r\n\r\n무비 스타, 테크 전문가와 샷건 마스터까지 \r\n팀 ‘포춘’을 조합한 후 일생일대의 위험한 임무에 나서게 되는데… \r\n\r\n전세계가 그를 기다렸다!\r\n준비된 스파이 ‘포춘’의 시대가 열린다!","prdtYear":"2023","indieYn":null,"artmovieYn":null,"multmovieYn":null,"showTm":"113","showTs":"44","director":"가이 리치","prNm":null,"dtNm":"(주)레드아이스 엔터테인먼트,(주)제이앤씨미디어그룹","repNationCd":"미국","movieType":"장편","moviePrdtStat":"개봉","genre":"액션","watchGradeNm":"15세이상관람가","openDt":"20230830","salesAmt":62304590,"audiCnt":6083,"scrCnt":441,"showCnt":764,"rank":8,"rankInten":0,"rankOldAndNew":"OLD","rownum":8},{"startYearDate":"2023.09.03","endYearDate":"2023.09.03","startDate":"2023년 09월 03일(일)","endDate":"2023년 09월 03일(일)","movieCd":"20232629","showDt":"20230903","thumbUrl":"/common/mast/movie/2023/08/thumb/thn_79826f89413e41f88510077f082ae748.jpg","movieNm":"마야 3: 숲속 왕국의 위기","movieNmEn":"Maya the Bee 3: The Golden Orb (2021)","synop":"환상의 그린리프를 찾아 떠나는\r\n‘꿀’잼 ‘꿀’귀 숲속 어드벤처!\r\n\r\n기나긴 겨울이 지나고 봄과 함께 깨어난 ‘마야’와 단짝 ‘윌리’ 앞에\r\n근육 만땅 딱정벌레들로부터 쫓기는 한 개미가 나타난다.\r\n\r\n개미가 가방 속에서 꺼내든 것은 바로 비밀의 황금알!\r\n둘은 다친 개미를 대신해 황금알을 배달하기로 한다.\r\n\r\n뾰족 나무를 지나, 위험천만 시냇물 그리고 무시무시한 붐버그들의 요새까지…\r\n과연 환상의 꿀베프 ‘마야’와 ‘윌리’는 \r\n최종 목적지인 ‘그린리프’까지 무사히 도착할 수 있을까?\r\n\r\n숲속 왕국의 운명이 걸린 초특급 모험이 시작된다!\r\n","prdtYear":"2021","indieYn":null,"artmovieYn":null,"multmovieYn":"Y","showTm":"88","showTs":"9","director":"노엘 클리어리","prNm":null,"dtNm":"(주)박수엔터테인먼트","repNationCd":"독일","movieType":"장편","moviePrdtStat":"개봉","genre":"애니메이션","watchGradeNm":"전체관람가","openDt":"20230824","salesAmt":40141500,"audiCnt":4338,"scrCnt":166,"showCnt":217,"rank":9,"rankInten":0,"rankOldAndNew":"OLD","rownum":9},{"startYearDate":"2023.09.03","endYearDate":"2023.09.03","startDate":"2023년 09월 03일(일)","endDate":"2023년 09월 03일(일)","movieCd":"20231253","showDt":"20230903","thumbUrl":"/common/mast/movie/2023/08/thumb/thn_ad1f1001279945ceb38da02f952ee98f.jpg","movieNm":"일주일간 친구","movieNmEn":"One Week Friends","synop":"일주일마다 친구에 대한 기억을 잃는 전학생 ‘린샹즈’\r\n병 때문에 자발적 아싸가 돼버린 그녀에게\r\n성화 재수학원 최고 인싸 3인방 ‘쉬유수’, ‘송샤오난’, ‘장우'가 다가온다.\r\n\r\n“일주일만 기억해도 상관없어. 일주일간 친구 하면 되잖아!”\r\n\r\n머리가 좋아지는 호박죽, 기억력 증진 댄스, 깜찍한 유수표 엄지 인형까지!\r\n세 사람은 샹즈의 단 하나뿐인 ‘일주일간 친구’가 되기 위해 고군분투하고,\r\n샹즈는 그들과의 추억을 일기장에 채워 나가기 시작한다.\r\n\r\n매주 리셋되는 우정 속에서 과연 우리는 ‘찐친’이 될 수 있을까?!\r\n\r\n","prdtYear":"2021","indieYn":null,"artmovieYn":null,"multmovieYn":null,"showTm":"106","showTs":"23","director":"임효겸","prNm":null,"dtNm":"주식회사 올랄라스토리","repNationCd":"중국","movieType":"장편","moviePrdtStat":"개봉예정","genre":"드라마,멜로/로맨스","watchGradeNm":"12세이상관람가","openDt":"20230906","salesAmt":33018100,"audiCnt":2510,"scrCnt":7,"showCnt":10,"rank":10,"rankInten":0,"rankOldAndNew":"OLD","rownum":10}];
root.render(
  <React.StrictMode>
    <App4 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();