Feature: Challenge Web services

    USER STORY -> BAUFEST WEB SERVICES CHALLENGE

    #tc02-url_access
    Scenario: Retrieve a pet and validate the response
    Given that the user is interacting with the Swagger Petstore web services
    When the user retrieves a pet with id 1
    Then the web service should return a status code of 200
    And the response should contain a property 'name'
    And the 'name' property should be a string
    And the response schema should match the expected format