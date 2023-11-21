# Harry Potter React App
<img width="1512" alt="Screenshot 2023-06-14 at 19 06 48" src="https://github.com/matea-nikolac/Harry-Potter-React-App/assets/62067357/72b461a0-56be-4dab-afac-51a00ea32d2d">

## Description
This was my second project for the General Assembly's Software Engineering Immersive course. The objective of the project was to create an app centered around the Harry Potter series, built with React. The app would leverage a public API to showcase details about the movies and characters from the series.

## Deployment link
https://fabulous-alpaca-fcca80.netlify.app/ 

## Timeframe & Working Team (Solo/Pair/Group)
The project was a pair project and it was completed in a span of two days.

## Technologies Used
* CSS
* HTML
* React
* JavaScript
* JSX
* Axios
* Bootstrap


## Brief

#### Requirements
* Consume a public API
* Have several components
* The app can have a router - with several "pages"

## Planning
Before commencing the coding process, a wireframe was designed using Excalidraw. The wireframe encompasses five essential pages:

* Home Page: The homepage features a navigation bar that includes a "Home" link, allowing users to easily navigate back to the home page, as well as providing options to explore the "Characters" or "Movies" pages.
* Characters Page: Upon selecting the "Characters" link, users are presented with a page displaying all the Harry Potter characters, along with their names and corresponding images. Users have the ability to filter the characters based on Hogwarts houses or search for a specific character by name.
* Specific Character Page: Clicking on a particular character redirects users to a dedicated page showcasing comprehensive information such as the actor's name, date of birth, house, ancestry, and patronus.
* Movies Page: The "Movies" page provides an overview of all the Harry Potter movies.
* Specific Movie Page: By selecting a specific movie, users are redirected to a dedicated page presenting details such as the movie summary, director, release date, box office performance, and running time.

<img width="1249" alt="Screenshot 2023-06-14 at 20 50 17" src="https://github.com/matea-nikolac/Harry-Potter-React-App/assets/62067357/88a07be6-741d-4f74-a54b-a898fc41d720">


## Build Process
At the beginning of the project, the router configuration was set up in the App component. The `BrowserRouter` component from React Router was utilized to handle the routing functionality. 

Within the App component, different routes were defined using the Route component, mapping each path to the corresponding component. The routes included a home page, characters page, specific character page, movies page, specific movie page, error page, loading page, and a page not found component to handle unknown routes. This well-structured routing setup ensured smooth navigation and an enhanced user experience.

<img width="677" alt="Screenshot 2023-06-15 at 13 04 06" src="https://github.com/matea-nikolac/Harry-Potter-React-App/assets/62067357/3c79efd7-3384-43e5-8d5f-c1a7648cd035">

The "PageNavbar" component represents a responsive navigation bar using React Router Dom and React Bootstrap. It includes a logo, and links for "Home", "Characters", and "Movies" pages. The component also utilizes features like "Navbar.Toggle" and "Navbar.Collapse" to enable collapsible navigation content and adapt to different screen sizes.

 ![Screenshot 2023-06-27 at 16 12 31](https://github.com/matea-nikolac/Harry-Potter-React-App/assets/62067357/01305880-5f33-4081-b60c-a79e78e0ef2a)

After that, the Characters component was created. It fetches character data from a public API and displays it. Users can search for characters, filter them by house, and view detailed information about each character. The component utilizes React, axios for API requests, and Bootstrap for styling. It provides an engaging user experience for exploring and discovering Harry Potter characters.

To create the Characters page, character data was fetched from an external API using the `useEffect` hook. The `getData` function was called during component rendering to retrieve and update the `characters` and `filteredCharacters` states. This allowed for seamless access to the character data within the component.

<img width="777" alt="Screenshot 2023-06-15 at 17 47 09" src="https://github.com/matea-nikolac/Harry-Potter-React-App/assets/62067357/531108a0-2e8e-4aa0-93a6-2913b0837f0b">

The `displayCharacters` function generates a visual representation of the characters by mapping over the `filteredCharacters` array. It dynamically assigns avatar images to each character based on their name. Each character is displayed as a card with their name, image, and a link to their specific character page. 

<img width="1272" alt="Screenshot 2023-06-15 at 17 50 09" src="https://github.com/matea-nikolac/Harry-Potter-React-App/assets/62067357/bc36caba-b1cf-49cf-bd71-1a5d87f5491f">

The `filterCharacters` function is responsible for dynamically filtering the characters based on user input. It uses a regular expression to match the search term with each character's name. Additionally, it checks if the selected house filter matches the character's house or if the filter is set to "All". The filtered characters are then updated in the `filteredCharacters` state, resulting in a real-time update of the displayed characters based on the user's search and filter selections.

<img width="941" alt="Screenshot 2023-06-15 at 18 16 59" src="https://github.com/matea-nikolac/Harry-Potter-React-App/assets/62067357/f8f45d0f-b000-4e0b-bd11-6df1ca2dac6c">

The `getHouses` function retrieves a unique list of Hogwarts houses from the character data. It filters out any characters without a defined house and sorts the remaining houses alphabetically. The function then maps over the houses to generate <option> elements with the house names, which can be used in the house filter dropdown for filtering characters by their respective houses.

<img width="725" alt="Screenshot 2023-06-19 at 16 19 13" src="https://github.com/matea-nikolac/Harry-Potter-React-App/assets/62067357/50e011d8-4368-49a1-a656-a70b4abcaf44">

After the Characters page, the Movies component was implemented using a similar approach. It also uses the `useEffect` hook to make an API request and fetches movie data from the PotterDB API. The component then renders the movie posters using the Bootstrap Card component and provides links to individual movie pages using React Router's Link component.

The CharacterSingle component is a React component that displays detailed information about a specific character. It utilizes the `useEffect` hook and the "axios" library to fetch character data from the PotterDB API. Due to the unavailability of individual character endpoints (e.g., "/characters/character-name"), the component fetches all characters using the "/characters" endpoint instead. 

![Screenshot 2023-06-27 at 17 34 18](https://github.com/matea-nikolac/Harry-Potter-React-App/assets/62067357/951853e3-9453-4f91-b984-03c386f35351)

The component renders the character's name, image, actor, date of birth, house, ancestry, and patronus. It also includes a link to return to the list of characters. 

The MovieSingle component is a React component that displays detailed information about a specific movie. It shares a similar structure and approach with the "CharacterSingle" page. However, instead of fetching all movies, this component makes a specific API request to retrieve information about a particular movie using the /${id} endpoint from the PotterDB API. The fetched movie data includes attributes such as the title, poster image, summary, director, release date, box office earnings, and running time. The component also provides a link to return to the list of movies. 

It should be noted that the difference in API endpoints is due to the unavailability of a single endpoint containing both character and movie information, leading to separate requests for each entity.

Three additional components were created: Error for displaying error messages, Loading for showing loading animations, and PageNotFound to handle non-existent pages with a "404 Page not found" message. They enhance user experience by providing feedback and guidance in various scenarios.

## Challenges
Throughout the project, we encountered several challenges that required problem-solving skills. One significant obstacle was the absence of a comprehensive API, which necessitated the use of distinct endpoints for characters and movies. This integration and coordination added complexity and demanded additional effort to ensure smooth functionality.

We also faced image quality issues stemming from the API, prompting us to manually seek superior alternatives. Although this process was time-consuming, it was vital to uphold the application's professional and visually appealing appearance.

Another intriguing challenge involved implementing seamless interaction between search and dropdown filters. To overcome this, we introduced a separate React state called `filteredCharacters` alongside the existing characters state. This enabled us to effectively apply both search queries and dropdown filters, resulting in a seamless user experience. Please refer to the code snippet below for a practical demonstration of this implementation.

![Screenshot 2023-06-27 at 18 23 28](https://github.com/matea-nikolac/Harry-Potter-React-App/assets/62067357/90b819fc-5bce-44bd-8e31-1414d4f1c665)

## Wins
A significant 'Win' in pair coding the Harry Potter app was the efficient collaboration and knowledge sharing between me and my coding partner. By working together, we tackled challenges effectively, leveraging our strengths and arriving at innovative solutions.

## Key Takeaways
* Enhanced understanding of working with external APIs and integrating them into applications, leading to improved skills in handling API requests and data manipulation.
* Gain of experience in utilizing React, Bootstrap, and SCSS for building web applications, enabling familiarity with their features and capabilities.
* Improved comprehension of the useEffect hook and axios library, deepening knowledge of asynchronous operations and handling API responses effectively.

## Bugs
The PageNotFound component needs improvement in handling invalid paths. For example, when manipulating the character's ID in the URL, instead of redirecting to the PageNotFound page, it currently displays a blank page. Enhancements are required to provide proper error feedback to users.

## Future Improvements
Here are some potential areas for future improvements in the Harry Potter app:

* Fix bug to redirect invalid URLs to PageNotFound component instead of blank page.
* Explore alternative external APIs to fetch missing photos for the remaining Harry Potter characters with non-existent image URLs from the current API.
