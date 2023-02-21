import { CurrencyPrice } from "./common";
import { EventType } from "./webhook";

export interface WebhookChargeBody {
	attempt_number: number;
	event: Event;
	id: string;
	scheduled_for: string;
}

interface Event {
	api_version: string;
	created_at: string;
	data: ChargeData;
	id: string;
	resource: string;
	type: EventType;
}

interface ChargeData {
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
	confirmed_at: string;
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

interface Timeline {
	time: string;
	status: string;
	context?: string;
	payment?: Payment2;
}

interface Payment2 {
	value: CurrencyPrice;
	network: string;
	transaction_id: string;
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
	local?: any;
	crypto: CurrencyPrice;
}

interface Block {
	hash: string;
	height: number;
	confirmations: number;
	confirmations_required: number;
}

interface Net {
	local: CurrencyPrice;
	crypto: CurrencyPrice;
}

interface Invoice {
	id: string;
	code: string;
}

interface Localexchangerates {
	"USDT-USDT": string;
}

interface Paymentthreshold {
	overpayment_absolute_threshold: CurrencyPrice;
	underpayment_absolute_threshold: CurrencyPrice;
}

interface Exchangerates {
	"USDT-USD": string;
}

interface Addresses {
	tether: string;
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
	local: CurrencyPrice;
	tether: CurrencyPrice;
}
