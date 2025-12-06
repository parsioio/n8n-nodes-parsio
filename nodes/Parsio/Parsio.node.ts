import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { userDescription } from './resources/user';
import { companyDescription } from './resources/company';

export class Parsio implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Parsio',
		name: 'parsio',
		icon: { light: 'file:parsio.svg', dark: 'file:parsio.dark.svg' },
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with the Parsio API',
		defaults: {
			name: 'Parsio',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [{ name: 'parsioApi', required: true }],
		requestDefaults: {
			baseURL: 'https://api.parsio.io',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'User',
						value: 'user',
					},
					{
						name: 'Company',
						value: 'company',
					},
				],
				default: 'user',
			},
			...userDescription,
			...companyDescription,
		],
	};
}
