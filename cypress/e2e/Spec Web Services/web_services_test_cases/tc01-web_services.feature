Feature: Access to the URL

    USER STORY -> BAUFEST WEB SERVICES CHALLENGE

    #tc01-url_access
    Scenario: Successful access to homepage
    Given that the user is on any webpage outside of https://www.demoblaze.com/index.html
    When the user enters "https://www.demoblaze.com/index.html" into the address bar of their browser
    Then the user should be directed to the homepage of the website