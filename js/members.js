
document.querySelector('nav ul li.navHome').addEventListener('click', ()=>{
    location.href='/index.html';
});
document.querySelector('nav ul li.navMyPage').addEventListener('click', ()=>{
    location.href='/mypage.html';
});
document.querySelector('nav ul li.navRoadMapPage').addEventListener('click', ()=>{
    location.href='/roadmap.html';
});
document.querySelector('nav ul li.navHobbyPage').addEventListener('click', ()=>{
    location.href='/hobby.html';
});
document.querySelector('nav ul li.navMembersPage').addEventListener('click', ()=>{
    location.href='/members.html';
});
document.querySelector('header nav.toLoginPage').addEventListener('click', ()=>{
    location.href='/membership.html'
});



/**
 * localStorage userInfos를 화면에 출력하기
 * - userInfos -> tr
 * - 일시: millis -> Date -> yy/mm/dd hh:mi
 * - 방명록을 작성한 후 테이블이 화면에 표시되어야 함.
 */
const renderUserInfos = () => {
    // localStorage에서 userInfos 읽어보기
    const userInfos = JSON.parse(localStorage.getItem('userInfos')) || [];

    document.querySelector('table#tb-userInfos tbody').innerHTML = 
        userInfos.reduce((html, {userName, userId, userPW, userEmail, userAddress, createdAt}, index) => {
            console.log(index, html);
            return  `
            ${html}
            <tr>
                <td>${userName}</td>
                <td>${userId}</td>
                <td>${userPW}</td>
                <td>${userEmail}</td>
                <td>${userAddress}</td>
                <td>${convertToDateTime(createdAt)}</td>
            </tr>`;
        }, "");
};

const f = (n) => n < 10 ? '0' + n : n;

const convertToDateTime = (millis) => {
    const d = new Date(millis);
    const yy = d.getFullYear();
    const mm = f(d.getMonth()+1);
    const dd = f(d.getDate());
    const hh = f(d.getHours());
    const mi = f(d.getMinutes());
    return `${yy}/${mm}/${dd} ${hh}:${mi}`;
};

// 페이지 로딩시 출력
renderUserInfos();