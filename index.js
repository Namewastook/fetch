fetch ("http://jservice.io/api/category?id=136")
    .then(responseObject => responseObject.json())
    .then(randomQuestion => { 
        title = randomQuestion.title
        clues = randomQuestion.clues
        question = clues[Math.floor(Math.random() * clues.length)]
        console.log(title, ":", question.question)
    })

async function showRandomQuestion() {
    const fetchResponse = await fetch("http://jservice.io/api/category?id=69")
    const fetchData = await fetchResponse.json()
    title = fetchData.title
    clues = fetchData.clues
    question = clues[Math.floor(Math.random() * clues.length)]
    console.log(title, ":", question.question)
}
console.log(showRandomQuestion())