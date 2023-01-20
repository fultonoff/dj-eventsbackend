module.exports = ({
  env
}) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1331),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
