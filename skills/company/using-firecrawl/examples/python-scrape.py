# Pre-requisite: pip install firecrawl-py
from firecrawl import Firecrawl

# Initialize the Firecrawl app with your API key
app = Firecrawl(api_key="fc-bcc62a8389ff447db7973ef5d5adc2f2")

# Scrape a website:
result = app.scrape('firecrawl.dev')

print(result)
