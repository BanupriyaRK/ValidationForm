const UserName=document.getElementById('username');
const Email=document.getElementById('emailaddress');
const password=document.getElementById('password');
const errormessage=document.getElementsByClassName('message');
const sucess=document.getElementById('sucess')
function submit() 
{
    clear();
  let errorflag=false;
  if(UserName.value<1)
  {
    errormessage[0].innerText="Name can't be blank";
    errorflag=true;
   document.getElementById("username").style.border="2px solid #E4B7E5"
  }
  if(Email.value<1){
    errormessage[1].innerText="Email can't be blank";
    errorflag=true;
    document.getElementById("emailaddress").style.border="2px solid #E4B7E5";
}
  else if(!emailIsValid(Email.value))
  {
    errormessage[1].innerText="Invaild Email";
    errorflag=true;
    document.getElementById("emailaddress").style.border="2px solid #E4B7E5";
  }
  else
  {
    errormessage[1].innerText=""
  }
  // if(password.value<1)
  if(password.value<1){
    errormessage[2].innerText="password can't be blank";
    errorflag=true;
    document.getElementById("password").style.border="2px solid #E4B7E5";
    document.getElementById("rules").style.visibility="visible";
}
  else if(!passwordIsValid(password.value))
  {
    errormessage[2].innerText="Invaild password";
    errorflag=true;
    document.getElementById("rules").style.visibility="visible";
    document.getElementById("password").style.border="2px solid #E4B7E5";
  }
  else{
    errormessage[2].innerText=""
  }
  if(!errorflag){
    sucess.innerHTML="FORM VALIDATION SUCESSFULL";
    document.getElementById("sucess").style.color="green";
    document.getElementById("username").style.border="2px solid green";
    document.getElementById("emailaddress").style.border="2px solid green";
    document.getElementById("password").style.border="2px solid green";
    document.getElementById("rules").style.visibility="hidden";
  }
}
function emailIsValid(Email)
 {
    let pattern=/\S+@\S+\.\S+/;
    return pattern.test(Email);
}
function passwordIsValid(password) 
{
  let passwordpattern=/[0-9]+[a-z]+[A-Z]/g;
  return passwordpattern.test(password);
}
function clear() 
{
    for(let i=0;i<errormessage.length;i++)
    {
        errormessage[i].innerText="";
        
    }
    // UserName.classList.remove("errorborder");
    // Email.classList.remove("errorboder")
    // password.classList.remove("errorborder")
}
function remove() {
    UserName.value="";
    Email.value="";
    password.value="";
    sucess.innerText="";
    errormessage[0].innerText="";
    errormessage[1].innerText="";
    errormessage[2].innerText="";
    document.getElementById("username").style.border="";
    document.getElementById("emailaddress").style.border="";
    document.getElementById("password").style.border="";
    document.getElementById("rules").style.visibility="hidden";
}
remove();