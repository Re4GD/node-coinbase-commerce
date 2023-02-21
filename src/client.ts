import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import {
	CBResponse,
	CBResponseWithPagination,
	Checkout,
	CreateCheckoutParams,
	CreateInvoiceParams,
	DeleteCheckoutParams,
	Invoice,
	ResolveInvoiceParams,
	Result,
	ShowCheckoutParams,
	ShowEventParams,
	ShowInvoiceParams,
	UpdateCheckoutParams,
	VoidInvoiceParams,
} from "./types";

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

	public async listCheckouts(): Promise<
		Result<CBResponseWithPagination<Checkout[]>>
	> {
		try {
			const { data } = await this.axiosInstance.get(
				"https://api.commerce.coinbase.com/checkouts",
			);
			return { result: data };
		} catch (error) {
			return { error: error };
		}
	}

	public async createCheckout(
		params: CreateCheckoutParams,
	): Promise<Result<CBResponse<Checkout>>> {
		try {
			const { data } = await this.axiosInstance.post(
				"https://api.commerce.coinbase.com/checkouts",
				params,
			);
			return { result: data };
		} catch (error) {
			return { error: error };
		}
	}

	public async showCheckout(
		params: ShowCheckoutParams,
	): Promise<Result<CBResponseWithPagination<Checkout>>> {
		try {
			const { data } = await this.axiosInstance.get(
				`https://api.commerce.coinbase.com/checkouts/${params.checkout_id}`,
			);
			return { result: data };
		} catch (error) {
			return { error: error };
		}
	}

	public async updateCheckout(
		params: UpdateCheckoutParams,
	): Promise<Result<CBResponse<Checkout>>> {
		try {
			const { data } = await this.axiosInstance.put(
				`https://api.commerce.coinbase.com/checkouts/${params.checkout_id}`,
			);
			return { result: data };
		} catch (error) {
			return { error: error };
		}
	}

	public async deleteCheckout(
		params: DeleteCheckoutParams,
	): Promise<Result<CBResponse>> {
		try {
			const { data } = await this.axiosInstance.delete(
				`https://api.commerce.coinbase.com/checkouts/${params.checkout_id}`,
			);
			return { result: data };
		} catch (error) {
			return { error: error };
		}
	}

	public async listInvoices(): Promise<
		Result<CBResponseWithPagination<Invoice[]>>
	> {
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

	// TODO any type
	public async listEvents(): Promise<Result<CBResponseWithPagination<any[]>>> {
		try {
			const { data } = await this.axiosInstance.get(
				"https://api.commerce.coinbase.com/events",
			);
			return { result: data };
		} catch (error) {
			return { error: error };
		}
	}

	// TODO any type
	public async showEvent(
		params: ShowEventParams,
	): Promise<Result<CBResponse<any>>> {
		try {
			const { data } = await this.axiosInstance.get(
				`https://api.commerce.coinbase.com/events/${params.event_id}`,
			);
			return { result: data };
		} catch (error) {
			return { error: error };
		}
	}
}
