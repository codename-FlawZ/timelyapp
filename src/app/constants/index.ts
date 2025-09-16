// Preços dos planos

export const pricingTiers = [
	{
		title: "Business",
		monthlyPrice: "",
		buttonText: "Em Breve",
		popular: false,
		inverse: false,
		features: [
		],
	},
	{
		title: "Premium",
		monthlyPrice: 19.98,
		buttonText: "Assine Agora",
		popular: false,
		inverse: true,
		features: [
			"Tudo que tem no grátis",
			"suporte para 20 pessoas",
			"Chave de API para integração",
			"Estatísticas de até 28 meses",
			"Estatísticas mais avançadas",
		],
	},
	{
		title: "Grátis",
		monthlyPrice: 0,
		buttonText: "Começe agora de graça",
		popular: true,
		inverse: false,
		features: [
			"Suporte a equipes de até 5 pessoas",
			"Calendário com dashboard",
			"Número de agendamentos no mês",
			"Estatísticas dos ultimos 3 meses",
			"Solicitações concluídas",
		],
	},
];