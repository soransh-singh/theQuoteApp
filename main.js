window.addEventListener("load", ()=>{
  console.log("window Loaded")

  const quote = document.querySelector(".quote")
  const name = document.querySelector(".name")
  const genre = document.querySelector(".genre")

  const randomBtn = document.querySelector(".random-btn")
  const anotherBtn = document.querySelector(".info")

  const apiUrl = "https://quote-garden.herokuapp.com/api/v3/quotes/"

  async function getQuote(target){
    const response = await fetch(`${apiUrl}${target}`)
    const responseData = await response.json()
    const {quoteText, quoteAuthor, quoteGenre} = responseData.data[0]
    quote.textContent = quoteText
    name.textContent = quoteAuthor
    genre.textContent = quoteGenre
  }

  randomBtn.addEventListener("click", ()=>getQuote("random"))

  anotherBtn.addEventListener("click", ()=> getQuote(`random/?author=${name.textContent}&limit=1`))

  getQuote("random")


})
