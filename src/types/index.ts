export * from "./charge";
export * from "./checkout";
export * from "./client.charge";
export * from "./client.checkout";
export * from "./client.event";
export * from "./client.invoice";
export * from "./common";
export * from "./event";
export * from "./invoice";
export * from "./webhook";
export * from "./webhook.charge";
export * from "./webhook.invoice";

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
