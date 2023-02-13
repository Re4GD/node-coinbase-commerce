import { LocalPrice } from "./common";

export type CreateInvoiceParams = {
	business_name: string;
	customer_email: string;
	customer_name: string;
	memo: string;
	local_price: LocalPrice;
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

export type ShowEventParams = {
	event_id: string;
};
