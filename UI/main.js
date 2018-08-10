
const  displayCommentForm = () =>{
	document.getElementById("commentBox").style.display = 'block';
}


const  displayQuestionForm = () =>{
	document.getElementById("quizBody").style.display = 'block';
	document.getElementById("quizForm").style.display = 'block';
}
const  hideQuestionForm = () =>{
	document.getElementById("quizBody").style.display = 'none';
	document.getElementById("quizForm").style.display = 'none';
}

const  displayAnswer = () =>{
	window.location = 'answer.html';
}
