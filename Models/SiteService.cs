using Portfolio.Models;
using System.Net.Http.Json;

namespace Portfolio.Services;

public class SiteService(HttpClient http)
{
	public SiteConfig C { get; private set; } = default!;

	public async Task LoadAsync()
		=> C = await http.GetFromJsonAsync<SiteConfig>("data/site.json")
			   ?? throw new InvalidOperationException("data/site.json is missing or empty");
}