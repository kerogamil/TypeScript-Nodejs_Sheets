    const form = document.getElementById('formLogin') as HTMLFormElement;
    const textArea = document.getElementById('formData') as HTMLTextAreaElement;

    const usernameE1 = document.getElementById('username') as HTMLInputElement;
    const usernameError = document.getElementById('usernameError') as HTMLSpanElement;
    
    const passwordE1 = document.getElementById('password') as HTMLInputElement;
    const passwordError = document.getElementById('passwordError') as HTMLSpanElement;
    
    const SemesterE1 = document.getElementById('semester') as HTMLSelectElement;
    const SemesterError = document.getElementById('semesterError') as HTMLElement;
    
    const comp102checkbox = document.getElementById('COMP102') as HTMLInputElement;
    const comp206checkbox = document.getElementById('COMP206') as HTMLInputElement;
    const Math101checkbox = document.getElementById('Math101') as HTMLInputElement;
    
    const newsletterCheckbox = document.getElementById('newsletter') as HTMLInputElement;

form.addEventListener("submit",submission);

    function submission(e:Event):void{
        e.preventDefault();
        const isUserNameValid = checkUsername();
        const isPasswordValid = checkPassword();
        const isSemesterValid = checkSemester();
        if(isUserNameValid && isPasswordValid && isSemesterValid){
            displayFormData();
        }
    }

    function isRequired(value:string):boolean{
        return value !== '';
    }

    function isBetween(length:number,min:number,max:number):boolean{
        return length >= min && length <= max; 
    }

    function checkUsername():boolean{
        let valid =false;
        const min =6;
        const max = 12;
        
        const username = usernameE1.value.trim();
        if(!isRequired(username)){
            usernameError.textContent = 'Username cannot be blank.';
        }else if(!isBetween(username.length,min,max)){
            usernameError.textContent = `Username must be between ${min} and ${max} characters.`;
        }else{
            usernameError.textContent = '';
            valid =true;
        }

        return valid;
    }

    function containsUpperCase(str:string):boolean{
        return /[A-Z]/.test(str);
    }

    function containsLowerCase(str:string):boolean{
        return /[a-z]/.test(str);
    }
    function checkPassword():boolean{
        let valid = false;
         
        const password =passwordE1.value.trim();
        if(!isRequired(password)){
            passwordError.textContent = 'Password cannot be blank.';
        }else if(!containsLowerCase(password) || !containsUpperCase(password)){
            passwordError.textContent = `Password must contain at least one Uppercase and one Lowercase letter.`;
        }else{
            passwordError.textContent = '';
            valid =true;
        }

        return valid;
    }

    function checkSemester():boolean{
        let valid = false;

        const semester = SemesterE1.value;
        if(!isRequired(semester)){
            SemesterError.textContent = 'semester cannot be blank.';
        }else if((semester === 'first' || semester === 'second') && comp206checkbox.checked){
            SemesterError.textContent = `You cannot take COMP 206 in the first or second semester.`;
        }else{
            SemesterError.textContent = '';
            valid =true;
        }

        return valid;
    }   
    
    function displayFormData():void{
        textArea.style.display = "block";
        
        const username = usernameE1.value.trim();
        const semester = SemesterE1.value; 

        let data = ``;
        data += `username: ${username}\n`;
        data += `semester: ${semester}\n`;
        data += `courses taken:\n`;

        if(comp102checkbox.checked) data+= `\t comp 102\n`;
        if(comp206checkbox.checked) data+= `\t comp 206\n`;
        if(Math101checkbox.checked) data+= `\t Math 101\n`;

        textArea.value = data;
    }

    newsletterCheckbox.addEventListener('change',(e)=>{
        if(newsletterCheckbox.checked){
            alert('Warning:By signing up for our newsletter, you may recieve occasional promotional emails. we promise not to spam you');
        }
    });
  
    usernameE1.addEventListener('focus',()=>{
        if(usernameError) usernameError.textContent ='';
    });
    
    passwordE1.addEventListener('focus',()=>{
        if(passwordError) passwordError.textContent = '';
    });

    SemesterE1.addEventListener('focus',()=>{
        if(SemesterError) SemesterError.textContent='';
    });

    function showconfirmation():void{
        const confirmation = confirm("Are you sure you want to submit the form?");
        if(confirmation){
            showThankYouMessage();
        }
    }
    textArea.addEventListener('click',(e)=>{
        showconfirmation();
    });
    let hoverTimer:number;
    textArea.addEventListener('mouseenter',()=>{
        hoverTimer = window.setTimeout(()=>{
            showconfirmation();
        },1000);
    });
    textArea.addEventListener('mouseleave',()=>{
        clearTimeout(hoverTimer);
    });

    function showThankYouMessage():void{
        const messageContainer = document.getElementById('thankYouMessage') as HTMLElement;
        messageContainer.textContent = 'Thanks for you registration';
        messageContainer.style.display = "block";
        setInterval(()=>{
            messageContainer.style.color = getRandomcolor();
            messageContainer.style.fontSize = getRandomSize();
        },500);
    }
  
    function getRandomcolor():string{
        const letters = '0123456789ABCDEF';
        let color ='#';
        for(let i=0;i<6;i++){
            color += letters[Math.floor(Math.random()*16)];
        }
        return color;
    }

    function getRandomSize():string{
        return (Math.floor(Math.random()*40)+20)+'px';
    }