/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes = [
  { 
    quote: "We build our computer (systems) the way we build our cities: over time, without a plan, on top of ruins.",
    source: "Ellen Ullman",
    citation: "finite.com.au/blog",
    year: "02/10/2019"
  },
  {
    quote: "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
    source: "Patrick McKenzie"
  },
  {
    quote: "Rules of Optimization: Rule 1: Don’t do it. Rule 2 (for experts only): Don’t do it yet.",
    source: "Michael A. Jackson"
  },
  {
    quote: "No one in the brief history of computing has ever written a piece of perfect software. It’s unlikely that you’ll be the first.",
    source: "Andy Hunt"
  },
  {
    quote: "One of the best programming skills you can have is knowing when to walk away for a while.",
    source: "Oscar Godson"
  }
];

console.log(quotes);

/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
  const random = Math.floor(Math.random()* quotes.length);
  return quotes[random];
};

// const rand = Math.floor(Math.random()*quotes.length);


/***
 * `printQuote` function
***/

function printQuote () {
let randomQuote = getRandomQuote();

let html = `
  <p class="quotes">${randomQuote.quote}</p>
  <p class="source">${randomQuote.source}
`;

// checking if the object's Key (from our passed in randomQuote function) Includes 
if(Object.keys(randomQuote).includes("citation"))  {
 
html +=  
  `
    <span class="citation">${randomQuote.citation}</span>
  `;
} if (Object.keys(randomQuote).includes("year")) { 

html +=  
  `
    <span class="year">${randomQuote.year}</span>
    </p>
  `;    
}

document.getElementById('quote-box').innerHTML = html;
}
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);