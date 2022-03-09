Project Name & Pitch
MarvelMania

To Visit App:
[MarvelMania](http://vibrant-snyder-cb4ce8.netlify.app)

An application used to navigate through the immensely deep and flavorful world of Marvel.  From Character/Profile Searches as a mock-Agent, to Historical Archives(comic book) searches; both allowing you to filter data from the Marvel API, based on user preferenc.  Built with React, JavaScript, and CSS.

Project Status
This project is complete, however a Buttons component is still "in progress"  The Buttons component will render a Previous and Next button.  Because the Marvel API limits axios calls to no more than 100, this leaves the other 1449 inobtainable without a workaround.  I am currently working on a counter that will update the offset by 100(or whatever number I inevitably choose to have returned from each axios call); either adding 100(Next) or subtracting 100(Previous)  

Project Screen Shot(s)
Example:
Landing Page(pre login)
![image](https://user-images.githubusercontent.com/93785928/152709218-3d2f4d47-5c40-49c8-980d-87dd4e4dd1f7.png)

Landing Page(post login)
![image](https://user-images.githubusercontent.com/93785928/152709425-7017cd40-d6d4-4e72-9b06-874c818904a7.png)

Contact Us Page
![image](https://user-images.githubusercontent.com/93785928/152709339-be6f177c-b767-46a9-94f5-8d72fa168a76.png)

Login Page
![image](https://user-images.githubusercontent.com/93785928/157385691-f3174fff-3119-44c3-b632-a6ecd628a0e3.png)

Add New Agent Page
![image](https://user-images.githubusercontent.com/93785928/157385771-08fad9dd-efdf-4a29-8bc6-3baf4c5abddb.png)

Historical Archives Page(Comics)
![image](https://user-images.githubusercontent.com/93785928/157385992-fbd93d43-5122-4f97-952d-f39bbaba1351.png)

X-Files Page(Profiles/Characters)
![image](https://user-images.githubusercontent.com/93785928/157386033-7a30fb56-c28c-4211-ad6d-38d674f7290b.png)

Create Character Page
![image](https://user-images.githubusercontent.com/93785928/157385112-efe1a8b5-058d-457e-a74e-78b4e8d8627b.png)


Installation and Setup Instructions
Clone down this repository. You will need node and npm installed globally on your machine.

Installation:
npm install

To Run Test Suite:
npm test

To Start Server:
npm start

To Visit App:
[MarvelMania](http://vibrant-snyder-cb4ce8.netlify.app)

Reflection
What was the context for this project? (ie: was this a side project? was this for Turing? was this for an experiment?)
Context:
This was created for a Software Engineering Bootcamp I attended from 11/15/21 through 3/15/22
Phase 1 was for Module 2's project; creating a React app with numerous components and navigated through the React Router.  The build concept was focused on creating a fan site for all things Marvel.  A one-stop page where you can explore your favorite characters, as well as ones you'd never heard of previously. Where you could browse comic book archives, and search which characters are featured in comics as well as all the comics that a character if featured in. Also included were some embedded youtube videos of upcoming Marvel movie trailers, and the footer was full of hyperlinks to multiple different Marvel relevant sites and activities(ie easter egg webpage, MCU wiki, Live Action Marvel events, etc)
Phase 2 was for Module 3's capstone project; creating a backend database and linking it with our frontend.  Two data table models were created, 1)heroprofiles: Allowing users to create their own heroes and villains an upload them to the website, 2)userlogins: Creating a faux authentication feature, wherein you had to create a user into the database, and then when you tried to login, it would search to see if that user was in the database.  If it wasn't it would return window alert stating not a valid user, else it would "log" you in and state your name in the Nav bar.  Also, I added a feature to have an email generated to whatever email address you enter in when creating your user; welcoming you to the site.  I wasn't able to customize it per user, but I will attempt to do that moving forward.

Challenges:
This project had it's different layers of challenges.  In Phase 1 I realized that the API was not the most user friendly and the limitation on the amount of records you could pull was dissapointing; the documentation was very vague and appeared as though it was only meant for well-versed individuals.  Being new to coding, and even newer to API, this was somewhat frustrating.  I was unable to create a workaround during Phase 1 and did not have the additional time towards the end of Phase 2 that I would have hoped.  The Marvel API also made it very difficult to render the images for the profiles and comics.    
In Phase 2 I also tried to conditionally render a cancel button for whenever I hit edit a heroprofile, but inevitably couldn't get it to work in time.  Also when editing a heroprofile, I was able to get the name and description to update, but the image would not cooperate.  The email function would not populate the unique data for each user.
This project really pushed me, because I didn't have great confidence going into it.  My Mod 1 project, "Create a JavaScript Game" did not go well.  So I really wanted to find something I was interested in enough that I would really engulf myself in the work.  I learned a lot about React, passing state, hooks and in Phase 2 of the project; so much about the backend and making everything communicate.

Unexpected Obstacles:
Connecting the backend and the frontend posed it's own unique set of problems, in particularly once the data base was deployed.  I did not anticipate all of the data created in pgAdmin not being available when I deployed it using Heroku

Tools:
Postman
pgAdmin
Postgresql
Spring Tool
Visual Studio Code
Git Bash
Heroku
Github
Figma
EmailJS
Character Counter
PostImage
Discord(Classmates)

This was a 2 week long project built during my 3rd module at Per Scholas Software Engineering Bootcamp.
Project goals included:
**Frontend Requirements** (Code written in ES6 as much as possible, must be written in React Hooks, use the create-react-app generator to start your project, application must use react-router and proper RESTful routing with a minimum of three routes, use Context Provider, use Axios or Fetch for AJAX Requests, use async/await and try/catch, a minimum of 5 components, users should be able to interact with the website to do CRUD functionalities, and must use a CSS Framework)
**Backend Requirements** (use of Postgres as a SQL database, use of Spring Boot w/Maven as a build tool, use of MVC architecture, application uses a minimum of 2 models with both repositories, and controllers, use of HTTP status codes, at least one Exception, project is deployed using 1 of the deployment options(Heroku, Surge, AWS, or  Firebase))
**Stretch Goals (Not Mandatory)** (Incorporating a new technology not taught in the program, React Styled Components, responsive mobile design, use a third-party API)

Originally I wanted to build an application that allowed users fully immerse themselves in all they were interested in regarding Marvel. I started this process by using the create-react-app boilerplate, then adding react-router-4.0 and react-dom, emailJS/browser, and axios.

The technologies implemented in this project are React, React-Router 4.0, and a significant amount of VanillaJS, JSX, and CSS. I chose to use the create-react-app boilerplate to minimize initial setup and invest more time in creating errors and learning from them.
