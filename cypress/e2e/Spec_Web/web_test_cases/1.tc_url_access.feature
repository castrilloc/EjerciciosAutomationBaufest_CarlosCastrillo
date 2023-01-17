Feature: Access to the URL

    USER STORY -> BAUFEST WEB CHALLENGE

    #tc01-url_access
    Scenario: Successful access to homepage
    Given that the user is on any webpage outside of https://www.demoblaze.com/index.html
    When the user enters "https://www.demoblaze.com/index.html" into the address bar of their browser
    Then the user should be directed to the homepage of the website
    
    #tc02-url_access
    Scenario: Unsuccessful access to invalid page
    Given that the user is on any webpage outside of www.demoblaze.com
    When the user enters an invalid URL such as "www.demoblaze.com/invalidpage" into the address bar of their browser
    Then the user should see a message indicating that the page cannot be found "404: Not Found".