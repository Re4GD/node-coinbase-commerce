# Node.js Typescript Coinbase Commerce API

![npm version](https://img.shields.io/npm/v/node-coinbase-commerce)
![npm downloads](https://img.shields.io/npm/dt/node-coinbase-commerce)
![last commit](https://img.shields.io/github/last-commit/re4gd/node-coinbase-commerce)

Node.js connector for the Coinbase Commerce API with Typescript.

- Simple and unopiniated connector.
- Actively maintained with a modern, promise-driven interface.
- Strongly typed on all requests and responses.
- Lightweight package and snappy DX.
- Proxy support via axios integration.
- Client samples, webhook samples and code snippet examples

# Installation

`npm install node-coinbase-commerce`

# Examples

Refer to the [examples](./examples) folder for implementation demos.

# Usage

## Create an API client

```typescript
import { CoinbaseCommerceClient } from "node-coinbase-commerce";

export const client = new CoinbaseCommerceClient(API_KEY);
```

## Charges

Coming soon

## Checkouts

Coming soon

## Invoices

```typescript
const invoices = await client.listInvoices();
```

```typescript
const invoice = await client.createInvoice({
	business_name: "XXX",
	customer_email: "xxx@xxx.xxx", // has to be email
	customer_name: "XXX",
	memo: "XXX",
	local_price: {
		amount: 100,
		currency: "USDT", // BTC, ETH, USDT
	};
})
```

```typescript
const invoice = await client.showInvoice({
	invoice_code_or_invoice_id: "XXX",
});
```

```typescript
const invoice = await client.voidInvoice({
	invoice_code_or_invoice_id: "XXX",
});
```

```typescript
const invoice = await client.resolveInvoice({
	invoice_code_or_invoice_id: "XXX",
});
```

## Events

Coming soon

# Webhooks

## Verify a webhook

```typescript
const { isVerified, error, typedBody } = verifyWebhook(
	req.body,
	req.headers["x-cc-webhook-signature"],
	WEBHOOK_SHARED_SECRET,
);
```
