import crypto from "crypto";
import { VerifyWebhookResult, WebhookBody } from "./types/webhook";

export const verifyWebhook = (
	rawBody: unknown,
	signature: string | string[] | undefined,
	sharedSecret: string,
): VerifyWebhookResult => {
	if (!signature) {
		return { isVerified: false, rawBody: rawBody, error: "NO_SIGNATURE" };
	}
	const coinBaseSignature = crypto
		.createHmac("sha256", sharedSecret)
		.update(JSON.stringify(rawBody))
		.digest("hex");
	if (signature !== coinBaseSignature) {
		return { isVerified: false, rawBody: rawBody, error: "INVALID_SIGNATURE" };
	}
	return {
		isVerified: true,
		rawBody: rawBody,
		typedBody: rawBody as WebhookBody,
	};
};
