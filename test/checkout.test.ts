import { CoinbaseCommerceClient } from "../src";

const API_KEY = process.env.API_KEY;

describe("coinbase-commerce checkouts", () => {
	if (!API_KEY) {
		throw new Error("Invalid API key!");
	}
	const client = new CoinbaseCommerceClient(API_KEY);

	test("list checkouts", async () => {
		const { result, error } = await client.listCheckouts();
		expect(error).toBeUndefined();
		expect(result).toBeDefined();
	});

	test("show checkout", async () => {
		const { result, error } = await client.listCheckouts();
		expect(error).toBeUndefined();
		expect(result).toBeDefined();
		const { result: showResult, error: showError } = await client.showCheckout({
			checkout_id: result!.data[0]!.id,
		});
		expect(showError).toBeUndefined();
		expect(showResult).toBeDefined();
	});
});
