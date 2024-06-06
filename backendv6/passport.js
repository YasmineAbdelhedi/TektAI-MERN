const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GitHubStrategy = require('passport-github2').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const User = require("./models/UserModel")

passport.use(
	new GoogleStrategy(
		{
			clientID: process.env.CLIENT_ID,
			clientSecret: process.env.CLIENT_SECRET,
			callbackURL: "/auth/google/callback",
			userProfileURL: 'https://www.googleapis.com/oauth2/v3/userinfo',
			scope: ["profile", "email"],
		},
		function (accessToken, refreshToken, profile, callback) {
			callback(null, profile);
		}
	)
);
passport.use(
	new GitHubStrategy(
	  {
		clientID: process.env.GITHUB_CLIENT_ID,
		clientSecret: process.env.GITHUB_SECRET_KEY,
		callbackURL: process.env.GITHUB_CALLBACK_URL,
	  },
	  async (accessToken, refreshToken, profile, cb) => {
		const user = await User.findOne({
		  accountId: profile.id,
		});
		if (!user) {
		  console.log('Adding new github user to DB..');
		  const user = new User({
			accountId: profile.id,
			name: profile.firstname,
		  });
		  await user.save();
		  return cb(null, profile);
		} else {
		  console.log('Github user already exist in DB..');
		  return cb(null, profile);
		}
	  }
	)
  );
  
 
  
  passport.use(
	new FacebookStrategy(
	  {
		clientID: process.env.FACEBOOK_CLIENT_ID,
		clientSecret: process.env.FACEBOOK_SECRET_KEY,
		callbackURL: process.env.FACEBOOK_CALLBACK_URL,
	  },
	  async function (accessToken, refreshToken, profile, cb) {
		const user = await User.findOne({
		  accountId: profile.id,
		  provider: 'facebook',
		});
		if (!user) {
		  console.log('Adding new facebook user to DB..');
		  const user = new User({
			accountId: profile.id,
			name: profile.displayName,
			provider: profile.provider,
		  });
		  await user.save();
		  // console.log(user);
		  return cb(null, profile);
		} else {
		  console.log('Facebook User already exist in DB..');
		  // console.log(profile);
		  return cb(null, profile);
		}
	  }
	)
  );

passport.serializeUser((user, done) => {
	done(null, user);
});

passport.deserializeUser((user, done) => {
	done(null, user);
});


