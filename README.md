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

### 1. Obtain API Keys
Before using the scripts, you need to obtain API keys from the following services:
- **VirusTotal**: [Get API Key](https://www.virustotal.com/gui/join-us)
- **JSONWhoisAPI**: [Get API Key](https://jsonwhoisapi.com/)
- **Have I Been Pwned**: [Get API Key](https://haveibeenpwned.com/API/v3)

### 2. Create a New Google Sheets Document
- Open [Google Sheets](https://sheets.google.com) and create a new spreadsheet.

### 3. Access Google Apps Script
- In your Google Sheets document, go to `Extensions` > `Apps Script`. This opens the Google Apps Script editor.

### 4. Create and Add Scripts
- For each of the scripts provided (`getVirusTotalReport.js`, `getWhoisInfo.js`, `getPwnedInfo.js`, `getPageStatus.js`):
  1. Create a new script file by clicking on the `+` icon next to `Files` in the Apps Script editor.
  2. Name the file appropriately (e.g., `getVirusTotalReport.js`).
  3. Copy the script code from the corresponding `.js` file and paste it into the script editor.
  4. Replace `"YOUR_VIRUSTOTAL_API_KEY"`, `"YOUR_JSONWHOISAPI_KEY"`, etc., with your actual API keys.

### 5. Save and Deploy
- After adding all the scripts, click `File` > `Save`.
- To make the scripts available in your Google Sheets, simply close the Apps Script editor. The functions will now be accessible in your spreadsheet.


## Usage

- **VirusTotal Report**: Use `=getVirusTotalReport(A2)` where `A2` contains the domain name to get VirusTotal data.
- **WHOIS Information**: Use `=getWhoisInfo(A2)` to retrieve WHOIS information.
- **Breach Information**: Use `=getPwnedInfo(A2)` to check if the domain was involved in any breaches.
- **Page Status**: Use `=getPageStatus(A2)` to check the HTTP status of a domain.

## License

This project is licensed under the MIT License.
