# nodejs-ecommerce-microservice


- The application uses an API gateway to bind all services along a single front, acting as a proxy for the domains in which the `auth`, `order` and `product` microservices are deployed on
- Each microservice, the API gateway and RabbitMQ are deployed as Docker images
- Interactions between `product` service and `order` service uses [AMQP](https://www.amqp.org) protcol, using RabbitMQ which consists of two queues - `orders` and `products`. This saves on resources allocated for REST calls to MongoDB.
- `product` service publishes to the order queue which is then consumed and collated by `order` service
- `order` service publishes ordered products to the product queue which is then consumed by `product` to return order details

Tech Stack: Node.js, Express, MongoDB, Docker, RabbitMQ, Mocha, Chai
s

## Steps to run

### On Docker
1. Create a .env file following the format specified in the `/auth/env.example`, `order/env.example` and `product/env.example` directories, following the format specified in each microservice directory
2. Run `docker-compose build`
3. Run `docker-compose up`. Now you can test the APIs from localhost:3003

### On localhost
1. Create a .env file following the format specified in the `/auth/env.example`, `order/env.example` and `product/env.example` directories, following the format specified in each microservice directory
2. Run `npm install` in the `/auth`, `/product`, `/order` and `/api-gateway` directories
3. Run `npm start` on all four directories mentioned in the step above. Now you can test the APIs from localhost:3003
