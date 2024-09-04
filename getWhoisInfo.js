function getWhoisInfo(domain) {
  var apiKey = "YOUR_JSONWHOISAPI_KEY";  // Reemplaza con tu API Key de JSONWhoisAPI
  var url = "https://jsonwhoisapi.com/api/v1/whois?identifier=" + domain;

  var options = {
    "method": "get",
    "headers": {
      "Authorization": "Token " + apiKey,
      "muteHttpExceptions": true
    }
  };

  try {
    var response = UrlFetchApp.fetch(url, options);
    var result = JSON.parse(response.getContentText());

    Logger.log(result);

    return JSON.stringify(result);  // Devuelve la respuesta completa para inspeccionarla
  } catch (e) {
    return "Error: " + e.message;
  }
}
