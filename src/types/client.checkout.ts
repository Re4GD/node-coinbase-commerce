import {
	CurrencyPrice,
	FixedPriceRequestedInfo,
	NoPriceRequestedInfo,
} from "./common";

export type CreateCheckoutParams =
	| CreateFixedPriceCheckoutParams
	| CreateNoPriceCheckoutParams;

export type CreateFixedPriceCheckoutParams = {
	name: string;
	description: string;
	requested_info: FixedPriceRequestedInfo[];
	pricing_type: "fixed_price";
	local_price: CurrencyPrice;
};

export type CreateNoPriceCheckoutParams = {
	name: string;
	description: string;
	requested_info: NoPriceRequestedInfo[];
	pricing_type: "no_price";
	local_price: CurrencyPrice;
};

export type ShowCheckoutParams = {
	checkout_id: string;
};

export type UpdateCheckoutParams =
	| UpdateFixedPriceCheckoutParams
	| UpdateNoPriceCheckoutParams;

export type UpdateFixedPriceCheckoutParams = {
	checkout_id: string;
	name: string;
	description: string;
	requested_info: FixedPriceRequestedInfo[];
	pricing_type: "fixed_price";
	local_price: CurrencyPrice;
};

export type UpdateNoPriceCheckoutParams = {
	checkout_id: string;
	name: string;
	description: string;
	requested_info: NoPriceRequestedInfo[];
	pricing_type: "no_price";
};

export type DeleteCheckoutParams = {
	checkout_id: string;
};
