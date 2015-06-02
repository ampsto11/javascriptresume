var bio = {
    "name": "Alex Palma",
    "role": "Front End Web Developer",
    "contacts": {
        "mobile": "(909)205-3725",
        "email": "ampsto11@gmail.com",
        "github": "ampsto11/github.com",
        "location": "Buena Park, CA"
    },
    "welcomeMessage": "You now know more about me than you did a minute ago. Scary.",
    "skills": ["JavaScript", " HTML", " CSS", " Wicked Air Guitar solos"],
    "bioPic": "images/fry.jpg"
};

var work = {
    "jobs": [
        {
            "employer": "The John Stewart Company",
            "title": "Property Manager",
            "dates": "August 2013 - Present",
            "location": "Buena Park, CA",
            "description": "Manage current residents and lease to prospective tenants in compliance with TCAC regulations."
        },
        {
            "employer": "Radio Shack",
            "title": "CSR",
            "dates": "January 2010 - June 2011",
            "location": "Big Bear Lake, CA",
            "description": "Provided customers help with electronic and cell phones purchases. Also troubleshooting of their devices for their satisfaction."
        }
    ]
};

var education = {
    "schools": [
        {
            "name": "Chaffey College",
            "degree": "General Studies / AA",
            "dates": "August 2012 - May 2013",
            "location": "Rancho Cucamonga, CA",
            "major": "Computer Science"
        },
        {
            "names": "Citrus College",
            "degree": "IT Certificates",
            "dates": "August 2011 - June 2012",
            "location": "Glendora, CA",
            "major": "Information Technology"
        }
    ],
    "onlineCourses": [
        {
            "title": "Front End Web Developer Nanodegree",
            "school": "Udacity",
            "dates": "November 2014 to Present",
            "url": "https://www.udacity.com"
        }
    ]
};

var projects = {
    "project": [
        {
            "title": " ",
            "dates": " ",
            "description": " ",
            "image": " "
        }
    ]
};

bio.display = function () {

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

    $("#header").prepend(formattedName);
    $("#header").prepend(formattedRole);

    var formattedBiopic = HTMLbioPic.replace("%data%", bio.bioPic);
    var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

    $("#header").append(formattedBiopic);
    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedGithub);
    $("#topContacts").append(formattedLocation);
    $("#header").append(formattedWelcomeMsg);

    for (skill in bio.skills) {
        var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
        }
};

bio.display();

work.display = function () {

    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);
    var formattedDecription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDecription);
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    $(".work-entry:last").append(formattedworkLocation);
};

work.display();

education.display = function (){
    for (school in education.schools){
        $("#education").append(HTMLschoolStart);
    var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
    var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);

    $(".education-entry:last").append(HTMLschoolName);
    $(".education-entry:last").append(HTMLschoolDegree);
    $(".education-entry:last").append(HTMLschoolDates);
    $(".education-entry:last").append(HTMLschoolLocation);
    $(".education-entry:last").append(HTMLschoolMajor);
    }
};

education.display();



projects.display = function () {
    for (project in projects.project){
        $("#projects").append(HTMLprojectStart);
    var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.project[project].title);
    var formattedprojectDates = HTMLprojectDates.replace("%data%", projects.project[project].dates);
    var formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.project[project].description);
    var formattedprojectImage = HTMLprojectImage.replace("%data%", projects.project[project].image);

    $(".project-entry:last").append(HTMLprojectTitle);
    $(".project-entry:last").append(HTMLprojectDates);
    $(".project-entry:last").append(HTMLprojectDescription);
    $(".project-entry:last").append(HTMLprojectImage);
    }
};

projects.display();


$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x,y);
});
};
