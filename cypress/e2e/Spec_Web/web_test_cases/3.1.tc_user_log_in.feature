Feature: User Log in

    USER STORY -> BAUFEST WEB CHALLENGE
    
    #tc01-user_log_in
    Scenario: Successful log in
    Given that the user is on the https://www.demoblaze.com/index.html
    And the user goes to the top menu and click on "log in"
    When the user enters a valid username "validUser" and password "validPassword" in the respective fields
    And clicks the log in button
    Then the app display in the menu the message "Welcome validUser"
    And the CTA button "Sign in" change to "Welcome validUser".    

    #tc02-user_log_in
    Scenario: Unsuccessful login due to incorrect username
    Given that the user is on the login page of https://www.demoblaze.com/index.html
    When the user enters an incorrect username "!#$%/()" and a correct password "validPassword" 
    in the respective fields
    And clicks the log in button
    Then the user should see an error message "User does not exist"    

    #tc03-user_log_in
    Scenario: Unsuccessful login due to invalid password
    Given that the user is on the login page of https://www.demoblaze.com/index.html
    When the user enters a correct username "validUser" and a invalid password "invalidPassword" 
    in the respective fields
    And clicks the log in button
    Then the user should see an error message "Wrong password"    

    #tc04-user_log_in
    Scenario: Unsuccessful login due to blank fields
    Given that the user is on the login page of https://www.demoblaze.com/index.html
    When the user leaves the username and password fields blank
    And clicks the log in button
    Then the user should see an error message indicating "Please fill out Username and Password."
  
    #tc05-user_log_in
    Scenario: Unsuccessful login due to blank spaces within username
    Given that the user is on the login page of https://www.demoblaze.com/index.html
    When the user enters an incorrect username "v a l i d U s e r" and a correct password "validPassword" 
    in the respective fields
    And clicks the log in button
    Then the user should see an error message "User does not exist"

    #tc06-user_log_in
    Scenario: Unsuccessful login due to incorrect password
    Given that the user is on the login page of https://www.demoblaze.com/index.html
    When the user enters a correct username "validUser" and a incorrect password "v a l i d P a s s w o r d" 
    in the respective fields
    And clicks the log in button
    Then the user should see an error message "Wrong password"
    