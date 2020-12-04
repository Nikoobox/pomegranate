const express = require('express');
const router = express.Router();
const passport = require('passport');
const validateItemInput = require("../../validation/items");
const Item = require("../../models/Item");

router.get("/",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        Item
            .find()
            .sort({ date: -1 })
            .then((items) => res.json(items))
            .catch((err) => res.status(400).json({noitemsfound: 'No items found, create some!'}));
    }
)

router.get("/:itemId",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        Item
            .findById(req.params.itemId)
            .then((item) => res.json(item))
            .catch(err => res.status(400).json({noitemfound: 'No item found with that id'}));
    }
)

router.get('/user/:userId',
    (req, res) => {
    Item.find({ user: req.params.userId })
        .then(items => res.json(items))
        .catch(err => 
            res.status(404).json({itemsnotfound: 'No items from that user were found'}
        )
    );
});

router.post("/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { isValid, errors } = validateItemInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newItem = new Item({
        name: req.body.name,
        quantity: req.body.quantity,
        expirationDate: req.body.expirationDate,
        type: req.body.type,
        user: req.user.id
    });
  
    newItem.save()
        .then(item => res.json(item))
        .catch(err => res.json(err));
  }
);

router.delete('/:itemId', 
        passport.authenticate('jwt', {session:false}), 
        (req,res)=>{
            Item.findById(req.params.itemId, function(err, item){
                if(!item){
                    return res.status(400).json('We could not find that item');
                } else{
                    Item.findOneAndDelete({_id: req.params.itemId}, function (err, item){
                        if (err){
                            return res.status(400).json(err);
                        }else{
                            res.send(item.id);
                        }
        
                    });
                }
            });
});

router.patch('/:itemId', 
        passport.authenticate('jwt', {session:false}), 
        (req, res) => {
            const { isValid, errors } = validateItemInput(req.body);
            if (!isValid) {
                return res.status(400).json(errors);
            }
            Item.findById(req.params.itemId, function(err, item){
                if (!item){
                    return res.status(400).json('We could not find that item');
                } else {
                    Item.findOneAndUpdate({_id: req.params.itemId}, req.body, function(err, item){
                        if (err) {
                            return res.status(400).json(err);
                        } else {
                            newItem = req.body;
                            res.send(newItem);
                        }
                    });
                }
            });
});


module.exports = router;