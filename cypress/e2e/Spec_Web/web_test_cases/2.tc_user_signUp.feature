Feature: User Sign up

    USER STORY -> BAUFEST CHALLENGE
    
    #tc01-user_sign_up
    Scenario: Successful sign up
    Given that the user is on the modal signup of https://www.demoblaze.com/index.html
    When the user enters a valid username "name"+"number"
    And enters a valid password "validPassword"
    And clicks the signup button
    Then the profile page should display a message of "Sign up successful"

    #tc02-user_sign_up
    Scenario: Unsuccessful sign up due to blank fields
    Given that the user is on the modal signup page of https://www.demoblaze.com/index.html
    When the user leaves the username and password fields blank
    And clicks the signup button
    Then the user should see an error message "Please fill out Username and Password."

    #tc03-user_sign_up
    Scenario: Unsuccessful sign up due to already registered username
    Given that the user is on the modal signup page of https://www.demoblaze.com/index.html
    When the user enters a already registered username "validUser"
    And enters a valid password "validPassword"
    And clicks the signup button
    Then the user should see an error message "This user already exist."

