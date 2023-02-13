import { CoinbaseCommerceClient } from "../src";

const API_KEY = process.env.API_KEY;

describe("coinbase-commerce events", () => {
	if (!API_KEY) {
		throw new Error("Invalid API key!");
	}
	const client = new CoinbaseCommerceClient(API_KEY);

	test("list events", async () => {
		const { result, error } = await client.listEvents();
		expect(error).toBeUndefined();
		expect(result).toBeDefined();
	});

	test("show events", async () => {
		const { result, error } = await client.listEvents();
		expect(error).toBeUndefined();
		expect(result).toBeDefined();
		const { result: showResult, error: showError } = await client.showEvent({
			event_id: result!.data[0]!.id,
		});
		expect(showError).toBeUndefined();
		expect(showResult).toBeDefined();
	});
});
