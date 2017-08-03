const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const generatePassword = require('password-generator');

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Put all API endpoints under '/api'
app.get('/api/passwords', (req, res) => {
  const count = 5;

  // Generate some passwords
  const passwords = Array.from(Array(count).keys()).map(i =>
    generatePassword(12, false)
  )

  // Return them as json
  res.json(passwords);

  console.log(`Sent ${count} passwords`);
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.post('/contactForm', (req, res) => {
  const info = req.body.info
  res.send(info)
})
const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Freedom Energy is listen on port ${port}`);
