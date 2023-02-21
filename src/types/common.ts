export interface CurrencyPrice {
	amount: number;
	currency: string;
}

export type RequestedInfo =
	| "name"
	| "email"
	| "address"
	| "phone"
	| "employer"
	| "occupation";

export type FixedPriceRequestedInfo = "name" | "email" | "address" | "phone";

export type NoPriceRequestedInfo =
	| "name"
	| "email"
	| "address"
	| "phone"
	| "employer"
	| "occupation";
