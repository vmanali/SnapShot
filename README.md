# Snap Shot Regression Pack

Build and Run the code and test for bugs, provide a document of all your tests and your findings.
  
### Summary

Snap Shot is a gallery created using React,React Hooks, React Router and Context API. The Routes were setup for four default pages and a search page. Also the images were displayed using the Flickr API and axios to fetch data.

### How to run the project

- `git clone https://github.com/vmanali/SnapShot.git`
- `npm install` from the root directory
- `npm run start`

### How to run Cypress

Run this command on the terminal to execute all e2e tests configured as part of regression pack -

- `Cypress_tags=regression npx cypress run`

Test results are displayed on the terminal and screenshots and videos are also created under the path cypress/screenshots and cypress/videos after executing this run

OR

- `npm run cypress:open`

### Config Changes

1. Cypress was working on an older version of v6, that’s been upgraded to v10.6.0
2. Included a project id in the cypress config files for the runs to appear on a cypress dashboard
3. Modified cypress config file to include the base url for SnapShot
4. Modified specPattern on cypress config file to just run the regression spec and not the examples spec
5. Included some data-e2e tags into the web app src code

### E2E Journeys

### Validate default pages

1. Has default CTA buttons
2. Should be able to click on one of those default CTA
3. Make sure the url is correct when on relevant page 
4. Make sure the heading is right and represents what was clicked

### Validate home page

1. Click on the app name/header, should take you to the home page (check url)
2. Page not found should not be returned
3. Searcher should be visible

### Validate search page

1. Click on the search bar, enter a text and click on the search icon.
2. Text input should match the text showing on the search bar
3. Check if the url has the same text input
4. Page should return results with relevant heading

### Observations and defects

1. When the web app loads for the first time, with url ‘http://localhost:3000/SnapShot#/SnapScout’ it goes straight to the ‘mountain’ screen and not to the home screen. There should be a neutral home screen instead of just redirecting to one of the default pages.
2. Home page always displays page not found 
3. Colour of the search icon changes to white when the user gives an input text, which is not very visible and clear to the user.
4. The last letter of the input text in the search bar is truncated and set in the url also the same incorrect text is sent in the API call and the end result is that the user views images that are not exactly related to his search.
5. When the search results are returned, the heading for the returned results appears to be ’SearchTerm Images’ instead it should be a combination of users input text + Pictures for example: If the user searches for “cake” then the heading should appear as “Cake Pictures”.
6. When the user clicks on the “Food” CTA, the url directs to “crow” and this in-turn makes an API call with a tag “crow” which again returns images of crow and not food, also the heading says “Crow Pictures” instead of “Food Pictures”
7. Default pages on the home page should not have discrepancy in naming in the terms of having singular and plural forms such as “Mountain” is same text on the CTA and url but “Beaches” on CTA and “beach” in the url, same applies to “Birds”.
8.  If this discrepancy is fixed in the webapp source code , then we can loop through <li> tags on main-nav to run the same logic for all the CTAs on cypress tests and this makes the code more robust in nature and it wouldn’t affect any e2e tests even if the default screen CTAs are modified to be something else in the future for example ‘Mountain’ changes to ‘Cake’ etc.
