const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'techdegree-project7/build');

const port = process.env.PORT || 3000;


app.use(express.static(publicPath));


//serve the index file
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
 });


 // listen to the given port or port 3000 by default
app.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
    
 });