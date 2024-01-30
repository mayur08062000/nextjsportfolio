import React from 'react';

export default function ProjectDetails() {
  return (
    <>
      {/* No style provided in the code */}

      {/* Container for the project content */}
      <div className="container-fluid">
        {/* Row for project content */}
        <div className="row content">
          {/* Sidebar */}
          <div className="col-sm-3 sidenav">
            <h4>My Projects</h4>
            {/* No additional content in the sidebar */}
            <br />
          </div>

          {/* Main content */}
          <div className="col-sm-9">
            {/* Heading for Recent Posts */}
            <h4>
              <small>PROJECT DETAILS</small>
            </h4>
            <hr />

            {/* Project 1: Quiz App in React */}
            <h2>Quiz App in React</h2>
            <p>
              Developed an interactive quiz application using React, React Hooks, and Redux, a popular JavaScript library for building user interfaces. The app dynamically renders quiz questions and multiple-choice options, allowing users to select their answers. React state management ensures real-time updates and a seamless user experience.
            </p>
            {/* GitHub button for Project 1 */}
            <a href="https://github.com/your-username/quiz-app" target="_blank" rel="noopener noreferrer">
              <img src="https://img.shields.io/badge/GitHub-View%20on%20GitHub-blue" alt="GitHub" />
            </a>
            <br />
            
            {/* Project 2: Stone-Paper-Scissors game */}
            <h2>Stone-Paper-Scissors Game (HTML, CSS, and JavaScript)</h2>
            <p>
              Created a Stone-Paper-Scissors game using a combination of HTML for the structure, CSS for styling, and JavaScript for interactivity. The game provides a simple and engaging user interface where players can choose between stone, paper, and scissors. JavaScript handles the game logic, determining the winner based on the chosen options. CSS is employed to enhance the visual appeal, providing an enjoyable gaming experience. This project demonstrates the integration of front-end technologies to create an interactive and entertaining web-based game.
            </p>
            {/* GitHub button for Project 2 */}
            <a href="https://github.com/your-username/stone-paper-scissors" target="_blank" rel="noopener noreferrer">
              <img src="https://img.shields.io/badge/GitHub-View%20on%20GitHub-blue" alt="GitHub" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
