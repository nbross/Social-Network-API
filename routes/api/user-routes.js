const router = require('express').Router();

const {
    getAllUser,
    getUserById,
    createUser,
    addFriend,
    updateUser,
    deleteUser,
    removeFriend
} = require('../../controllers/user-controller');

// get all users and create users
router
    .route('/')
    .get(getAllUser)
    .post(createUser);

// get by user id, update by user id, and delete a user by id
router
    .route('/:userId')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

// add and remove friends
router
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(removeFriend)

module.exports = router;