# Employee Profile Generator

## Description

This program is a profile generator that uses user input to create an index.html page with a manager's information and optional employees including engineers and interns. Currently this program only has manager, engineer, and intern roles. This program has the flexibility to include more roles if you wish. 

In the future, I would like to clean up the code more so that it's more readable and understandable. Some of my biggest challenges with this project was understanding how to make a loop to add multiple employees, formatting the new index.html page and figuring out how to add multiple employees using template literals. I was able to overcome my challenges through a lot of trial and error. 

## Installation

1. To install this application, go to your desired installation directory and copy the following code in to your terminal:
```
git clone git@github.com:tyang896/Employee-Profile-Generator.git
```
2. In VS Code, open the repo in the integrated terminal and install the necessary application dependencies using the following command:
```
npm i
```

## Usage

1. To start the application, open the repo in VS Code's integrated terminal and run the following command:
```
node index.js
```
2. User's will have a series of prompts asked about the employee's info. They will have the option of adding as many employees as they wish.
3.  Once all questions have been answered, a index.html file will be generated in the `dist` folder.


For an example of running the program, refer to the video demonstration [here](https://drive.google.com/file/d/17-sdRx4UuA-Cuvr0Tcp2kPGduKDAKtR3/view)

## Credits

For my project I used an inquirer loop package created by [ckoliber](https://github.com/ckoliber). You can view the inquirer-loop package [here](https://github.com/ckoliber/inquirer-loop.git)

## Tests

To run tests for the application, execute the following command in your terminal:

```
npm run test
```



