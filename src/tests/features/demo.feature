Feature: I'm going to validate two websites

@calculatortesting
Scenario Outline: Calculator Add functionality testing

Given I will navigate to "Calculator" page
When I add two numbers: "<number1>" and "<number2>"
Then the output displayed should be "<number3>"

Examples:
| number1 | number2 | number3  |
| 3       | 5       | 8        |
| 2       | 7       | 9        |

# ---------------------------------------------------------

@angulartesting
Scenario Outline: AngularJs page testing

Given I will navigate to "AngularJs" page
When I click on header link and navigate to Angular page
Then I enter "<key>" in the searchbox

Examples:
| key    | number1 | number2 |
| hello  | 3       | 5       |
| hey    | 2       | 7       |
