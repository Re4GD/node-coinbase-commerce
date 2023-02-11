import { WebhookChargeBody } from "./webhook.charge";
import { WebhookInvoiceBody } from "./webhook.invoice";

export type WebhookBody = WebhookInvoiceBody | WebhookChargeBody;

export type VerifyWebhookResult = {
	isVerified: boolean;
	error?: "NO_SIGNATURE" | "INVALID_SIGNATURE";
	rawBody: unknown;
	typedBody?: WebhookBody;
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
