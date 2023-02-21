import { CoinbaseCommerceClient } from "../src";

const API_KEY = process.env.API_KEY;

describe("coinbase-commerce charges", () => {
	if (!API_KEY) {
		throw new Error("Invalid API key!");
	}
	const client = new CoinbaseCommerceClient(API_KEY);

	test("list charges", async () => {
		// const { result, error } = await client.listCheckouts();
		// expect(error).toBeUndefined();
		// expect(result).toBeDefined();
	});
});
