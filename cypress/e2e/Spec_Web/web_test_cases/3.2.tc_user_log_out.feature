Feature: User Log Out

    USER STORY -> BAUFEST WEB CHALLENGE
    # URL = https://www.demoblaze.com/index.html

    #tc01-userLogOut
    Scenario: Log out
    Given that the user is logged in to their profile on the website
    When the user clicks the logout button
    Then the user should be directed to the homepage
   
    #tc02-userLogOut
    Scenario: Log out with multiple products in cart
    Given that the user is logged in to their profile on the website and have multiple products in the cart
    When the user clicks the logout button
    Then the products should remain in the cart
    
    #tc03-userLogOut
    Scenario: Log out with empty cart
    Given that the user is logged in to their profile on the website and have no products in the cart
    When the user clicks the logout button
    Then the user should be directed to the homepage