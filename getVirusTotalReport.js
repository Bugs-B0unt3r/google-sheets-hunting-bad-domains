function getVirusTotalReport(domain) {
  var apiKey = "YOUR_VIRUSTOTAL_API_KEY";  // Reemplaza con tu API Key de VirusTotal
  var url = "https://www.virustotal.com/vtapi/v2/domain/report?apikey=" + apiKey + "&domain=" + domain;

  try {
    var response = UrlFetchApp.fetch(url);
    var result = JSON.parse(response.getContentText());

    var maliciousURLs = result.detected_urls ? result.detected_urls.length : 0;
    var undetectedURLs = result.undetected_urls ? result.undetected_urls.length : 0;

    return "Malicious URLs: " + maliciousURLs + ", Undetected URLs: " + undetectedURLs;
  } catch (e) {
    return "Error: " + e.message;
  }
}
