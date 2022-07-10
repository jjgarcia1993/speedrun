const express = require('express');
const { formatHtml } = require('./format-html');
const {addWord, getStory} = require('./storyUtils');



const PORT = 3001;

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res) => {
    const story = getStory();
    res.send(formatHtml(story));
});

app.post('/word', (req, res) => {
    const newWord = req.body.word;
    addWord(newWord);
    const story = getStory();
    res.send( {story} );
})

app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
})