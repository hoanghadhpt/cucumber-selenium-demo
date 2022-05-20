Feature: Searching for cucumbers
  As an internet user
  In order to find out more about cucumbers
  I want to be able to search for information about cucumbers
  
  Scenario: Vnexpress
    When I go to "https://vnexpress.net/"
    And I got classname "thoisu"
    And I click on classname "thoisu"
    Then I compare text

