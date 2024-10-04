require('dotenv').config();

module.exports = {
    mongoURI: process.env.MONGODB_ORDER_URI || 'mongodb://127.0.0.1/orders',
    rabbitMQURI: 'amqp://localhost',
    rabbitMQQueue: 'orders',
    port: 3002
};
  