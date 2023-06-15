# Harry Potter React App
<img width="1512" alt="Screenshot 2023-06-14 at 19 06 48" src="https://github.com/matea-nikolac/Harry-Potter-React-App/assets/62067357/72b461a0-56be-4dab-afac-51a00ea32d2d">

## Description
The objective of this project was to create an app centered around the Harry Potter series, built with React. The app would leverage a public API to showcase details about the movies and characters from the series.

## Deployment link
https://fabulous-alpaca-fcca80.netlify.app/ 

## Timeframe & Working Team (Solo/Pair/Group)
The project was a pair project and it was completed in a span of two days.

## Technologies Used
CSS, Bootstrap, HTML, JavaScript, React

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

After that, the Characters component was created. It fetches character data from a public API and displays it. Users can search for characters, filter them by house, and view detailed information about each character. The component utilizes React, axios for API requests, and Bootstrap for styling. It provides an engaging user experience for exploring and discovering Harry Potter characters.

<img width="766" alt="Screenshot 2023-06-15 at 17 27 33" src="https://github.com/matea-nikolac/Harry-Potter-React-App/assets/62067357/0107d829-586e-4a52-bb48-15f126e54af2">

To create the Characters page, character data was fetched from an external API using the useEffect hook. The getData function was called during component rendering to retrieve and update the `characters` and `filteredCharacters` states. This allowed for seamless access to the character data within the component.

<img width="777" alt="Screenshot 2023-06-15 at 17 47 09" src="https://github.com/matea-nikolac/Harry-Potter-React-App/assets/62067357/531108a0-2e8e-4aa0-93a6-2913b0837f0b">

The `displayCharacters` function generates a visual representation of the characters by mapping over the `filteredCharacters` array. It dynamically assigns avatar images to each character based on their name. Each character is displayed as a card with their name, image, and a link to their specific character page. 

<img width="1272" alt="Screenshot 2023-06-15 at 17 50 09" src="https://github.com/matea-nikolac/Harry-Potter-React-App/assets/62067357/bc36caba-b1cf-49cf-bd71-1a5d87f5491f">

The `filterCharacters` function is responsible for dynamically filtering the characters based on user input. It uses a regular expression to match the search term with each character's name. Additionally, it checks if the selected house filter matches the character's house or if the filter is set to "All". The filtered characters are then updated in the `filteredCharacters` state, resulting in a real-time update of the displayed characters based on the user's search and filter selections.

<img width="941" alt="Screenshot 2023-06-15 at 18 16 59" src="https://github.com/matea-nikolac/Harry-Potter-React-App/assets/62067357/f8f45d0f-b000-4e0b-bd11-6df1ca2dac6c">

## Challenges


## Wins


## Key Takeaways


## Bugs


## Future Improvements
