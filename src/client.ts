import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { CBResponse, CBResponseWithPagination, Result } from "./types";
import {
	CreateInvoiceParams,
	ResolveInvoiceParams,
	ShowInvoiceParams,
	VoidInvoiceParams,
} from "./types/client";
import { Invoice } from "./types/invoice";

export class CoinbaseCommerceClient {
	private axiosInstance: AxiosInstance;
	private globalRequestOptions: AxiosRequestConfig;

	constructor(apiKey: string, requestOptions: AxiosRequestConfig = {}) {
		this.globalRequestOptions = {
			headers: {
				accept: "application/json",
				"X-CC-Version": "2018-03-22",
				"X-CC-Api-Key": apiKey,
				"content-type": "application/json",
			},
			...requestOptions,
		};
		this.axiosInstance = axios.create(this.globalRequestOptions);
	}

	// TODO charges
	// TODO checkout
	// TODO events

	public async listInvoices(): Promise<Result<CBResponseWithPagination<any>>> {
		try {
			const { data } = await this.axiosInstance.get(
				"https://api.commerce.coinbase.com/invoices",
			);
			return { result: data };
		} catch (error) {
			return { error: error };
		}
	}

	public async createInvoice(
		params: CreateInvoiceParams,
	): Promise<Result<CBResponse<Invoice>>> {
		try {
			const { data } = await this.axiosInstance.post(
				"https://api.commerce.coinbase.com/invoices",
				params,
			);
			return { result: data };
		} catch (error) {
			return { error: error };
		}
	}

	public async showInvoice(
		params: ShowInvoiceParams,
	): Promise<Result<CBResponseWithPagination<Invoice>>> {
		try {
			const { data } = await this.axiosInstance.get(
				`https://api.commerce.coinbase.com/invoices/${params.invoice_code_or_invoice_id}`,
			);
			return { result: data };
		} catch (error) {
			return { error: error };
		}
	}

	public async voidInvoice(
		params: VoidInvoiceParams,
	): Promise<Result<CBResponse<Invoice>>> {
		try {
			const { data } = await this.axiosInstance.put(
				`https://api.commerce.coinbase.com/invoices/${params.invoice_code_or_invoice_id}/void`,
			);
			return { result: data };
		} catch (error) {
			return { error: error };
		}
	}

	public async resolveInvoice(
		params: ResolveInvoiceParams,
	): Promise<Result<CBResponse<Invoice>>> {
		try {
			const { data } = await this.axiosInstance.put(
				`https://api.commerce.coinbase.com/invoices/${params.invoice_code_or_invoice_id}/resolve`,
			);
			return { result: data };
		} catch (error) {
			return { error: error };
		}
	}
}
