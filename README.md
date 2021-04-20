# Welcome to the Message Board

This is Front End to a Reddit style comments section created and implemented using ReactJS and TypeScript and tested with JEST.

Below is brief description highlighting my solution to the given problem:

● Main Tree Structure I went with:

    |-- App
      |-- CommentsContainer
        |-- Comment
    |-- services
      |-- Api
    |-- types
      |-- Comment

● As seen above the App.tsx file holds the header section for main page title and section tag to contain Comments title and CommentsContainer (Which will become the backbone for holding Comment state, react hooks and mapping)

● The Comment.ts file contain data types returning from the APi to form cohesivie structure.

Note - (In Comment.ts the Comment type is same struture for Main Commments and Replies so used interchangeable throughout the project)

● In CommentContainer Data is fetching from the Services - Api file using promise and was assigned to comments variable in state hook. Data was logged to see output on console. The useEffect hook was used to call data once from APi and stop repetition. The setComments function sets data retrieved and stores it in Comment state variable. The return statement hold singleComment component will allow the user to render the comment and recurrsively render replies.

● Comment.tsx component holds the singleComment function. We destructure the comment fields and set equal to correct CommentData datatype for typescript. We are returning type JSX element. We map over the replies array and return the SingleComment component as it will be the same structure and nested with comments. We assign reply.id to uniquesly identity the replies from comments. We assign the reply element to comment as is loops over the singleComment function and comment prop. In the return statement we display the reply structure similar to comment structure above only this time its destructuring from reply section of comment. We also add the nestedComments variable at the end - declare hidden vriable state to hide nestedComments until the use clicks on div of replies. This then sets hidden to the false.

Note - (Accoutability for given for 0 replies to be hidden from both parent level comments and nested replies)

## Core Design

The main features implemented were the follwing:

● Render a comment correctly

● Render replies of a comment under that comment.

● Handle the thread of replies

The following [Data APi](https://run.mocky.io/v3/be0609d3-6a1b-4597-8af1-101221ac99c9) provided was utilised for extraction and presentation of user comments and replies.

## Structure (Bulding and Testing)

The following bullet points highlight folder structures, languages and dependencies used to achieve the result:

● Everything is pushed thorugh Public/index.html via React-DOM
● Main folder structure tree are as follows:
| folder/file | Description |
| ----------- | ----------- |
| src | Source folder for all project files |
| components | Houses all components |
| services | Houses the api endpoint extraction file |
| types | Houses the Types file from data table |
| app.scss | Used for Project CSS styling |
| App.tsx | Serves Markers for Components and JSX |
| index.tsx | Serves App.tsx to DOM for rendering to 'root' element |
| babelrc | For pluging babel presets and settings |
| eslintrc | For pluging eslint presets and settings |
| prettierrc | For pluging prettier code formatting presets and settings |
| tsconfig.json | For typescript presets and settings |
| webpack.config.js | Config file is a place to put all of your configuration, loaders, and other specific information relating to your project build |
| dist | Post project build folder which houses storage of main.js file and index.html |

## Main Components and Files

| folder/file           | Description                                                              |
| --------------------- | ------------------------------------------------------------------------ |
| Comment.tsx           | Contains state and logic for comment and all nested comments and replies |
| CommentsContainer.tsx | Contain state for main Comments                                          |
| Api.ts                | Reads data from endpoint and return JSON                                 |
| Comment.ts            | Contain Data types                                                       |

## Getting Started & Prerequisites

It is assumed that VS code (or another appropriate alternative) runs on your machine.

You also need node (latest v15.11.0) and npm (latest v7.6.0) installed on your machine.

### Installing

#### Get the code

Fork the project from git which can be found [here](https://github.com/muhammad-shahroze/message-board.git). Then copy the git url and in the appropriate folder on your machine:

```
git clone https://github.com/muhammad-shahroze/message-board.git
```

This will create the project on your local machine. Open the project in VS code (or alternative app).

#### Install dependencies

Run the following to install using npm install react, react-dom and typescript

```
npm install

```

Once all required dependencies are installed, you can check the node_modules folder (which should be created now) to see if the folders for each of these libraries exists.

## Running the tests

Coming soon...

## Running the app

To run the app:

Use the command below. Script has been written to compile all folders and set to production. (Please have a look at package.json for more info)

```
npm start

```

## Authors

- **Muhammad Shahroze** - [muhammad-shahroze](https://github.com/muhammad-shahroze)
