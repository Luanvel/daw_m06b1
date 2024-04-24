const famousQuotes = [
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    quote:
      "In the end, it's not the years in your life that count. It's the life in your years.",
    author: "Abraham Lincoln",
  },
  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    quote: "You miss 100% of the shots you don't take.",
    author: "Wayne Gretzky",
  },
  {
    quote:
      "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    quote: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
  },
  {
    quote: "The journey of a thousand miles begins with one step.",
    author: "Lao Tzu",
  },
  {
    quote: "The only thing we have to fear is fear itself.",
    author: "Franklin D. Roosevelt",
  },
];

//Escollir número aleatoriament
const randomNum = Math.floor(Math.random() * famousQuotes.length);

console.log(famousQuotes[randomNum].quote);
console.log(famousQuotes[randomNum].author);
