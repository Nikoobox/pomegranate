const express = require('express');
const router = express.Router();
const Type = require('../../models/Type');

router.get("/",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        Type
            .find()
            .sort({ date: -1 })
            .then((types) => res.json(types))
            .catch((err) => res.status(400).json(err))
    }
)


router.get("/:type_id", (req, res) => {
        Type
        .findById(req.params.id)
        .then((type) => res.json(type))
        .catch((err) => res.status(400).json(err));
    }
)


// const firstType = new Type({
//     name: Grains&Cereals,
//     itemsIds: []
// });

// firstGenre
//     .save()
//     .then(type => res.json(type));


// const secondGenre = new Genre({
//     name: Fruits&Vegetables,
//     itemsIds: []
// });

// secondGenre
//     .save()
//     .then(genre => res.json(genre));

// const thirdGenre = new Genre({
//     name: Meat&Poultry&Fish&Eggs&Drybeans,
//     itemsIds: []
// });

// thirdGenre
//     .save()
//     .then(genre => res.json(genre));


// const forthGenre = new Genre({
//     name: DairyProducts,
//     itemsIds: []
// });

// forthGenre
//     .save()
//     .then(genre => res.json(genre));


// const fifthGenre = new Genre({
//     name: Condiments,
//     itemsIds: []
// });

// fifthGenre
//     .save()
//     .then(genre => res.json(genre));

// const sixthGenre = new Genre({
//     name: Miscellaneous,
//     itemsIds: []
// });

// sixthGenre
//     .save()
//     .then(genre => res.json(genre));
// }