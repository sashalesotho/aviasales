class ApiService {
	apiBase = 'https://front-test.beta.aviasales.ru/'

	async getSearchId() {
		const url = new URL(`${this.apiBase}search`);
		const json = await fetch(url).then((res) => {
			if (!res.ok) {
				throw new Error(`error fetch URL ${`${this.apiBase}search`}, response status ${res.status}`);
			}
			return res.json();
		});
		return json.searchId;
	}
	
	async getTickets(searchId) {
		const url = new URL(`${this.apiBase}tickets`);
		url.searchParams.set('searchId', searchId);
		try {
			const json = await fetch(url).then((res) => {
				if (!res.ok) {
					throw new Error(`error fetch URL ${url}, response status ${res.status}`);
				}
				return res.json();
			});
			return json;
		} catch {
			return {
				tickets: [],
			};
		}
	}
}

const apiService = new ApiService();

export default apiService;
