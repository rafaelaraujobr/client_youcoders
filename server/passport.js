const passport = require("passport")
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const { web: client_secret } = require('./google-youtube.json')

passport.serializeUser((user, done) => { done(null, user); });

passport.deserializeUser((user, done) => { done(null, user); });


passport.use(new GoogleStrategy({
    clientID: client_secret.client_id,
    clientSecret: client_secret.client_secret,
    callbackURL: client_secret.redirect_uris[0],
    passReqToCallback: true
},
    (request, accessToken, refreshToken, profile, done) => done(null, profile)
));