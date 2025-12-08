import type { INodeProperties } from 'n8n-workflow';
import { inboxSelect } from '../Parsio/shared/descriptions';

export const triggerProperties: INodeProperties[] = [
	{
		...inboxSelect,
		description: 'Select the inbox to receive webhook events from',
	},
	// {
	// 	displayName: 'Webhook Secret (Optional)',
	// 	name: 'webhookSecret',
	// 	type: 'string',
	// 	typeOptions: {
	// 		password: true,
	// 	},
	// 	default: '',
	// 	description:
	// 		'Optional secret token to secure your webhook. If provided, Parsio will include this secret in the X-Webhook-Secret header of all webhook requests. Use this to verify that requests are coming from Parsio and not from unauthorized sources.',
	// },
];
