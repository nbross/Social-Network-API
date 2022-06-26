const router = require('express').Router();

const {
    getAllThought,
    getThoughtById,
    createThought,
    addReaction,
    updateThought,
    deleteThought,
    removeReaction
} = require('../../controllers/thought-controller');

// get all thoughts and create thoughts
router
    .route('/')
    .get(getAllThought)
    .post(createThought);
// get thought by thought id, update thought by id, and delete thought by id
router
    .route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);
// add reaction and delete reaction
router
    .route('/:thoughtId/reactions')
    .post(addReaction)
    .delete(removeReaction)

module.exports = router;