let loginBtn = document.querySelector('#loginBtn');
loginBtn.addEventListener('click',loginFn);
let chatBtn = document.querySelector('#chatBtn');
chatBtn.addEventListener('click', chatFn);

async function loginFn(){
    let loginForm = document.querySelector('#loginForm');
    let userid = document.querySelector('#userid');
    let userpw = document.querySelector('#userpw');
    
    if(userid.value==''){alert('이메일 주소를 입력해주세요.'); userid.focus(); return 0;};
    if(userpw.value==''){alert('비밀번호를 입력해주세요.'); userpw.focus(); return 0;};

    let url = `http://localhost:3000/user/logincheck`;
    let options = {
        method:'POST',
        headers:{
            'content-type':'application/json',
        },
        body:JSON.stringify({
            userid:userid.value, userpw:userpw.value,
        })
    }
    let response = await fetch(url,options);
    let res_body = await response.json();
    let {result, msg} = res_body;
    alert(msg);

    if(result){
        loginForm.submit();
    }else{
        userid.value='';
        userpw.value='';
        userid.focus();
    }
}

function chatFn(){
    var chatWidth = 450;
    var chatHeight = 820;
    var chatLeft = 90;
    var chatTop = 100;
    // xPos = (document.body.offsetWidth) - w; // 오른쪽 정렬
    // xPos += window.screenLeft; // 듀얼 모니터일 때
    // var yPos = (document.body.offsetHeight/2) - (h/2);
    window.open('chat','a',`width = ${chatWidth}px, height = ${chatHeight}px,left = ${chatLeft}%,top = ${chatTop}`);
}