import { CoinbaseCommerceClient } from "../src";

const API_KEY = process.env.API_KEY;

describe("coinbase-commerce", () => {
	if (!API_KEY) {
		throw new Error("Invalid API key!");
	}
	const client = new CoinbaseCommerceClient(API_KEY);

	test("adds 1 + 2 to equal 3", async () => {
		expect(3).toBe(3);
	});

	test("adds 3 + 4 to equal 7", async () => {
		expect(7).toBe(7);
	});

	// test("list invoices", async () => {
	// 	const data = await client.listInvoices();
	// 	console.log(data);
	// });
});
