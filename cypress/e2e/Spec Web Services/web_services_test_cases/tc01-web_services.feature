Feature: Challenge Web services

    USER STORY -> BAUFEST WEB SERVICES CHALLENGE

    #tc01-url_access
    Scenario: Create a new pet and validate the response
    Given that the user is interacting with the Swagger Petstore web services
    When the user creates a new pet with id 0, category id 0, category name "string", 
    pet name "Atlasian", photoUrls "string", tags id 0, tags name "string" and status "available"
    Then the web service should return a status code of 200
    And the response schema should match the expected format