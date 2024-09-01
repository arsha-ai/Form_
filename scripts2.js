// Adding and Removing Projects
function addProject() {
    const projectSection = document.getElementById('projects-section');
    const newProject = document.createElement('input');
    newProject.setAttribute('type', 'text');
    newProject.setAttribute('name', 'projects[]');
    newProject.setAttribute('placeholder', 'Project Title');
    projectSection.appendChild(newProject);
}

function removeProject() {
    const projectSection = document.getElementById('projects-section');
    if (projectSection.childElementCount > 1) {
        projectSection.removeChild(projectSection.lastElementChild);
    }
}

// Adding and Removing Experience
function addExperience() {
    const experienceSection = document.getElementById('experience-section');
    const newExperience = document.createElement('input');
    newExperience.setAttribute('type', 'text');
    newExperience.setAttribute('name', 'experience[]');
    newExperience.setAttribute('placeholder', 'Experience Title');
    experienceSection.appendChild(newExperience);
}

function removeExperience() {
    const experienceSection = document.getElementById('experience-section');
    if (experienceSection.childElementCount > 1) {
        experienceSection.removeChild(experienceSection.lastElementChild);
    }
}

// Phone Number Validation
document.getElementById('phone').addEventListener('input', function (e) {
    let phone = e.target.value;
    if (phone.length > 10) {
        e.target.value = phone.slice(0, 10);
    }
});

// Form Submission and Popup
document.getElementById('selectionForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Form submitted successfully! We will get in touch.');
});
