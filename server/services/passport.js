const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true,
    },
    async (accessToken, refreshToken, profile) => {
      let user = null;
      const existinguser = await User.findOne({
        email: profile.emails[0].value,
      });

      if (existinguser) {
        //user exists
        user = existinguser;
      } else {
        //user NOT exists - create new user
        user = await new User({
          googleId: profile.id,
          email: profile.emails[0].value,
          fullName: profile.displayName,
        }).save();
      }

      console.log(user.email + ' ' + user.id);
    }
  )
);
