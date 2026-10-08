using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Portfolio.Models;

public record Project(string Title, string Description, string[] Tech, string? GitHub, string? LiveUrl);
public record Role(string Title, string Period, string[] Points);
public record Company(string Name, string[] Tech, Role[] Roles);
public record Education(string Title, string? Place, string Period, string? Score);
public record Achievement(string Title, string Description);
public record Profile(
	string Bio,
	Education[] Education,
	Dictionary<string, string[]> Skills,
	string[] SoftSkills,
	string[] Languages,
	Achievement[] Achievements);
public record GitHubRepo(
	string Name, string? Description, string? Language,
	[property: JsonPropertyName("html_url")] string HtmlUrl,
	[property: JsonPropertyName("stargazers_count")] int Stars,
	bool Fork);

public class ContactForm
{
	[Required] public string Name { get; set; } = "";
	[Required, EmailAddress] public string Email { get; set; } = "";
	[Required, MinLength(10, ErrorMessage = "Please write at least 10 characters.")]
	public string Message { get; set; } = "";
}
public record Card(string Icon, string Title, string Text);
public record CodeLine(string Key, string Value);
public record SiteConfig(
	string Name, string ShortName, string JobTitle, string Company, string Status, string Intro,
	string[] TypingWords, string CareerStart, int FeaturedCount,
	string Email, string GitHubUser, string LinkedIn, string Web3FormsKey, string FooterText,
	string[] Stack, CodeLine[] Code, Card[] WhatIDo);