Feature: Validation of laptops added to the cart

    USER STORY -> BAUFEST WEB CHALLENGE
    # URL = https://www.demoblaze.com/index.html
    
    #tc01-validationLaptopsAdded
    Scenario: Validate laptops in cart
    Given that the user has added laptops to their cart
    When the user clicks the cart button
    Then the user should be directed to the cart page
    And the cart page should display the laptops that were added
    And the cart page should display the correct quantity, total price and description of the laptops.