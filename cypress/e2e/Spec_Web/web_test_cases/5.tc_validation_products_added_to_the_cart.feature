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
    
    #tc02-validationLaptopsAdded
    Scenario: Validate laptops in cart with no products added
    Given that the user has no laptops added to their cart
    When the user clicks the cart button
    Then the user should be directed to the cart page
    And the cart page shouldn't display any products
    
    #tc03-validationLaptopsAdded
    Scenario: Validate laptops in cart with different quantities
    Given that the user has added different laptops with different quantities to their cart
    When the user clicks the view cart button
    Then the user should be directed to the cart page
    And the cart page should display the laptops that were added with the correct quantity and total price of each one.