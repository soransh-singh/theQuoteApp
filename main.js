window.addEventListener("load", ()=>{
  console.log("window Loaded")
  const randomBtn = document.querySelector(".random-btn")
  const quote = document.querySelector(".quote")
  const name = document.querySelector(".name")
  const genre = document.querySelector(".genre")

  const apiUrl = "https://quote-garden.herokuapp.com/api/v3/quotes/random"

  async function getQuote(){
    const response = await fetch(apiUrl)
    const responseData = await response.json()
    const {quoteText, quoteAuthor, quoteGenre} = responseData.data[0]
    quote.textContent = quoteText
    name.textContent = `- by ${quoteAuthor}`
    genre.textContent = quoteGenre
  }

  randomBtn.addEventListener("click", getQuote)

  getQuote()
})
