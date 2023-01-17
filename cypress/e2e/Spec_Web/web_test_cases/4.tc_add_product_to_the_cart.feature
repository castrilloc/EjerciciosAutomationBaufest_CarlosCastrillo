Feature: User adding product to the cart

    USER STORY -> BAUFEST WEB CHALLENGE
    # URL = https://www.demoblaze.com/index.html
    
    #tc01-userAddProduct
    Scenario: Add laptop to cart
    Given that the user is on the home of the website "https://www.demoblaze.com/index.html"
    When the user clicks on categories menu > "Laptops"
    And the user clicks on the picture of the laptop "Sony vaio i5" 
    And click on the CTA "Add to cart" button.
    Then the laptop should be added to the user's cart
    And the website should display a message "Product added"

    #tc02-userAddProduct
    Scenario: Add two laptops to cart
    Given that the user is on the home of the website "https://www.demoblaze.com/index.html"
    When the user clicks on laptops category
    And the user clicks on the picture of the laptop "Sony vaio i5"
    And click on the CTA "Add to cart" button two times.
    Then the laptops should be added to the user's cart
    And the website should display a message "Product added"