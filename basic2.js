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