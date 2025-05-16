# Hunar - Job Candidate Management System

## Live Demo
[https://hunar-task.vercel.app/](https://hunar-task.vercel.app/)

## Project Description
Hunar is a modern React application designed to streamline the job candidate management process. It provides a user-friendly interface for managing job candidates, including features to organize candidates by job queries and perform various candidate actions.

## Features
- Job candidate management and organization
- Responsive design that works on mobile and desktop devices
- Job query management through an intuitive drawer interface
- Material UI components for a modern, clean user experience

## Technologies Used
- **React 19**: Latest version of the popular frontend library
- **Vite**: Next-generation frontend build tool
- **Material UI 7**: Modern React UI framework with responsive components
- **Emotion**: CSS-in-JS library for styling components
- **ESLint**: For code quality and consistency

## Prerequisites
- Node.js (v16+)
- npm or yarn

## Setup and Installation

1. Clone the repository
   ```
   git clone https://github.com/Lathiya50/hunar-task.git
   cd hunar-task
   ```

2. Install dependencies
   ```
   npm install
   ```
   or using yarn:
   ```
   yarn
   ```

3. Start the development server
   ```
   npm run dev
   ```
   or using yarn:
   ```
   yarn dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

## Build for Production

To build the application for production:
```
npm run build
```
or using yarn:
```
yarn build
```

Preview the production build locally:
```
npm run preview
```
or using yarn:
```
yarn preview
```

## Project Structure
```
src/
  components/     # UI components
    ActionButton.jsx
    job-query/    # Job query related components
    drawer/       # Drawer components
    styled/       # Styled components
  constants/      # Application constants
  theme/          # Theme configuration
  App.jsx         # Main application component
  main.jsx        # Entry point
```
