const quotes = [
    {
        name: 'Coco Chanel',
        quote: 'Success is most often achieved by those who don’t know that failure is inevitable.'
    },
    {
        name: 'Kanye West',
        quote: 'I refuse to accept other people’s ideas of happiness for me. As if there’s a one size fits all standard for happiness.'
    },
    {
        name: 'Tony Robbins',
        quote: 'If you do what you’ve always done, you’ll get what you’ve always gotten.'
    },
    {
        name: 'Aristotle',
        quote: 'There is only one way to avoid criticism: do nothing, say nothing, and be nothing.'
    },
    {
        name: 'Lao Tzu',
        quote: 'When I let go of what I am, I become what I might be.'
    }
]

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', displayQuote);

function displayQuote(){
    let number = Math.floor(Math.random()*quotes.length);
    
    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;
}