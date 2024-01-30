// Skills.jsx

import React from 'react';

const Skills = () => {
  return (
    <div className="skills-container">
      <h2>Technical Skills</h2>

      <div className="skill-category">
        <h3>HTML</h3>
        <ul>
          <li>Basic HTML elements, tags, attributes.</li>
          <li>Structure of an HTML element.</li>
          <li>Block elements and Inline elements.</li>
          <li>Strong knowledge of Lists, Tables, forms, and Hyperlink.</li>
          <li>Sound knowledge of making websites.</li>
        </ul>
      </div>

      <div className="skill-category">
        <h3>CSS</h3>
        <ul>
          <li>Expertise in Border, padding, and Layout Skills.</li>
          <li>Very good knowledge of the Box Model.</li>
          <li>Good knowledge of List and Tables.</li>
          <li>Very good knowledge of Pseudo Class and Fonts.</li>
          <li>Very good knowledge of Colors, Designs, and Patterns.</li>
          <li>Very good knowledge of CSS Flex and Containers.</li>
        </ul>
      </div>

      <div className="skill-category">
        <h3>JavaScript</h3>
        <ul>
          <li>Expertise in JavaScript syntax and language features.</li>
          <li>Very good knowledge of variables and data types.</li>
          <li>Good understanding of functions and their usage.</li>
          <li>Very good knowledge of control flow structures (if statements, loops, etc.).</li>
          <li>Very good understanding of arrays and objects.</li>
          <li>Expertise in DOM manipulation and traversal.</li>
          <li>Good knowledge of handling events and callbacks.</li>
          <li>Very good understanding of asynchronous programming (Promises, async/await).</li>
        </ul>
      </div>

      <div className="skill-category">
        <h3>React.js</h3>
        <ul>
          <li>Very good understanding of React component lifecycle.</li>
          <li>Expertise in JSX (JavaScript XML) syntax.</li>
          <li>Very good knowledge of state management in React.</li>
          <li>Expertise in handling and passing props between components.</li>
          <li>Very good understanding of component composition and reusability.</li>
          <li>Expertise in using React Hooks for state and side-effect management.</li>
          <li>Very good knowledge of conditional rendering in React components.</li>
          <li>Expertise in handling events within React components.</li>
          <li>Very good understanding of form handling in React.</li>
          <li>Expertise in client-side routing with React Router.</li>
        </ul>
      </div>

      <div className="skill-category">
        <h3>Redux</h3>
        <ul>
          <li>Expertise in state management with Redux.</li>
          <li>Very good understanding of defining actions and reducers in Redux.</li>
          <li>Expertise in creating and managing the Redux store.</li>
          <li>Very good knowledge of middleware in Redux for handling asynchronous actions.</li>
          <li>Expertise in using selectors for efficient state retrieval.</li>
          <li>Very good understanding of maintaining an immutable state in Redux.</li>
          <li>Expertise in integrating Redux with React applications.</li>
          <li>Very good knowledge of using Redux DevTools for debugging.</li>
          <li>Expertise in handling asynchronous operations with Redux.</li>
        </ul>
      </div>

      {/* Add more skill categories as needed */}
    </div>
  );
};

export default Skills;
