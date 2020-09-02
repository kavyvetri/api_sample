module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: "http://localhost:1337",
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '18e97ba1d6e27f4900bce82c72e44399'),
    },
  },
});
