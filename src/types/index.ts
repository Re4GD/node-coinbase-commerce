export type Result<T> = {
	result?: T;
	error?: unknown;
};

export interface CBResponse<T = object> {
	data: T;
}

export interface CBResponseWithPagination<T = object> extends CBResponse<T> {
	pagination: Pagination;
}

interface Localprice {
	amount: string;
	currency: string;
}

export interface Invoice {
	id: string;
	resource: string;
	code: string;
	status: string;
	business_name: string;
	customer_email: string;
	customer_name: string;
	memo: string;
	local_price: Localprice;
	hosted_url: string;
	created_at: string;
	updated_at: string;
	charge: any;
}

interface Pagination {
	id: string;
	starting_after: string;
	ending_before: string;
	previous_uri: string;
	next_uri: string;
	total: number;
	yielded: number;
	limit: number;
	cursor_range: string[];
}

export type EventType =
	| "charge:created"
	| "charge:confirmed"
	| "charge:failed"
	| "charge:delayed"
	| "charge:pending"
	| "charge:resolved"
	| "invoice:created"
	| "invoice:paid"
	| "invoice:payment_pending"
	| "invoice:unresolved"
	| "invoice:viewed"
	| "invoice:voided";
