import type {
	IAuthenticateGeneric,
	Icon,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class ParsioApi implements ICredentialType {
	name = 'parsioApi';
	displayName = 'Parsio API';
	icon: Icon = 'file:../icons/parsio.svg';
	documentationUrl =
		'https://help.parsio.io/data-export-integrations/n8n-integration#authentication';

	properties: INodeProperties[] = [
		{
			displayName: 'Parsio API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			required: true,
			default: '',
			hint: 'Get your API key from your <a href="https://app.parsio.io/account" target="_blank">Parsio account settings</a>',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				'X-API-Key': '={{$credentials?.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://api.parsio.io',
			url: '/users/me',
			method: 'GET',
		},
	};
}
