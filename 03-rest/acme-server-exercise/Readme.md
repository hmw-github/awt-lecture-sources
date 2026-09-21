# ACME Server 

Node.js REST API for invoice and order manangement.

## Configuration

- Environment variables are defined in file `.env`.
- The REST endpoints are defined in file `src/routes.ts`.

## ACME Server REST API

The server offers the following REST API based on classes in `models`:

| call | Method | URL | request body | response body | http status code | remark |
|------|--------|-----|--------------|---------------|------------------|---|
| getUser(email: string): User | GET | /user?email=:email |  | User | 200, 404 | |
| getRevenues(): Revenue[] | GET | /revenue |  | Revenue[] | 200 | |
| getInvoiceById(id: int): Invoice | GET | /invoice?id=:id |  | Invoice | 200, 404 | |
| getLatestInvoices(limit: int): Invoices[] | GET | /invoice/latest/:limit |  | Invoice[] | 200 | limit == 0: all objects |
| getFilteredInvoices(query: string, currentPage: int): Invoices[] | GET | /invoice/filtered?query=<string>&currentPage=<int> |  | Invoice[] | 200 | currentPage == -1: get all objects |
| createInvoice(invoice: Invoice): int | POST | /invoice | Invoice |  | 201 | result is id |
| updateInvoice(invoice: Invoice): void | PUT | /invoice/:id | Invoice |  | 200, 404 | |
| deleteInvoice(id: int): void | DELETE | /invoice/:id |  |  | 200, 404 | |


## Start server

development mode: `npm run dev`
production mode: `npm start`

## Testing

- install extension `REST Client`
- open tests.http
- to send a request klick on `send request` (e.g. between line 6 and 7)

## Server Architecture in brief

- all sources are under `./src`
- PORT the server listens to is defined in `./.env`
- files unter src:
  - server.ts: server main code, run this to start server
  - ./models: all model files
  - ./controller: all controllers implementing endpoints for a resource (e.g. UserController for user resource)
  - routes.ts: endpoint definitions