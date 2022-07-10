const wordField = document.getElementById("word");
const addButton = document.getElementById("add");
const storyText = document.getElementById("story");

addButton.addEventListener("click", ()=>{
    const bodyData = {"word": wordField.value};

    fetch('/word', {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(bodyData)
    })
    .then( (res) => res.json())
    .then( data => {
        wordField.value = "";
        storyText.innerHTML = data.story;
    })
    console.log("clicked",bodyData);
})