Project Name & Pitch
MarvelMania

To Visit App:
***Enter published site***

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
![image](https://user-images.githubusercontent.com/93785928/152709386-def0cbfd-1c0d-44a2-a5fa-b927880c03e7.png)

Historical Archives Page(Comics)


X-Files Page(Profiles/Characters)


Installation and Setup Instructions
Example:
Clone down this repository. You will need node and npm installed globally on your machine.

Installation:

npm install

To Run Test Suite:

npm test

To Start Server:

npm start

To Visit App:
***Enter published site again***

Reflection
What was the context for this project? (ie: was this a side project? was this for Turing? was this for an experiment?)
What did you set out to build?
Why was this project challenging and therefore a really good learning experience?
What were some unexpected obstacles?
What tools did you use to implement this project?
This might seem obvious because you are IN this codebase, but to all other humans now is the time to talk about why you chose webpack instead of create react app, or D3, or vanilla JS instead of a framework etc. Brag about your choices and justify them here.
Example:
This was a 3 week long project built during my third module at Turing School of Software and Design. Project goals included using technologies learned up until this point and familiarizing myself with documentation for new features.

Originally I wanted to build an application that allowed users to pull data from the Twitter API based on what they were interested in, such as 'most tagged users'. I started this process by using the create-react-app boilerplate, then adding react-router-4.0 and redux.

One of the main challenges I ran into was Authentication. This lead me to spend a few days on a research spike into OAuth, Auth0, and two-factor authentication using Firebase or other third parties. Due to project time constraints, I had to table authentication and focus more on data visualization from parts of the API that weren't restricted to authenticated users.

At the end of the day, the technologies implemented in this project are React, React-Router 4.0, Redux, LoDash, D3, and a significant amount of VanillaJS, JSX, and CSS. I chose to use the create-react-app boilerplate to minimize initial setup and invest more time in diving into weird technological rabbit holes. In the next iteration I plan on handrolling a webpack.config.js file to more fully understand the build process.
