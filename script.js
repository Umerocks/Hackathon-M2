var _a;
// listing element
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (envent) {
    event === null || event === void 0 ? void 0 : event.preventDefault();
    //type assertion
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experiecne');
    var skillsElement = document.getElementById('skills');
    var RollElement = document.getElementById('rollnumber');
    var QtrElement = document.getElementById('quarter');
    if (nameElement && emailElement && phoneElement && educationElement && skillsElement && experienceElement && RollElement && QtrElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var skills = skillsElement.value;
        var experience = experienceElement.value;
        var rollNumer = RollElement.value;
        var qtr = QtrElement.value;
        //create resume output
        var resumeOutput = "\n<h2>Resume</h2>\n<p><strong>Name:</strong> ".concat(name_1, "</p>\n<p><strong>Email:</strong> ").concat(email, " </p>\n<p><strong>Name:</strong> ").concat(phone, "</p>\n<p><strong>Rollnumber:</strong> ").concat(rollNumer, " </p>\n<p><strong>Quarter:</strong> ").concat(qtr, "</p>\n\n<h3>Education</h3>\n<p>").concat(education, "</p>\n\n<h3>Expereince</h3>\n<p>").concat(experience, "</p>\n\n<h3>Skills</h3>\n<p>").concat(skills, "</p>\n");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error('the resume output are missing');
        }
    }
    else {
        console.error('one or more output are missing');
    }
});
