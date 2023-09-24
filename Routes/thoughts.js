const express = require('express');
const { User, Thought, Reaction } = require('../models');
const router = express.Router();

router.post('/:id', (req, res) => {
    Thought.create(req.body)
        .then(({ _id }) => {
            return User.findByIdAndUpdate(
                req.params.id,
                { $push: { thoughts: _id } },
                { new: true }
            );
        })
        .then(data => res.json(data))
        .catch(err => res.json(err));
});

router.get('/', (req, res) => {
    Thought.find({})
        .then(data => res.json(data))
        .catch(err => res.json(err));
});

router.post('/:id/reactions', (req, res) => {
    Reaction.create(req.body)
        .then(({ _id }) => {
            return Thought.findByIdAndUpdate(
                req.params.id,
                { $push: { reactions: _id } },
                { new: true }
            );
        })
        .then(data => res.json(data))
        .catch(err => res.json(err));
});


module.exports = router;