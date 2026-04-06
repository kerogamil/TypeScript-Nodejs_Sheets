const form = document.getElementById('formLogin') as HTMLFormElement;
const textArea = document.getElementById('formData') as HTMLTextAreaElement;

const usernameE1 = document.getElementById('username') as HTMLInputElement;
const usernameErorr = document.getElementById('usernameError') as HTMLParagraphElement;

const passwordE1 = document.getElementById('password') as HTMLInputElement;
const passwordErorr = document.getElementById('passwordErorr') as HTMLParagraphElement;

const semesterE1 = document.getElementById('semester') as HTMLSelectElement;
const semesterError = document.getElementById('semesterError') as HTMLParagraphElement;

const comp102checkbox = document.getElementById('COMP102') as HTMLInputELement;
const comp206checkbox = document.getElementById('COMP206') as HTMLInputELement;
const math101checkbox = document.getElementById('Math101') as HTMLInputELement;

const newsletter = document.getElementById('newsletter') as HTMLInputElement;

form.addEventListener('submit',submission);
function submission(e:Event):void{
e.preventDefault();
const isUsernameValid = checkUsername();
const isPasswordValid = checkPassword();
const isSemesterValid = checksemester();
    if(isUsernameValid&&isPasswordValid&&isSemesterValid){
        displayFormData();
    }
}

function isRequire(value:string):boolean{
    return value !== '';
}

function isBetween(lenght:number,min:number,max:number):boolean{
return lenght>=min&&lenght<=max;
}

function checkUsername():boolean{
let valid = false;
const min =6;
const max = 12;

const username = usernameE1.value.trim();
if(!isRequire(username)){
    usernameErorr.textContent = 'username must be required';
}else if(!isBetween(username.length,min,max)){
    usernameErorr.textContent = 'must be Between 6 and 12 character';
}else{
    usernameErorr.textContent = '';
    valid = true;
}
return valid;
}

function checkUppercase(str:string):boolean{
return /[A-Z]/.test(str);
}

function checkLowercase(str:string):boolean{
return /[a-z]/.test(str);
}

function checkPassword():boolean{
    let valid = false;
    const password = passwordE1.value.trim();
    if(!isRequire(password)){
        passwordErorr.textContent = 'password must be required';
    }else if(!checkLowercase(password)||!checkUppercase(password)){
        passwordErorr.textContent = 'password must contain at least one lowercase and uppercase character';
    }else{
        passwordErorr.textContent = '';
        valid = true;
    }
    return valid;
    }

function checkSemester():boolean{
    let valid = false;
    const semester = semesterE1.value;
    if(!isRequire(semester)){
        passwordErorr.textContent = 'semester must be required';
    }else if((semester==='first'||semester==='second')&&comp206checkbox.checked){
        semesterError.textContent = 'you cannot register in comp206';
    }else{
        passwordErorr.textContent = '';
        valid = true;
    }
    return valid;
}
function displayFormData():void{
    textArea.style.display="block";

    const username = usernameE1.value.trim();
    const password = passwordE1.value;

    let data = '';
    data +=`Username:${username}`;
    data +=`Password:${password}`;
    data +=`Courses taken: `;

    if(comp102checkbox.checked) data+=`\tCOMP102\n`;
    if(math101checkbox.checked) data+=`\tmath101\n`;
    if(comp206checkbox.checked) data+=`\tCOMP206\n`;

    textArea.value = data;
}

newsletterCheckbox.addEventListener('change',(e)=>{
if(newsletterCheckbox.checked){
    alert('warning:###########################################');
} 
});

usernameE1.addEventListener('focus',()=>{
if(usernameErorr) usernameErorr.textContent = '';
});

passwordE1.addEventListener('focus',()=>{
    if(passwordErorr) passwordErorr.textContent = ''; 
});

semesterE1.addEventListener('focus',()=>{
    if(semesterError) semesterError.textContent = '';
});

function showconfirmation():void{
const confirmation = confirm('#########################?');
    if(confirmation){
        showThankYouMessage();
    }
}

textArea.addEventListener('click',(e)=>{
showconfirmation();
});

let hoverTimer:number;
textArea.addEventListener('mouseenter',()=>{
hoverTimer = window.setTimeout(() => {
    showconfirmation();
}, 500);
});

textArea.addEventListener('mouseleave',()=>{
clearTimeout(hoverTimer);
});

function showThankYouMessage(){
    const messageContainer = document.getElementById('thankYouMessage') as HTMLElement;
    messageContainer.textContent = 'Thank You for Registration';
    messageContainer.style.display='block';
    setInterval(()=>{
    messageContainer.style.color = getRandomcolor();
    messageContainer.style.fontSize=getRandomSize();
    },500);
}

function getRandomcolor():string{
 const letters ='0123456789ABCDEF';
 let color = '#';
 for(let i=0;i<6;i++){
    color+=letters[Math.floor(Math.random()*16)];
 }   
 return color;
}

function getRandomSize():string{
    return (Math.floor(Math.random()*40)+20)+'px';
}