// TODO webhook body type
export type WebhookBody = {};

export type VerifyWebhookSuccess = {
	body: WebhookBody;
	isVerified: boolean;
};
export type VerifyErrorReason = "NO_SIGNATURE" | "INVALID_SIGNATURE";
export type VerifyWebhookError = {
	isVerified: boolean;
	error: VerifyErrorReason;
};
export type VerifyWebhookResult = VerifyWebhookSuccess | VerifyWebhookError;
