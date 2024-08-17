
const loginForm= document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting=document.querySelector("#greeting");

const HIDDEN_CLASSNAME="hidden";
const USERNAME_KEY="username";

function onLoginSubmit(event){

    event.preventDefault(); //브라우저의 기본 동작 멈추기 -> 사이트 접속 멈추기
    loginForm.classList.add(HIDDEN_CLASSNAME); //form에 hidden클래스를 갖게 된다.
    const username = loginInput.value; //input값을 변수에 저장하고
    localStorage.setItem(USERNAME_KEY,username); //저장될 아이템이름, 값은 user변수
    //비어있는 text더함
    paintGreetings(username);
}

//submit event : 엔터를 누르거나 버튼을 클릭할 때 발생한다.



function paintGreetings(username){
    greeting.innerText=`Hello ${username}`; 
    greeting.classList.remove(HIDDEN_CLASSNAME); 
   

}


const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){

    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
}else{
    //show the greetings
    paintGreetings(savedUsername);
   
   
}