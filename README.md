#Just a repo for a demo React APP

This repo is just a baseline for the creation of more complex apps using React + Redux, it has webpack for dev, test and build tasks, also, it provides a Test Example using Mocha + Chai + Ensyme.

This repo has the basic things to statr a project with a decent directoy structure.

##How to use it
Just clone it into your machine, and type this into your command line tool:

- npm install
- [to run in dev] npm run dev
- [to execute tests] npm run test
- [to build] npm run build

The las command (build) will create a new directory called "dist" and inside it will create the standalone SPA files required (index.html, assets/bundle.js, assets/style.css).

##Note:
The app/components directory has each React component separated into its own directory, and each component has its own stylesheet (which will be later compiled into a single file for production)
