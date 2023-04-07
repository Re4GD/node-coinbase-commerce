export type CreateChargeParams = {
	name: string;
	description: string;
	pricing_type: string;
	local_price: {
		amount: number;
		currency: string;
	};
	metadata: {
		customer_id: string;
		customer_name: string;
	};
	redirect_url: string;
	cancel_url: string;
};

export type ShowChargeParams = {
	charge_code_or_charge_id: string;
};

export type CancelChargeParams = {
	charge_code_or_charge_id: string;
};

export type ResolveChargeParams = {
	charge_code_or_charge_id: string;
};
