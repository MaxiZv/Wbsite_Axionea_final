#!/bin/bash

# Simple cURL script to test the Firecrawl Scraping API
# Make sure to replace your token if different.

curl -X POST 'https://api.firecrawl.dev/v2/scrape' \
  -H 'Authorization: Bearer fc-bcc62a8389ff447db7973ef5d5adc2f2' \
  -H 'Content-Type: application/json' \
  -d '{
    "url": "firecrawl.dev"
  }'
