import { CurrencyPrice } from "./common";

export type CreateInvoiceParams = {
	business_name: string;
	customer_email: string;
	customer_name: string;
	memo: string;
	local_price: CurrencyPrice;
};

export type ShowInvoiceParams = {
	invoice_code_or_invoice_id: string;
};

export type VoidInvoiceParams = {
	invoice_code_or_invoice_id: string;
};

export type ResolveInvoiceParams = {
	invoice_code_or_invoice_id: string;
};
