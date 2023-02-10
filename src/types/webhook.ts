import { WebhookChargeBody } from "./webhook.charge";
import { WebhookInvoiceBody } from "./webhook.invoice";

export type VerifyWebhookResult = {
	isVerified: boolean;
	typedBody?: WebhookBody;
	error?: "NO_SIGNATURE" | "INVALID_SIGNATURE";
};

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

export type WebhookBody = WebhookInvoiceBody | WebhookChargeBody;
