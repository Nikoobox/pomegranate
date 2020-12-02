const express = require('express');
const router = express.Router();
const passport = require('passport');
const validateKitchenInput = require("../../validation/kitchen");
const Kitchen = require("../../models/Kitchen");
// const Item = require("../../models/Item");

router.get("/kitchen", (req, res) => {
    res.json({ msg: 'This is the Kitchen route' })
});

// router.get("/", (req, res)=>{
//     Kitchen
//     .find()
//     .then(kitchen => res.json(kitchen))
//     .catch(err=> res.status(400).json(err));
// })

// router.get("/kitchen/:user_id", (req, res)=>{
//     Kitchen
//     .find({ user:req.params.user_id })
//     .then(kitchen => res.json(kitchen))
//     .catch(err => res.status(400).json(err));
// })

router.get("/user/:user_id", (req, res) => {
    Kitchen
        .find({ user: req.params.user_id })
        .sort({ name: -1 })
        .then(kitchen => res.json(kitchen))
        .catch(err => res.status(400).json(err));
})

router.post("/",
    passport.authenticate("jwt", { session: false }),
        (req, res) => {
            const { isValid, errors } = validateKitchenInput(req.body);

            if (!isValid) {
                return res.status(400).json(errors)
            }

            const newKitchen = new Kitchen({
                user: req.user.id,
                name: req.body.name
            });

            newKitchen
                .save()
                .then(kitchen => res.json(kitchen));
        }
)

module.exports = router;
