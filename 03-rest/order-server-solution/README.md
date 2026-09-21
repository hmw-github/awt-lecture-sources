# order server with REST API

The api looks as follows (based on the models classes): Preview in VS Code with CTRL+Shift+v

| operation            | HTTP method    | path      | request body  | reply body        | status codes   |
|----------------------|-----|-------|---|---------|-----|
| getOrders(): Order[] | GET | order |   | Order[] | 200 |
| getOrder(id: int): Order | GET | order/:id |  | Order | 200, 404 |
| createOrder(o: Order): Order | POST | order | Order | Order | 201 |
| updateOrder(o: Order): void | PUT | order | Order | | 200, 404 |
| deleteOrder(id: int): void | DELETE | order/:id | | | 200, 404 |
| getPositions(orderId: int): Position[] | GET | order/:orderId/position |  | Position[] | 200 |
| createPosition(orderId: int, p: Position): void | POST | order/:orderId/position | Position | | 201 |
| updatePosition(orderId: int, p: Position): void | PUT | order/:orderId/position | Position | | 200, 404 |
| deletePosition(orderId: int, id: int): void | DELETE | order/:orderId/position/:id |  |  | 200, 404 |

## setup project

run `npm install`

## run server 

in dev mode: `npm run dev` - will execute nodemon to listen for changes and restart server

in prod mode: `npm start` - will execute server.ts directly