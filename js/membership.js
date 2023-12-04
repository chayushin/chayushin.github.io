const frm = document.signupFrm;
const userName = frm.name;
const userId = frm.id;
const userPW = frm.password;
const userPWCk = frm.passwordCheck;
const email1 = frm.email1;
const email2 = frm.email2;
const address = frm.address;

/**
 * submit 핸들러 (유효성검사)
 */
document.signupFrm.onsubmit = (e) => {

    // 이름 유효성검사
    const regExpName = /^[가-힣]{2,}$/;
    if (!regExpTest(regExpName, userName, "이름은 한글2글자 이상이어야 합니다.")){
        return false;
    }
    
    
    // 아이디 유효성검사
    // 중복 아이디 검사
    const userInfos = JSON.parse(localStorage.getItem('userInfos')) || [];
    let isIdExist = 0;
    
    userInfos.forEach((value) => {
        if(value.userId == userId.value){
            return isIdExist = 1;
        }
    })
    if(isIdExist == 1){
        alert(`${userId.value}는 이미 존재하는 아이디입니다.`);
        return false;
    }
    
        
    // 비밀번호 유효성검사
    const regExpArr = [/^.{8,15}$/, /\d/, /[a-zA-Z]/, /[\\*!&]/];
    for (let i = 0; i < regExpArr.length; i++) {
      if (
        !regExpTest(
          regExpArr[i],
          userPW,
          "비밀번호는 8~15자리 숫자/문자/특수문자를 포함해야합니다."
        )
      ) {
        return false;
      }
    }

    // 비밀번호 확인 유효성 검사
    if(!isEqualPwd){
        return false;
    }

    // 이메일 유효성검사
    // @이전 => 3글자 이상 
    // @이후 => 1글자 이상(주소). 글자 가 1~3번 반복
    if (
        !regExpTest(
          /^[\w]{3,}$/,
          email1,
          "이메일 형식에 어긋납니다."
        )
      )
        return false;
    
    if (
        !regExpTest(
          /^[\w]+(\.[\w]+){1,3}$/,
          email2,
          "이메일 형식에 어긋납니다."
        )
      )
        return false;

  alert('🎉회원가입이 성공적으로 완료되었습니다.🎉');
};

// 비밀번호 일치 검사 메소드
function isEqualPwd() {
    if (userPW.value === userPWCk.value) {
      return true;
    } else {
      alert("비밀번호가 일치하지 않습니다.");
      pwd.select();
      return false;
    }
  }

// 유효성검사, 메세지 출력 메소드
function regExpTest(regExp, el, msg) {
    if (regExp.test(el.value)) return true;
    //적합한 문자열이 아닌 경우
    alert(msg);
    el.value = "";
    el.focus();
    return false;
  }

/**
 * 회원가입 정보 localStorage에 저장
 */

const saveSignupInfo = () => {
    const userInfos = JSON.parse(localStorage.getItem('userInfos')) || [];
    userInfos.push(new SingupInfo(userName.value, userId.value, userPW.value, email1.value+'@'+email2.value, address.value));
    localStorage.setItem('userInfos', JSON.stringify(userInfos));
    console.log(userInfos);

    // 초기화
    frm.reset();
};

class SingupInfo{
    constructor(userName, userId,  userPW, userEmail, userAddress, createdAt = Date.now()){
        this.userName = userName;
        this.userId = userId;
        this.userPW = userPW;
        this.userEmail = userEmail;
        this.userAddress= userAddress;
        this.createdAt = createdAt;
    }
}




    
const name = document.querySelector('#name')
const id = document.querySelector("#id");
const password = document.querySelector("#password");
const passwordCheck = document.querySelector("#passwordCheck");

/**
 * input + p.msg.msg-required 의 구조가 동일하므로
 * 반복문을 통해 동일한 핸들러를 각각 바인딩한다.
 */
[name, id, password, passwordCheck].forEach((input) => {
  input.addEventListener('blur', (e) => {
    // e.target.nextElementSibling -> p.msg.msg-required
    if(e.target.value)
      e.target.nextElementSibling.style.display = 'none';
    else 
      e.target.nextElementSibling.style.display = 'block';
  });
});

/**
 * 비밀번호 안내문구 노출
 */
password.addEventListener('focus', (e) => {
  // 필수항목 안내메세지는 우선 숨김처리한다.
  e.target.nextElementSibling.style.display = 'none';
  document.querySelector(".msg.msg-password").style.display = 'block';
});

/**
 * 비밀번호 안내문구 숨김
 */
password.addEventListener('blur', (e) => {
  document.querySelector(".msg.msg-password").style.display = 'none';
});


/**
 * 이름 안내문구 노출
 */
name.addEventListener('focus', (e) => {
    // 필수항목 안내메세지는 우선 숨김처리한다.
    e.target.nextElementSibling.style.display = 'none';
    document.querySelector(".msg.msg-name").style.display = 'block';
  });
  
/**
 * 이름 안내문구 숨김
 */
name.addEventListener('blur',(e)=>{
    document.querySelector('.msg.msg-name').style.display = 'none';
});



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