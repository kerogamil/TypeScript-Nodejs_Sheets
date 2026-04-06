var form = document.getElementById('formLogin');
var textArea = document.getElementById('formData');
var usernameE1 = document.getElementById('username');
var usernameError = document.getElementById('usernameError');
var passwordE1 = document.getElementById('password');
var passwordError = document.getElementById('passwordError');
var SemesterE1 = document.getElementById('semester');
var SemesterError = document.getElementById('semesterError');
var comp102checkbox = document.getElementById('COMP102');
var comp206checkbox = document.getElementById('COMP206');
var Math101checkbox = document.getElementById('Math101');
var newsletterCheckbox = document.getElementById('newsletter');
form.addEventListener("submit", submission);
function submission(e) {
    e.preventDefault();
    var isUserNameValid = checkUsername();
    var isPasswordValid = checkPassword();
    var isSemesterValid = checkSemester();
    if (isUserNameValid && isPasswordValid && isSemesterValid) {
        displayFormData();
    }
}
function isRequired(value) {
    return value !== '';
}
function isBetween(length, min, max) {
    return length >= min && length <= max;
}
function checkUsername() {
    var valid = false;
    var min = 6;
    var max = 12;
    var username = usernameE1.value.trim();
    if (!isRequired(username)) {
        usernameError.textContent = 'Username cannot be blank.';
    }
    else if (!isBetween(username.length, min, max)) {
        usernameError.textContent = "Username must be between ".concat(min, " and ").concat(max, " characters.");
    }
    else {
        usernameError.textContent = '';
        valid = true;
    }
    return valid;
}
function containsUpperCase(str) {
    return /[A-Z]/.test(str);
}
function containsLowerCase(str) {
    return /[a-z]/.test(str);
}
function checkPassword() {
    var valid = false;
    var password = passwordE1.value.trim();
    if (!isRequired(password)) {
        passwordError.textContent = 'Password cannot be blank.';
    }
    else if (!containsLowerCase(password) || !containsUpperCase(password)) {
        passwordError.textContent = "Password must contain at least one Uppercase and one Lowercase letter.";
    }
    else {
        passwordError.textContent = '';
        valid = true;
    }
    return valid;
}
function checkSemester() {
    var valid = false;
    var semester = SemesterE1.value;
    if (!isRequired(semester)) {
        SemesterError.textContent = 'semester cannot be blank.';
    }
    else if ((semester === 'first' || semester === 'second') && comp206checkbox.checked) {
        SemesterError.textContent = "You cannot take COMP 206 in the first or second semester.";
    }
    else {
        SemesterError.textContent = '';
        valid = true;
    }
    return valid;
}
function displayFormData() {
    textArea.style.display = "block";
    var username = usernameE1.value.trim();
    var semester = SemesterE1.value;
    var data = "";
    data += "username: ".concat(username, "\n");
    data += "semester: ".concat(semester, "\n");
    data += "courses taken:\n";
    if (comp102checkbox.checked)
        data += "\t comp 102\n";
    if (comp206checkbox.checked)
        data += "\t comp 206\n";
    if (Math101checkbox.checked)
        data += "\t Math 101\n";
    textArea.value = data;
}
newsletterCheckbox.addEventListener('change', function (e) {
    if (newsletterCheckbox.checked) {
        alert('Warning:By signing up for our newsletter, you may recieve occasional promotional emails. we promise not to spam you');
    }
});
usernameE1.addEventListener('focus', function () {
    if (usernameError)
        usernameError.textContent = '';
});
passwordE1.addEventListener('focus', function () {
    if (passwordError)
        passwordError.textContent = '';
});
SemesterE1.addEventListener('focus', function () {
    if (SemesterError)
        SemesterError.textContent = '';
});
function showconfirmation() {
    var confirmation = confirm("Are you sure you want to submit the form?");
    if (confirmation) {
        showThankYouMessage();
    }
}
textArea.addEventListener('click', function (e) {
    showconfirmation();
});
var hoverTimer;
textArea.addEventListener('mouseenter', function () {
    hoverTimer = window.setTimeout(function () {
        showconfirmation();
    }, 1000);
});
textArea.addEventListener('mouseleave', function () {
    clearTimeout(hoverTimer);
});
function showThankYouMessage() {
    var messageContainer = document.getElementById('thankYouMessage');
    messageContainer.textContent = 'Thanks for you registration';
    messageContainer.style.display = "block";
    setInterval(function () {
        messageContainer.style.color = getRandomcolor();
        messageContainer.style.fontSize = getRandomSize();
    }, 500);
}
function getRandomcolor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function getRandomSize() {
    return (Math.floor(Math.random() * 40) + 20) + 'px';
}
