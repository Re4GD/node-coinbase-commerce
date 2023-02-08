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
