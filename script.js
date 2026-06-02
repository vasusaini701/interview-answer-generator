function generateAnswer(){

const question =
document
.getElementById("question")
.value
.toLowerCase();

let answer="";

if(question.includes("yourself")){

answer=
"My name is [Your Name]. I recently completed my education and have developed strong problem-solving and communication skills. I am eager to learn, contribute to a professional team, and grow my career.";

}

else if(question.includes("hire")){

answer=
"You should hire me because I am a quick learner, highly motivated, and ready to contribute. I bring a fresh perspective and strong commitment to achieving organizational goals.";

}

else if(question.includes("weakness")){

answer=
"One of my weaknesses is that I sometimes spend extra time ensuring quality. However, I am learning to balance perfection with efficiency.";

}

else{

answer=
"This is a common interview question. Focus on your skills, achievements, and enthusiasm for the role.";

}

document.getElementById("result").innerText=answer;
}