using Microsoft.JSInterop;

namespace Portfolio.Services;

public class ThemeService(IJSRuntime js)
{
	public string Current { get; private set; } = "dark";
	public event Action? Changed;

	public async Task InitAsync()
	{
		Current = await js.InvokeAsync<string>("portfolio.getTheme");
		Changed?.Invoke();
	}

	public async Task ToggleAsync()
	{
		Current = await js.InvokeAsync<string>("portfolio.toggleTheme");
		Changed?.Invoke();
	}
}