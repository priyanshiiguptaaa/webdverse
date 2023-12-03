const plantQuotes = [
  "The Earth laughs in flowers. - Ralph Waldo Emerson",
  "The greatest threat to our planet is the belief that someone else will save it. - Robert Swan",
  "To plant a garden is to believe in tomorrow. - Audrey Hepburn",
  // Add more quotes as needed
];

// Function to display a random quote
function displayQuote() {
  const quoteElement = document.getElementById('quote');
  const randomIndex = Math.floor(Math.random() * plantQuotes.length);
  quoteElement.textContent = plantQuotes[randomIndex];
}

// Call the function to display the quote when the page loads
window.addEventListener('load', displayQuote);

const express = require('express');
const app = express();

// Define a route to handle search queries
app.get('/search', (req, res) => {
  const searchTerm = req.query.search; // Get the search query from the request

  // Process the search query (in a real application, this might involve querying a database)
  // For this example, we'll just echo back the search term as the result
  res.send(`Search results for: ${searchTerm}`);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});