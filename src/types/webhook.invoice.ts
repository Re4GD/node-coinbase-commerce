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
	local_price: Local;
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
	payments: any[];
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

interface Paymentthreshold {
	overpayment_absolute_threshold: Local;
	underpayment_absolute_threshold: Local;
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

// TODO more metadata phone address etc
interface Metadata {
	name: string;
	email: string;
}

interface Pricing {
	local: Local;
	tether: Local;
}

interface Local {
	amount: string;
	currency: string;
}

interface Invoice {
	id: string;
	code: string;
}
