// @ts-nocheck
import Cors from "micro-cors";
import type { NextApiRequest, NextApiResponse } from "next";
import { verifyWebhook } from "node-coinbase-commerce";
import { env } from "src/env/server.mjs";

const cors = Cors({
	allowMethods: ["POST", "HEAD"],
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const { error, typedBody } = verifyWebhook(
		req.body,
		req.headers["x-cc-webhook-signature"],
		env.CB_WEBHOOK_SHARED_SECRET,
	);
	if (!typedBody || error) {
		return res.status(400).end();
	}

	const eventType = typedBody.event.type;

	// Charge
	if (eventType.includes("charge")) {
		const invoiceCode: string | undefined = typedBody.event.data.invoice?.code;

		// Invoice Charge
		if (invoiceCode) {
			switch (eventType) {
				case "charge:created":
				case "charge:failed":
				case "charge:delayed":
				case "charge:pending":
				case "charge:confirmed":
				case "charge:resolved": {
					break;
				}
				default:
					break;
			}
			return res.status(200).end();
		}

		// Checkout Charge
		switch (eventType) {
			case "charge:created":
			case "charge:failed":
			case "charge:delayed":
			case "charge:pending":
			case "charge:confirmed":
			case "charge:resolved": {
				break;
			}
			default:
				break;
		}
		return res.status(200).end();
	}

	// Invoice
	if (eventType.includes("invoice")) {
		switch (eventType) {
			case "invoice:created":
			case "invoice:paid":
			case "invoice:unresolved":
			case "invoice:payment_pending":
			case "invoice:viewed":
			case "invoice:voided": {
				break;
			}
			default:
				break;
		}
		return res.status(200).end();
	}

	return res.status(400).end();
};

export default cors(handler as any);
