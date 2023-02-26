const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID:
        "926844405463-mdor5b8299htl6u1g4ldpqm8b6k1vnf6.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "http://localhost:5000/google/callback",
      passReqToCallback: true,
    },
    function (request, accessToken, refreshToken, profile, done) {
      return done(null, profile);
    }
  )
);
