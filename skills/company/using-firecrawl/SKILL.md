---
name: using-firecrawl
description: "Use when you need to scrape pages to clean markdown, search and scrape top results, crawl an entire website, or map an entire domain using Firecrawl."
---

# Firecrawl Skill

Master guide for using Firecrawl to extract web data as clean markdown, crawling sites, and mapping domains. 

---

## Quick Reference

| Task | Guide / Example |
|---|---|
| Configure Firecrawl MCP Server | [guides/MCP_SETUP.md](guides/MCP_SETUP.md) |
| API Scrape Example (cURL) | [examples/api-scrape.sh](examples/api-scrape.sh) |
| API Scrape Example (Python) | [examples/python-scrape.py](examples/python-scrape.py) |
| Firecrawl CLI Initialization | [examples/cli-init.sh](examples/cli-init.sh) |

---

## Primary Capabilities

With Firecrawl and its MCP integration, your AI agent can now natively:
1. **Scrape a page**: Extract content into clean Markdown.
2. **Search and scrape**: Find the top results for a query and scrape them.
3. **Crawl a website**: Navigate through all subpages of a given URL.
4. **Map a domain**: Discover all URLs belonging to a specific domain.

## Workflow

1. Configure the MCP as described in `MCP_SETUP.md` if you want AI agents to use Firecrawl natively.
2. Use the CLI (`firecrawl-cli`) for setting up standalone app integrations.
3. Use the direct REST API for manual server-side scraping when needed.
