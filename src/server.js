const bodyParser = require('body-parser');
const express = require('express');

const STATUS_USER_ERROR = 422;

// This array of posts persists in memory across requests. Feel free
// to change this to a let binding if you need to reassign it.
const posts = [];

const server = express();
// to enable parsing of json bodies for post requests
server.use(bodyParser.json());

// TODO: your code to handle requests
server.get('/posts', (req, res) => {
  res.status(200);
  res.json(posts);
});

server.get('/posts/:id', (req, res) => {
  res.status(200);
  res.json(posts[req.params.id]);
});

server.post('/posts', (req, res) => {
  posts.push(req.body);
  res.status(200);
  res.json(posts);
});

server.put('/posts/:id', (req, res) => {
  posts[req.params.id] = req.body;
  res.status(200);
  res.json(req.body);
});

server.delete('/posts/:id', (req, res) => {
  posts.splice(req.params.id, 1);
  res.status(200);
  res.json(req.body);
});

module.exports = { posts, server };
