 var bio = {
     "biopic": "images/me.jpg",
     "role": "Student",
     "contacts": {
         "mobile": "9878440421",
         "email": "kartikmhr97@gmail.com",
         "github": "K-RIT",
         "location": "Chandigarh"
     },
     "name": "KRIT",
     "age": 20,
	 "welcomeMessage":"Welcome",
     "skills": ["Awesomness", "Cool", "Gamer"],
     "display": function() {
         "use strict";
         var formattedName = HTMLheaderName.replace("%data%", this.name);
         var formattedRole = HTMLheaderRole.replace("%data%", this.role);
         var contacts = [HTMLmobile.replace("%data%", this.contacts.mobile), HTMLemail.replace("%data%", this.contacts.email), HTMLemail.replace("%data%", this.contacts.github),HTMLlocation.replace("%data%", this.contacts.location)];
         var pic = HTMLbioPic.replace("%data%", this.biopic);
         var message = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);
         $("#header").prepend(formattedName, formattedRole);
         $("#header").append(pic, message);
         $("#header").append(HTMLskillsStart);
         this.skills.forEach(function(element) {
             var a = HTMLskills.replace("%data%", element);
             $("#skills").append(a);
         });
         $("#topContacts").append(contacts);
         $("#footerContacts").append(contacts);
     }
 };


 var projects = {
     "projects": [{
         "title": "chameleon",
         "dates": "Feb 2017",
         "description": "My first click",
         "images": ["images/one.jpg","images/fry.jpg"]
     }],
     "display": function() {
         "use strict";
         $("#projects").append(HTMLprojectStart);
         this.projects.forEach(function(element) {
             var title = HTMLprojectTitle.replace("%data%", element.title);
             var date = HTMLprojectDates.replace("%data%", element.dates);
             var desc = HTMLprojectDescription.replace("%data%", element.description);
			 var img="";
             element.images.forEach(function(ele){
				 img+=HTMLprojectImage.replace("%data%", ele);
			 });
			 //var img = HTMLprojectImage.replace("%data%", element.images[0]);
             $(".project-entry:last").append(title, date, desc, img);
         });
     }
 };

 var work = {
     "jobs": [{
             "employer": "Manav Mangal",
             "title": "Student",
             "location": "Chandigarh",
             "dates": "2006-2011",
             "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
         },
         {
             "employer": "GMSSS-16",
             "title": "STUDENT",
             "location": "Chandigarh",
             "dates": "2011-2013",
             "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
         }
     ],
     "display": function() {
         "use strict";
         this.jobs.forEach(function(element) {
             $("#workExperience").append(HTMLworkStart);
             var emp = HTMLworkEmployer.replace("%data%", element.employer);
             var title = HTMLworkTitle.replace("%data%", element.title);
             var date = HTMLworkDates.replace("%data%", element.dates);
             var desc = HTMLworkDescription.replace("%data%", element.description);
			 var location=HTMLworkLocation.replace("%data%", element.location);
             $(".work-entry:last").append(emp + title, date,location, desc );
         });
     }
 };

 var education = {
     "schools": [{
             "name": "Manav Mangal",
             "location": "Chandigarh",
             "degree": "Matric",
             "majors": ["Schooling", "sports"],
             "dates": "2006-2011",
         },
         {
             "name": "GMSSS-16",
             "location": "Chandigarh",
             "degree": "High School",
             "majors": ["Science", "Non-Med"],
             "dates": "2011-2013",
         }
     ],
     "onlineCourses": [{
         "title": "Nano",
         "school": "Chitkara",
         "dates": "2017",
         "url": "https://classroom.udacity.com/nanodegrees/nd001/parts/0011345406/modules/296281861575462/lessons/2962818615239847/concepts/29594685550923#"
     }],
     "display": function() {
         "use strict";
         var n;
         $("#education").append(HTMLschoolStart);
         this.schools.forEach(function(element) {
             var name = HTMLschoolName.replace("%data%", element.name);
             var degree = HTMLschoolDegree.replace("%data%", element.degree);
             var date = HTMLschoolDates.replace("%data%", element.dates);
             var location = HTMLschoolLocation.replace("%data%", element.location);
             var major = [];
             element.majors.forEach(function(i) {
                 major.push(i);
             });
             $(".education-entry:last").append(name + degree, date, location, major);
         });
         $("#education").append(HTMLonlineClasses,HTMLdiv);
		 
         this.onlineCourses.forEach(function(element) {
             var title = HTMLonlineTitle.replace("%data%", element.title);
             var school = HTMLonlineSchool.replace("%data%", element.school);
             var input_date = HTMLonlineDates.replace("%data%", element.dates);
             var url = HTMLonlineURL.replace("%data%", element.url);
             $(".online-entry:last").append(title + school, input_date, url);
         });
     }
 };
 bio.display();
 projects.display();
 work.display();
 education.display();
 $("#mapDiv").append(googleMap);