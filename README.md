# Cloth Shop Online

> Our first large group project with Galvanize Inc. We reproduced the following web-site product page with React and a little PostgreSQL.
https://www.clothingshoponline.com/p/gildan/18500_heavy-blend-hooded-sweatshirt

## Table of Contents
  - [General Information](#general-information)
    - [Technologies Used](#technologies-used)
    - [Features](#features)
    - [Screenshots](#screenshots)
    - [Setup](#setup)
    - [Personally Worked On](#Personally-Worked-On)
    - [Current Status](#current-status)
  - [Room For Improvement](#room-for-improvement)
  - [Acknowledgements](#acknowledgements)
  - [Contact](#contact)
  - [License](#license)


## General Information
  > We all picked a web-application we wanted to replicate with React to get more familiar and practice with. We broke down the site into components with a wire frame of the page layout. Then we each picked different parts to duplicate until the whole page came together. We had one week and two weekends to put the whole thing together while continuing other studies and class teachings. We structured our progress utilizing Agile Sprint Methodologies.

## Technologies Used
  > HTML5, CSS3, JavaScript, React.js, Node.js, PostgreSQL, Docker, Render.com

## Features
  - Backend powered by PostgreSQL in Docker or Render.com.
  - Restful Routes powered by JavaScript in Docker or Render.com.
  - About 40 React components in total.
  - A pretty good copy of the origional web-app, expecially for our first major React project.
  - We collaborated on the site entirely within GitLabs and learned a lot about the Git process and how to work together as a team.

## Screenshot(s)
  > ![DB-Schema / ERD](/images/DB-Schema.png)
  > ![Website WireFrame](/images/Website-Wireframe.png)
  > ![ScreenShot](/images/screenshot.png)

## Setup
- Clone this repository to your local computer.
- Running locally, you will need nodemon and nodejs installed.
- Run the following commands from the root project directory.
  - npm install
  - npm install --force --prefix client
  - docker compose up
  - npm run migrate
  - npm run seed
  - npm run dev
- If using render.com to run the backend, after installing and setting up the backend, run this command.
  - npm run client
- Also, appologies, but due to the short time constraints, the following components will have to have the host variable changed to reflect the link connecting to your backend. It is currently defaulted to our Render.com repository.
  - bestsellers.js
  - bestsellersR2.js
  - bestsellersR3.js
  - ColorPicker.js
  - QuestionsSection.js
  - ReviewsSection.js
  
## Personally Worked On
  - DB structure, creation, and seeding
  - App.js structure to keep all components in their correct places
  - ColorPicker.js and child component
  - RevQuest.js = Review Questions component and 
  - ReviewsSection.js = Sub-Component of RevQuest.js
  - ProductImage.js = Product display on left side of web-app
    - Fortun worked on the main image display and zoom function
  - StarReview.js = Floating modal displaying reviews/questions
  - Assisted other members with their components when requested/needed

## Current Status
  > Not currenlty working on

## Room For Improvement
  - Ideas:
    - Make host a one time edit
    - Adjust backend to allow link more ProductImage links and connect ColorPicker.js to the ProductImage.js component
    - Add backend to Site reviews which the origional web-app had, but we ran out of time to duplicate
  - Todo:
    - Copy documentation over from GitLab
    - 
    - 

## Acknowledgements
  - Inspired By:
    - FEC assignment from Galvanize Inc. bootcamp. We've learned so very much from this course.
  - Based On:
    - https://www.clothingshoponline.com/p/gildan/18500_heavy-blend-hooded-sweatshirt
  - Contributors:
    - Fortun Joseph Binghay
    - Jesthen Baez
    - Kari Tinsley
    - Melvin Richardson

## Contact
  > [amoramas1984@gmail.com](mailto:amoramas1984@gmail.com)

## License
  > 