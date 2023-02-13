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
	});

	test("show invoice", async () => {
		const { result, error } = await client.listInvoices();
		expect(error).toBeUndefined();
		expect(result).toBeDefined();
		const { result: showResult, error: showError } = await client.showInvoice({
			invoice_code_or_invoice_id: result!.data[0]!.code,
		});
		expect(showError).toBeUndefined();
		expect(showResult).toBeDefined();
	});
});
