

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

window.onload = () => {

    const btn = document.getElementById('loginbutton');
    const inputId = document.getElementById('loginEmail');
    const inputPw = document.getElementById('loginpassword');
    const inputChk = document.getElementById('checkIdSave');

    let loginId_LocalStorage = localStorage.getItem('loginEmail');
    console.log(loginId_LocalStorage);
 
    if (loginId_LocalStorage != '' && loginId_LocalStorage != null) {
      inputId.value = loginId_LocalStorage; 
      inputChk.checked = true;
    }

    btn.addEventListener('click', function () {   
      if (inputChk.checked == true) {
        console.log(inputChk.checked);
        localStorage.setItem('loginEmail', inputId.value);
      } else {
        console.log(inputChk.checked);
        localStorage.removeItem('loginEmail');
      }

      inputId.value = ''; 
      inputPw.value = ''; 
    });
  }