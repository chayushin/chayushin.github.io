
/**
 * 네비게이션 클릭 이동
 */
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


document.querySelector('li#discord').addEventListener('click', () => {
    const newWindow = open("https://discord.gg/5tTRFQSFJG");
});
document.querySelector('li#github').addEventListener('click', () => {
    const newWindow = open("https://github.com/chayushin/chayushin.github.io.git");
});
document.querySelector('li#nortion').addEventListener('click', () => {
    const newWindow = open("https://www.notion.so/53cbd1b2ff4e41548c4d5ef32b7742b5?v=61fc25dba91b4c939424accc7dc1dc1c&pvs=4");
});
document.querySelector('li#kakao').addEventListener('click', () => {
    const newWindow = open("http://qr.kakao.com/talk/j9GNxsn3GFLxeSSt79JMf1D4qvk-");
});