Feature: User Log Out

    USER STORY -> BAUFEST WEB CHALLENGE
    # URL = https://www.demoblaze.com/index.html

    #tc01-userLogOut
    Scenario: Log out
    Given that the user is logged in to their profile on the website
    When the user clicks the logout button
    Then the user should be directed to the homepage