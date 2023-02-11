# Node.js Typescript Coinbase Commerce API

Node.js connector for the Coinbase Commerce API with Typescript.

- Simple and unopiniated connector.
- Actively maintained with a modern, promise-driven interface.
- Strongly typed on all requests and responses.
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

# Webhooks

## Verify a webhook

```typescript
const { isVerified, error, typedBody } = verifyWebhook(
	req.body,
	req.headers["x-cc-webhook-signature"],
	WEBHOOK_SHARED_SECRET,
);
```
