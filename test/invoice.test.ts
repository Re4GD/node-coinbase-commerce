import { CoinbaseCommerceClient } from "../src";

const API_KEY = process.env.API_KEY;

describe("coinbase-commerce", () => {
	if (!API_KEY) {
		throw new Error("Invalid API key!");
	}
	const client = new CoinbaseCommerceClient(API_KEY);

	test("list invoices", async () => {
		const { result, error } = await client.listInvoices();
		expect(error).toBeUndefined();
		expect(result).toBeDefined();
		console.log(result?.data);
	});
});
