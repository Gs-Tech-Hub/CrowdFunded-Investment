# CrowdFunded-Investment
a platform for investors to invest in nigerian startups

## basic requirement
to install this package you need to have a node version of 20.19.0 and above

## installation
to run this code 
1. git clone the project
2. cd CrowdFunded-Investment
3. install necessary dependencies by running npm install
4. run the project by running the command npm run dev
note: the current version of the project is in the investors git branch, to switch to this branch run the command git checkout investors

## folder structure
public/image  --for storing images
src/
 ┣ component/ --for storing reusable components
 ┣ pages/  --for storing all screens
 ┣ helper function/  --for storing reusable functions
 ┣ data/  --for storing textual data used in the project
 ┣ context/  --for storing files for global state management
 ┣ assets/ --for storing various assets like font style,svg,image,videos etc
 ┣ AllFiles.jsx  -- impports and exports all files so they can all be imported from a single file
 ┣ App.jsx
 ┣ main.jsx
 ┣ main.jsx


## dependencies
1. material ui: for reusable component
2. tailwind css: for styling html elements
3. react-slick and slick-carousel: for creating slideable image gallery
4. react-router-dom: for navigating different routes in the front end
5. react-lines-ellipsis: for shortening lengthy texts

/src
  /components  - Reusable UI components
  /pages       - Route-level components
  /assets      - Images, fonts, etc.
  /hooks       - Custom React hooks
  /utils       - Utility functions
  /styles     - CSS/SCSS files or styled components
  main.jsx     - Entry point
  App.jsx      - Root component

src/
├── config/         # Application configuration
├── interfaces/     # TypeScript interfaces
├── models/         # Mongoose data models
├── services/       # Business logic
│   ├── commands/   # Command handlers
│   └── LLM/        # Language model integration
├── test/          # Test files
├── utils/         # Utility functions
│   ├── errors/    # Error handling
│   └── logger/    # Logging system
├── app.ts         # Express application setup
└── server.ts      # Server initialization

## Folder Structure

```plaintext
/src
  /components  - Reusable UI components
  /pages       - Route-level components
  /assets      - Images, fonts, etc.
  /hooks       - Custom React hooks
  /utils       - Utility functions
  /styles      - CSS/SCSS files or styled components
  main.jsx     - Entry point
  App.jsx      - Root component

