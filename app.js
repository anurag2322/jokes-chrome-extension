fetch('https://icanhazdadjoke.com/slack')
.then(data => data.json())
.then(jokedata =>{
    const jokeelement=document.querySelector(".jokeelement")
    const joketext=jokedata.attachments[0].text;
    jokeelement.innerHTML=joketext
})