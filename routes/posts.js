const express = require('express');
const router = express.Router();

/* GET posts index /posts */
router.get('/',(req,res,next)=> {
res.send('INDEX/posts');
});

/* GET posts index /posts */
router.get('/new',(req,res,next)=> {
    res.send('NEW/posts/new');
    });
    
    /* POST posts create /posts */
router.post('/create',(req,res,next)=> {
    res.send('CREATE/posts/create');
    });

    /* GET posts show /posts/:id */
router.get('/:id',(req,res,next)=> {
    res.send('SHOW /posts/:id');
    });

    /* GET posts edit index /posts/:id/edit */
router.get('/:id/edit',(req,res,next)=> {
    res.send('EDIT/posts/:id/edit');
    });

    /* PUT posts update index /posts/:id */
router.put('/:id',(req,res,next)=> {
    res.send('UPDATE /posts/:id');
    });

    /* DELETE posts destroy index /posts/:id */
router.delete('/:id',(req,res,next)=> {
    res.send('DELETE /posts/:id');
    });
    
    

module.exports = router; 