import { CoinbaseCommerceClient } from "../src";

const API_KEY = process.env.API_KEY;

describe("coinbase-commerce charges", () => {
	if (!API_KEY) {
		throw new Error("Invalid API key!");
	}
	const client = new CoinbaseCommerceClient(API_KEY);

	test("list charges", async () => {
		const { result, error } = await client.listCharges();
		expect(error).toBeUndefined();
		expect(result).toBeDefined();
	});

	test("show charge", async () => {
		const { result, error } = await client.listCharges();
		expect(error).toBeUndefined();
		expect(result).toBeDefined();
		const { result: showResult, error: showError } = await client.showCharge({
			charge_code_or_charge_id: result!.data[0]!.id,
		});
		expect(showError).toBeUndefined();
		expect(showResult).toBeDefined();
	});
});
