const swaggerJSDoc = require('swagger-jsdoc');

const swaggerOptions = {
    swaggerDefinition: {
      myapi: '3.0.0',
      info: {
        title: 'My API',
        version: '1.0.0',
        description: 'Healthcare API documentation',
      },
      servers: [
        {
          url: 'http://localhost:3001',
        },
      ],
    },
    apis: ['./routes/*.js'], // files containing annotations as above
  };
  module.exports = swaggerOptions;