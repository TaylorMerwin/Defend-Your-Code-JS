# Defend Your Code! _JavaScript Edition_

This application collects user input through a series of prompts and writes the processed data to an output file.

## Team Information

Team 10
Jenna, Paul, and Taylor

## Getting Started

To run the application:

1. Clone the repository at `[https://github.com/TaylorMerwin/Defend-Your-Code-JS]` or unzip the project directory.
2. Open index.html in web browser of choice
3. Interact with application through the buttons
4. Export data once all user input has been submitted

## Running Unit Tests

- This application is unit tested in the browser using QUnit. The test results can be seen on the page `test.html`

## Shortcomings and Security Considerations

As this is a purely client sided JavaScript application we understand that this leads to inherent security vulnerabilities.

- The application hashes and salts passwords client side, which is to be avoided in real world applications
- Content inside User uploaded files cannot be thoroughly checked before submission
- Users must manually upload and download the input and output files, although we make it as seamless as possible by requiring that uploaded files match the specified name.
