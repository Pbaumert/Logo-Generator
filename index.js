const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');

// Function to prompt the user for input
const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for the logo:',
      validate: (input) => input.length <= 3 || 'Text must be three characters or less',
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter a text color (keyword or hexadecimal):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['Circle', 'Triangle', 'Square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color (keyword or hexadecimal):',
    },
  ]);
};

const generateSVG = (text, textColor, shape, shapeColor) => {
  let shapeInstance;
  switch (shape) {
    case 'Circle':
      shapeInstance = new Circle();
      break;
    case 'Triangle':
      shapeInstance = new Triangle();
      break;
    case 'Square':
      shapeInstance = new Square();
      break;
  }
  shapeInstance.setColor(shapeColor);

  // Return the final SVG string
  return `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shapeInstance.render()}
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>
  `;
};

// Run the app
promptUser()
  .then(({ text, textColor, shape, shapeColor }) => {
    const svgContent = generateSVG(text, textColor, shape, shapeColor);
    fs.writeFileSync('logo.svg', svgContent);
    console.log('Generated logo.svg');
  })
  .catch((err) => console.error(err));
