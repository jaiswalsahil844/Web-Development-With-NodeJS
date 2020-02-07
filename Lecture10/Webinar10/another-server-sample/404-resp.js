const express = require("express");

const sev = express();

sev.get('/a', (req, res) => res.send('AAAAA'));
sev.get('/b', (req, res) => res.send('BBBBB'));

sev.use((req, res) => res.send('<h2>404 not found</h2>'));

sev.listen(8444);