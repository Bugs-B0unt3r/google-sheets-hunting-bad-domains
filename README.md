# google-sheets-hunting-bad-domains
This project provides a set of Google Apps Scripts designed to help you identify and analyze potentially malicious domains directly from Google Sheets. By leveraging various APIs, these scripts can retrieve information such as VirusTotal reports, WHOIS data, breach information from Have I Been Pwned, and the HTTP status of a domain.

## Scripts

### 1. `getVirusTotalReport.js`
This script fetches the VirusTotal report for a given domain. It returns the number of malicious URLs associated with the domain.

- **Function**: `getVirusTotalReport(domain)`
- **Output**: A string indicating the number of malicious and undetected URLs.
- **API Key**: Replace `"YOUR_VIRUSTOTAL_API_KEY"` in the script with your VirusTotal API key.

### 2. `getWhoisInfo.js`
This script retrieves WHOIS information for a domain using the JSONWhoisAPI. It logs the entire WHOIS record and returns it as a JSON string for further analysis.

- **Function**: `getWhoisInfo(domain)`
- **Output**: A JSON string containing the WHOIS information.
- **API Key**: Replace `"YOUR_JSONWHOISAPI_KEY"` in the script with your JSONWhoisAPI key.

### 3. `getPwnedInfo.js`
This script checks if the domain has been involved in any data breaches using the Have I Been Pwned API. It returns a list of breaches where the domain was found.

- **Function**: `getPwnedInfo(domain)`
- **Output**: A string listing the breaches the domain was involved in, or a message indicating no breaches were found.

### 4. `getPageStatus.js`
This script checks the HTTP status of a domain to determine if it is active. It returns the HTTP status code and whether the page is OK or not.

- **Function**: `getPageStatus(url)`
- **Output**: A string indicating the HTTP status code and whether the page is OK.

## Setup

1. **API Keys**: Replace the placeholder API keys in each script with your own:
   - `"YOUR_VIRUSTOTAL_API_KEY"`
   - `"YOUR_JSONWHOISAPI_KEY"`

2. **Google Sheets Integration**:
   - Open Google Sheets and go to `Extensions` > `Apps Script`.
   - Copy and paste the content of the scripts into separate functions in the script editor.
   - Call the functions from your Google Sheets cells, passing the domain or URL as a parameter.

## Usage

- **VirusTotal Report**: Use `=getVirusTotalReport(A2)` where `A2` contains the domain name to get VirusTotal data.
- **WHOIS Information**: Use `=getWhoisInfo(A2)` to retrieve WHOIS information.
- **Breach Information**: Use `=getPwnedInfo(A2)` to check if the domain was involved in any breaches.
- **Page Status**: Use `=getPageStatus(A2)` to check the HTTP status of a domain.

## License

This project is licensed under the MIT License.
