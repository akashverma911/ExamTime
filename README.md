
Testing Report
Software Design

Version 1.1
October 27, 2021



Exam Management and Quiz Application



Group No.25
Team Members :
Akash Verma(2019IMT-009)
Anurag Srivastava(2019IMT-020)
Vikas Verma(2019IMT-115)















Submitted in partial fulfillment
Of the requirements of
ITIT-3103 Software Engineering Lab
Table of Contents
Section 1: Introduction...............................................................................................................3

Section 2: Unit testing.................................................................................................................4
Screen 1: User Login................................................................................4
Screen 2: User Register............................................................................6
Screen 3: Assignment Create...................................................................8
Screen 4: Assignment List Page..............................................................9
Screen 5: User Profile Page...................................................................10
Screen 6: Update Profile Screen ...........................................................11
Screen 7: Result Page.............................................................................11

Section 3: Integration testing.................................................................................................12
Coupling....................................................................................................12
Test case 1.................................................................................................12
Test case 2.................................................................................................12
Test case 3.................................................................................................13
Test case 4.................................................................................................13
Test case 5.................................................................................................14

Section 4: System testing.........................................................................................................14
Scenario 1.................................................................................................14
Scenario 2.................................................................................................15
Scenario 3.................................................................................................15

Section 5: Found and Fixed Bugs............................................................................................15
Bug 1................................................................................................15
Bug 2................................................................................................16
Bug 3................................................................................................16
Bug 4................................................................................................17
Bug 5................................................................................................17
Section 5: References...............................................................................................................18

Section 6: Github Insights .......................................................................................................18





SECTION 1: INTRODUCTION
This is the Test Execution Document (alpha test) of the Web Application, ‘ExamTime’, a Software Engineering project at the Information Technology Department of IIIT Gwalior ( Madhya Pradesh).‘ExamTime’ project is a web application meant for the students and teachers of Schools and Colleges. Its main purpose is to provide a platform for securely conducting exams and to share notes with the entire class. This document presents the results of the execution of the different tests presented in Mieten’s Test plan document. 
The document is organized as follows:

Section 1 is the introduction itself.
Section 2 introduces the results of Unit testing 
Section 3 introduces the results of Integration testing.
Section 4 introduces the results of System testing.
Section 5 describes the bugs found during test phase, are listed.

The results of the test execution will be presented in subsection as follows:
Id and name of the executed test.
Description of the test, or collected results.
Errors found if any, and maybe a reference to the bug and fixes report. If error was found on a certain step of the Test Case, the step number is given.
All test cases were first executed once and found bugs were fixed. Then all test cases were executed again and no further bugs were found.
Test was run on the following environment:
Processor- Intel i5 9100F
Ram - 16gb Laptop Ram
Graphics Card- 6gb 1660Ti
Operating System- Window 10

SECTION 2: UNIT TESTING
Since we are working on a web application, Unit tests were created as screenshots of all the visible interfaces. Each minute component has been checked for its function for e.g. every button’s activity has been captured and shown as a test case.
TEST CASES
Logout page
Successful Logout - 
On clicking on the logout button the user successfully logs out of his profile .

Login Page

Empty field
If any of the fields is empty then the following Toast message is displayed, and login fails.



Unregistered Username
If the username entered is unregistered then a corresponding toast message is displayed and the login fails.



Incorrect Password
If the password entered is incorrect then a corresponding toast message is displayed and the login fails.



Successful Login
Clicking the login button after entering a registered email address and a valid password, logs in the user successfully and directs her to the main screen.


Create a new account link
Tapping on this link directs the user to the register screen.


 		           
Unsuccessful login
In case of failure in login due to technical errors, a toast message is displayed with an appropriate reason.


SignUp page

Empty field
If any of the fields is empty then the following Toast message is displayed, and email registration fails.

    

Wrong email format
If the email entered is invalid then a corresponding toast message is displayed and the registration fails.



Already registered email
If the email entered is already registered then a corresponding toast message is displayed and the registration fails.

            

Unmatching Passwords
If the passwords entered in the “password” and “confirm password” fields do not match, then a corresponding toast message is displayed and registration fails.


Successful Registration
Clicking the Register button after entering all valid details, registers the user successfully and directs him/her to the create account screen.





Assignment Create

Empty field
If any of the fields is empty then the following Toast message is displayed, and assignment creation fails.
     


Incorrect input formats
If the format of the input in assignment creation is incorrect, a toast message is displayed.
               

Successful Assignment Creation
Clicking the Save button after entering valid details, saves theAssignment is  successfully created.

      

Unsuccessful Assignment creation
In case of failure in assignment creation due to technical errors, a toast message is displayed with an appropriate reason.



Assignment List Page


Individual Assignment Redirect Failure
On clicking on the required Assignment website fails to redirect to the required assignment details page.

Individual Assignment Redirect Success
On clicking on the required Assignment website successfully redirects to the required assignment details page.



Assignment Detail

Assignment Detail page Successful Buffer 
On clicking on the required assignment on the Assignment List Page  required Assignment web page opens up.




User Profile page

Display details
The user details are fetched from the firebase and displayed on the screen.




Edit Profile button
Tapping on the button directs the user to the Update Profile screen.





UPDATE PROFILE SCREEN

Empty field
If any of the fields is empty then the following Toast message is displayed, and profile updation fails.

    


Successful Updation
Clicking the Save button after entering valid details, saves the user details successfully and directs the user to the user profile screen with updated details.



Result page

Results Displayed Successfully 
Results for the specified assignment exam are displayed successfully with all the scores and graphs.

