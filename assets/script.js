var questions = [
    {
        question: "What's the best language",
        choices: ["French", "Street", "JavaScript"],
        answer: "JavaScript"
    },
    {
        question: "What's the best food",
        choices: ["French", "Street", "Italian"],
        answer: "Street"
    }
]
var questionIdx = 0



function startQuiz(event){
    event.preventDefault()
    document.getElementById("start-menu").classList.add('hide')
    document.getElementById('quiz').classList.remove('hide')
    // startOurTimer
    displayQuestion()
}

function checkIfRight(event){
    event.preventDefault()
    console.log("check if right")
    console.log(event.target)


    questionIdx++
}

function displayQuestion(){
    var currentQuestion = questions[questionIdx]
    console.log(currentQuestion)

    for(let i=0; i< currentQuestion.choices.length; i++){
        var choice = document.createElement("button")
        choice.innerHTML = currentQuestion.choices[i]
        choice.addEventListener('click', checkIfRight)
        document.getElementById('answer-holder').append(choice)
    }

}







document.getElementById('start').addEventListener('click', startQuiz)