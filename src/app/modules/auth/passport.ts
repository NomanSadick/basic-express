import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import User from '../user/user.model';  // User model for database query
import config from '../../config';      // JWT secret from config

// Options for JWT strategy
const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.jwtSecret,
    ignoreExpiration: false,     // Validate token expiration
};

// JWT Strategy for passport
const jwtStrategy = new JwtStrategy(options, async (payload, done) => {
  try {
    const user = await User.findById(payload.userId);  // Find user by userId from JWT payload
    if (!user) {
      return done(null, false, { message: 'User not found' }); // If user is not found
    }
    return done(null, user);  // If user is found, attach to the request
  } catch (error) {
    return done(error, false); // Handle any errors
  }
});

export default jwtStrategy;
