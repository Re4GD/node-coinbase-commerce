import { LocalPrice } from "./common";

export interface Invoice {
	id: string;
	resource: string;
	code: string;
	status: string;
	business_name: string;
	customer_email: string;
	customer_name: string;
	memo: string;
	local_price: LocalPrice;
	hosted_url: string;
	created_at: string;
	updated_at: string;
	charge: any;
}
