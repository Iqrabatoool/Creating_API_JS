const express = require('express');
const app = express();
const port = 3000;
const options = {
    dotfiles: 'ignore',
    //Entity Tag
    etag: false,
    extensions: ['htm', 'html'],
    //cache control
    index: false,
    //Maximum Age for caching Static files (1d = 1 day)
    maxAge: '1d',
    redirect: false,
    setHeaders (res, path, stat) {
      res.set('x-timestamp', Date.now())
    }
  }
  
  app.use(express.static('public', options))
  