const express = require('express');
const router = express.Router();
const passport = require('passport')

router.get('/kakao', passport.authenticate('kakao'));

router.get('/kakao/callback', passport.authenticate('kakao', {
	failureRedirect: '/?fail',
}), (request, response) => {
	// console.log('req: ', request);
	response.redirect('/');
});

module.exports = router;