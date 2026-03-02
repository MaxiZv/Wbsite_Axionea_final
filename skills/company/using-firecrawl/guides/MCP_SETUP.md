# MCP Configuration for Firecrawl

To allow AI agents (like Claude Desktop, OpenCode, Codex, etc.) to use Firecrawl seamlessly, you must register it as an MCP server.

## Standard Setup (via npx)

The officially supported method to run the Firecrawl MCP is via the open-source npm package provided by Mendable. 

Add the following to your AI's configuration file (e.g., `claude_desktop_config.json`):

```json
{
  "mcpServers": {
    "firecrawl": {
      "command": "npx",
      "args": [
        "-y",
        "firecrawl-mcp"
      ],
      "env": {
        "FIRECRAWL_API_KEY": "<YOUR_FIRECRAWL_API_KEY>"
      }
    }
  }
}
```

*Don't forget to replace `<YOUR_FIRECRAWL_API_KEY>` with your actual token (e.g. `fc-bcc62a8389ff447db7973ef5d5adc2f2`).*


## Remote Setup (mcp-remote)

If you have a remote MCP proxy (similar to the `fireflies` example), you would structure it using `mcp-remote`. 
If Firecrawl officially provides a direct SSE endpoint in the future, it would look like this:

```json
{
  "mcpServers": {
    "firecrawl": {
      "command": "npx",
      "args": [
        "mcp-remote",
        "https://api.firecrawl.dev/mcp",
        "--header",
        "Authorization: Bearer <YOUR_FIRECRAWL_API_KEY>"
      ]
    }
  }
}
```

## Next steps
Once configured:
1. Restart your AI desktop agent.
2. Verify the MCP server is connected (look for the plug icon or check the logs).
3. Simply ask the agent: *"Scrape https://example.com using Firecrawl and summarize it."*
