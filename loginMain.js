
console.log('로그인시작');
console.log(document);

var signinButton = document.getElementById('loginbutton')
signinButton.addEventListener('click',signinFunc);

function signinFunc(){
    var userid=document.getElementById('loginEmail').value;
    var userpw=document.getElementById('loginpassword').value

    if(userid =="human" && userpw =="1234"){
        let link = 'MainHomeLogout.html';
        location.href = link;

        alert('로그인 성공');
        console.log('로그인 성공')
    }else{
        alert('로그인 실패');
        console.log('로그인 실패');
    }
}

// const inputId = document.getElementById('loginEmail');
// const inputPw = document.getElementById('loginpassword');
// const btnLogin = document.getElementById('loginbutton');


function tryLogin(){


    inputId.value='';
    inputPw.value='';
}
inputId.addEventListener('keydown',
function(e){

        console.log(e);
    // console.log(e.keyCode);//13 enter
    if(e.keyCode == 13){           
        console.log('엔터가 눌렸다.');
        inputPw.focus();
    }
}
);
inputPw.addEventListener('keydown',
function(e){

    if(e.keyCode == 13){
        console.log('엔터가 눌렸다.');
      
        btnLogin.click();

            
}
}
);


