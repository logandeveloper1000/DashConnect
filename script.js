async function getDogImage() {
  const output = document.getElementById("dog-output");
  output.innerHTML = "Loading...";
  try {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await res.json();
    output.innerHTML = `<img src="${data.message}" alt="Random Dog" />`;
  } catch (error) {
    output.innerHTML = "Failed to fetch dog image.";
  }
}

async function getCatImage() {
  const output = document.getElementById("cat-output");
  output.innerHTML = "Loading...";
  try {
    const res = await fetch("https://api.thecatapi.com/v1/images/search");
    const data = await res.json();
    output.innerHTML = `<img src="${data[0].url}" alt="Random Cat" />`;
  } catch (error) {
    output.innerHTML = "Failed to fetch cat image.";
  }
}

async function getWeather() {
  const output = document.getElementById("weather-output");
  output.innerHTML = "Loading...";
  try {
    const res = await fetch("https://api.open-meteo.com/v1/forecast?latitude=40.71&longitude=-74.01&current_weather=true");
    const data = await res.json();
    const temp = data.current_weather.temperature;
    output.innerHTML = `Current temp in NYC: ${temp}°C`;
  } catch (error) {
    output.innerHTML = "Failed to fetch weather data.";
  }
}

async function getExchangeRates() {
  const output = document.getElementById("currency-output");
  output.innerHTML = "Loading...";
  try {
    const res = await fetch("https://api.exchangerate-api.com/v4/latest/USD");
    const data = await res.json();
    const rate = data.rates.EUR;
    output.innerHTML = `1 USD = ${rate} EUR`;
  } catch (error) {
    output.innerHTML = "Failed to fetch exchange rate.";
  }
}

async function getMovies() {
  const output = document.getElementById("movies-output");
  output.innerHTML = "Loading...";
  try {
    const res = await fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=39706d3dd1dc62590cbb06a8f3d5e106");
    const data = await res.json();

    // Shuffle and pick 3 random movies
    const shuffled = data.results.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);

    output.innerHTML = selected
      .map(movie => `<p>${movie.title} (${movie.release_date})</p>`)
      .join("");
  } catch (error) {
    output.innerHTML = "Failed to fetch movies.";
  }
}

const usernames = ["octocat", "gaearon", "torvalds", "sindresorhus", "yyx990803"];

async function getGitHubUser() {
  const output = document.getElementById("github-output");
  output.innerHTML = "Loading...";
  try {
    const randomUsername = usernames[Math.floor(Math.random() * usernames.length)];
    const res = await fetch(`https://api.github.com/users/${randomUsername}`);
    const data = await res.json();
    output.innerHTML = `
      <img src="${data.avatar_url}" alt="${data.login}" width="100" />
      <p>${data.name || data.login}</p>
      <a href="${data.html_url}" target="_blank">View Profile</a>
    `;
  } catch (error) {
    output.innerHTML = "Failed to fetch GitHub user.";
  }
}

async function getJoke() {
  const output = document.getElementById("joke-output");
  output.innerHTML = "Loading...";
  try {
    const res = await fetch("https://v2.jokeapi.dev/joke/Any");
    const data = await res.json();
    output.innerHTML = data.type === "single"
      ? `<p>${data.joke}</p>`
      : `<p>${data.setup}</p><p><em>${data.delivery}</em></p>`;
  } catch (error) {
    output.innerHTML = "Failed to fetch joke.";
  }
}

async function getPublicApiInfo() {
  const output = document.getElementById("publicapi-output");
  output.innerHTML = "Loading...";
  try {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    output.innerHTML = `<strong>Advice:</strong> ${data.slip.advice}`;
  } catch (error) {
    output.innerHTML = "Failed to fetch advice. " + error.message;
  }
}
