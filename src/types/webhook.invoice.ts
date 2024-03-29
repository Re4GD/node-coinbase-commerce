import { EventType } from "./webhook";

export interface WebhookInvoiceBody {
	attempt_number: number;
	event: Event;
	id: string;
	scheduled_for: string;
}

interface Event {
	api_version: string;
	created_at: string;
	data: InvoiceData;
	id: string;
	resource: string;
	type: EventType;
}

interface InvoiceData {
	id: string;
	code: string;
	memo: string;
	charge: Charge;
	status: string;
	resource: string;
	created_at: string;
	hosted_url: string;
	updated_at: string;
	local_price: {
		amount: number;
		currency: string;
	};
	business_name: string;
	customer_name: string;
	customer_email: string;
}

interface Charge {
	id: string;
	code: string;
	utxo: boolean;
	invoice: Invoice;
	pricing: Pricing;
	fee_rate: number;
	logo_url: string;
	metadata: Metadata;
	payments: Payment[];
	resource: string;
	timeline: Timeline[];
	addresses: Addresses;
	pwcb_only: boolean;
	created_at: string;
	expires_at: string;
	hosted_url: string;
	brand_color: string;
	fees_settled: boolean;
	pricing_type: string;
	support_email: string;
	brand_logo_url: string;
	exchange_rates: Exchangerates;
	offchain_eligible: boolean;
	organization_name: string;
	payment_threshold: Paymentthreshold;
	local_exchange_rates: Localexchangerates;
	coinbase_managed_merchant: boolean;
}

interface Localexchangerates {
	"USDT-USDT": string;
}

interface Payment {
	net: Net;
	block: Block;
	value: Net;
	status: string;
	network: string;
	deposited: Deposited;
	payment_id: string;
	detected_at: string;
	transaction_id: string;
	coinbase_processing_fee: Net;
}

interface Deposited {
	amount: Amount;
	status: string;
	destination: string;
	exchange_rate?: any;
	autoconversion_status: string;
	autoconversion_enabled: boolean;
}

interface Amount {
	net: Net2;
	gross: Net2;
	coinbase_fee: Net2;
}

interface Net2 {
	local?: {
		amount: string;
		currency: string;
	};
	crypto: {
		amount: string;
		currency: string;
	};
}

interface Block {
	hash: string;
	height: number;
	confirmations: number;
	confirmations_required: number;
}

interface Net {
	local: {
		amount: string;
		currency: string;
	};
	crypto: {
		amount: string;
		currency: string;
	};
}

interface Paymentthreshold {
	overpayment_absolute_threshold: {
		amount: string;
		currency: string;
	};
	underpayment_absolute_threshold: {
		amount: string;
		currency: string;
	};
}

interface Exchangerates {
	"USDT-USD": string;
}

interface Addresses {
	tether: string;
}

interface Timeline {
	time: string;
	status: string;
	context?: string;
}

interface Metadata {
	name?: string;
	email?: string;
	address?: string;
	phone?: string;
	employer?: string;
	occupation?: string;
}

interface Pricing {
	local: {
		amount: string;
		currency: string;
	};
	tether: {
		amount: string;
		currency: string;
	};
}

interface Invoice {
	id: string;
	code: string;
}
