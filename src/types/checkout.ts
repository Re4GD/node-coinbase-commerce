import { CurrencyPrice, RequestedInfo } from "./common";

export interface Checkout {
	brand_color: string;
	brand_logo_url: string;
	coinbase_managed_merchant: boolean;
	description: string;
	extended_description: string;
	id: string;
	local_price?: CurrencyPrice;
	logo_url: string;
	max_contribution_amount?: CurrencyPrice;
	name: string;
	organization_name: string;
	pricing_type: "fixed_price" | "no_price";
	requested_info: RequestedInfo[];
	resource: "checkout";
	suggested_amounts?: CurrencyPrice[];
}
