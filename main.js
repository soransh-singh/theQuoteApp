window.addEventListener("load", ()=>{
  console.log("window Loaded")
  const randomBtn = document.querySelector(".random-btn")
  const quote = document.querySelector(".quote")
  const name = document.querySelector(".name")

  async function getQuote(){
    const response = await fetch('https://quote-garden.herokuapp.com/api/v3/quotes/random')
    const responseData = await response.json()
    const {quoteText, quoteAuthor} = responseData.data[0]
    quote.textContent = quoteText
    name.textContent = quoteAuthor
    console.log(responseData.data[0]);
    console.log(quoteText);
    console.log(quoteAuthor);
  }

  randomBtn.addEventListener("click", getQuote)

  getQuote()


})
