
const navBarResponsive =()=>{
    //Toggle navlinks
    const openBtn = document.getElementById('open');
    const ul = document.getElementById('main-column');
    openBtn.addEventListener('click' , ()=>{
        ul.classList.toggle('active');
        openBtn.classList.toggle('toggle');
    })
    

}

navBarResponsive();

// The darkmode functionality

const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change', ()=>{
    document.body.classList.toggle('darky')
    document.querySelector('.main-nav').classList.toggle('darky');
})

//Scroll to Top
const scrollTop = document.querySelector('.floating-btn');

window.addEventListener("scroll", ()=>{
    if(pageYOffset > 80){
     scrollTop.classList.add('active')
     
    }else{
     scrollTop.classList.remove('active')
     
    }
    
})
scrollTop.addEventListener("click", ()=>{
    window.scrollTo(0 ,0 );
})

//Client-side form validation

//selecting all the input elements
const form = document.getElementById('form');
const nameTxt = document.getElementById('name');
const email = document.getElementById('email');
const textArea= document.getElementById('messagetxt')
// const password = document.getElementById('password');
// const passwordCheck = document.getElementById('password-check');



form.addEventListener('submit',(e)=>{
    e.preventDefault();
    checkInputs()
})
//A function that checks the inputs
const checkInputs = ()=>{
    const nameVal = nameTxt.value.trim();
    console.log(nameVal);
    const emailVal = email.value;
    
    const textAreaVal =textArea.value;
    // const passwordCheckVal = passwordCheck.value;
    // const passwordVal=  password.value;

    if(!nameVal){
       
        setError(nameTxt, 'Name cannot be blank');
      
    }else{
        console.log('hey');
        setSuccess(nameTxt);
    }

    if(!emailVal){
       
        setError(email, 'Email cannot be blank');
      
    }else if(!validateEmail(emailVal)){
        setError(email, 'Please enter a valid email');
  
    }else{
        
        setSuccess(email);
    }
  console.log(trimfield(textAreaVal));
    if(!trimfield(textAreaVal)){
       
        setError(textArea, 'Message cannot be blank');
      
    }else{
        
        setSuccess(textArea);
    }

    // if(!passwordVal){
    //     setError(password, 'Password cannot be empty')
    // }else{
    //     setSuccess(password)
    // }
    // if(!passwordCheckVal){
        
    //     setError(passwordCheck, 'Password cannot be empty')
    // }
    // else if(passwordCheckVal !== passwordVal){
    //     setError (passwordCheck,'Password does not match')
    // }
    // else{
    //     setSuccess(passwordCheck)
    // }

    //show a success message for all the inputs

}
function trimfield(str) 
{ 
    return str.replace(/^\s+|\s+$/g,''); 
}

const setError = (input, message)=>{
    //select the formControl parentElement
    const formControl= input.parentElement;


    //targetting the smallnode

    const small =  formControl.querySelector('small');
    //add error message to the small element
    small.innerHTML = message;

    //add the error class
    formControl.classList.add('error');
    formControl.classList.remove('success');

}
const setSuccess = (input) => {
     //select the formControl parentElement
     const formControl= input.parentElement;

     //add the success class
     formControl.classList.add('success')
     formControl.classList.remove('error')


}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}