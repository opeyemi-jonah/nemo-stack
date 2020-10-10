const express = require('express');
const router = express.Router({ mergeParams: true});

    /* GET reviews index /reviews */
    router.get('/',(req,res,next)=> {
    res.send('INDEX /posts/:id/reviews');
    });
    
    /* POST reviews create /posts/:id/reviews */
router.post('/create',(req,res,next)=> {
    res.send('CREATE /posts/id/reviews/:reviews_id');
    });

    /* GET reviews edit index /reviews/:reviews_id/edit */
router.get('/:reviews_id/edit',(req,res,next)=> {
    res.send('EDIT /posts/:id/reviews/:reviews_id/edit');
    });

    /* PUT reviews update index /reviews/:reviews_id */
router.put('/:reviews_id',(req,res,next)=> {
    res.send('UPDATE /posts/:id/reviews/:reviews_id');
    });

    /* DELETE reviews destroy index /reviews/:id */
router.delete('/:reviews_id',(req,res,next)=> {
    res.send('DELETE /posts/:id/reviews/:reviews_id');
    });
    
    

module.exports = router; 