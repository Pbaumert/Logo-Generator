# Logo-Generator
____________________________________________________________________

# Description
The Logo Generator is a Node.js command-line application that allows users to create simple logos in SVG format based on their input. Users can specify the text, text color, shape (circle, triangle, square), and shape color, and the app will generate a corresponding logo. This tool helps freelance web developers and project creators generate quick, customizable logos without needing graphic design skills.

# Video Tutorial

Please feel free to use the video tutorial below in order to help guide you through the process

[Video Tutorial](https://drive.google.com/file/d/1hVSF2bybLcawQrvQLnXz0grAyCTreATf/view)

# Usage
To use the Logo Generator, follow these steps:

<ins> Clone the repository:

git clone https://github.com/your-username/logo-generator.git
cd logo-generator

<ins>Install dependencies:

npm install

<ins>Run the application:

node index.js

<ins>The app will prompt you for the following information:

Text for the logo (up to 3 characters)
Text color (keyword or hexadecimal)
Shape (circle, triangle, or square)
Shape color (keyword or hexadecimal)
<ins>After entering the input, an SVG file named logo.svg will be generated in the project folder. You can open it in a browser or any SVG viewer to see the 300x200 pixel logo you created.

# Contributing
Contributions to the Logo Generator are welcome! Here's how you can contribute:

Fork the repository.

Create a new branch (git checkout -b feature-branch).

Make your changes.

Commit your changes (git commit -m 'Add new feature').

Push to the branch (git push origin feature-branch).

Open a pull request.

Please ensure that your code is well-documented and adheres to the existing style.

# Testing
This project uses Jest for testing the shape classes. To run the tests, follow these steps:

<ins>Install Jest as a development dependency:

npm install jest --save-dev

<ins>Run the tests:

npm test

Tests are written in lib/shapes.test.js to verify that the render() method works correctly for each shape (circle, triangle, and square).

# License
This project is licensed under the MIT License. See the LICENSE file for more details.
