# JavaScript API Dashboard

This project is a browser-based dashboard built using HTML, CSS, and JavaScript. It showcases multiple public APIs, each integrated into its own section, allowing the user to interact with and retrieve live data.

## Features

Each section of the dashboard connects to a different real-world API:

| Section         | API Source                                      | Description                                 |
|----------------|--------------------------------------------------|---------------------------------------------|
| Random Dog      | dog.ceo                                         | Displays a random dog image                 |
| Random Cat      | thecatapi.com                                   | Displays a random cat image                 |
| Weather Info    | open-meteo.com                                  | Shows current temperature in New York City  |
| Currency Rates  | exchangerate-api.com                            | Converts USD to EUR                         |
| Trending Movies | themoviedb.org                                  | Displays 3 random trending movies           |
| GitHub User     | api.github.com                                  | Displays a random GitHub user profile       |
| Public APIs     | api.adviceslip.com                              | Displays a random piece of advice           |

## Technologies Used

- HTML5
- CSS3 (Grid + Flexbox)
- JavaScript (ES6+)
  - fetch()
  - async/await
  - DOM manipulation

## Learning Objectives

- Retrieve data from public APIs using fetch
- Handle asynchronous operations using async/await
- Parse and work with JSON data (objects, arrays)
- Display API results dynamically on the page
- Manage loading and error states
- Randomize selections from fetched data

## How to Use

1. Clone this repository:

   git clone https://github.com/your-username/js-api-dashboard.git
   cd js-api-dashboard

2. Open the index.html file in your web browser.

3. Click any of the buttons in the dashboard to retrieve and display live API data.

## API Key Notice

The Movies section (TMDB API) requires an API key.  
You can get a free API key by creating an account at https://www.themoviedb.org

Replace the placeholder in script.js:

https://api.themoviedb.org/3/trending/movie/week?api_key=YOUR_API_KEY

## File Structure

project-folder/
├── index.html
├── styles.css
├── script.js
└── README.md

## Credits

- Dog API – https://dog.ceo
- Cat API – https://thecatapi.com
- Open-Meteo – https://open-meteo.com
- ExchangeRate API – https://www.exchangerate-api.com
- TMDB – https://www.themoviedb.org
- GitHub REST API – https://docs.github.com/en/rest
- Advice Slip – https://api.adviceslip.com

## Author

Created by Gabriel Logan
Email: logandeveloper1000@gmail.com

## License

This project is licensed under the MIT License.
