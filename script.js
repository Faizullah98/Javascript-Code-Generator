const btn = document.querySelector('#new-quote');
const quote = document.querySelector('.quote');
const person = document.querySelector('.person');

const quotes = [
  {
    quote: `"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking."`,
    person: `Steve Jobs`,
  },
  {
    quote: `"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough."`,
    person: `Oprah Winfrey`,
  },
  {
    quote: `""If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success."`,
    person: `James Cameron`,
  },
  {
    quote: `"he greatest glory in living lies not in never falling, but in rising every time we fall."`,
    person: `Nelson Mandela`,
  },
  {
    quote: `"The way to get started is to quit talking and begin doing."`,
    person: `Walt Disney`,
  },
  {
    quote: `"The future belongs to those who believe in the beauty of their dreams."`,
    person: `Eleanor Roosevelt`,
  },
  {
    quote: `"Spread love everywhere you go. Let no one ever come to you without leaving happier."`,
    person: `Mother Teresa`,
  },
  {
    quote: `"It is during our darkest moments that we must focus to see the light."`,
    person: `Aristotle`,
  },
  {
    quote: `"The only thing we have to fear is fear itself."`,
    person: `Franklin D. Roosevelt`,
  },
  {
    quote: `"Be yourself; everyone else is already taken.Z"`,
    person: `scar Wilde`,
  },
];

btn.addEventListener('click', function () {
  let randomquote = Math.floor(Math.random() * quotes.length);
  quote.innerText = quotes[randomquote].quote;
  person.innerText = quotes[randomquote].person;
});
