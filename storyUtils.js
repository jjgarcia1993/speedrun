const fs = require('fs');
const path = require('path');

addWord = (word) => {
    fs.appendFileSync(path.resolve(__dirname,'story.txt'), ' '+word, function(err){
        if (err) throw err;
    })
}

getStory = () => {
    const story = fs.readFileSync(path.resolve(__dirname, "story.txt"), "utf8");
    return story;
}

module.exports = {addWord, getStory};