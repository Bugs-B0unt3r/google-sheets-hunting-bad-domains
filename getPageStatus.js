function getPageStatus(url) {
  try {
    var response = UrlFetchApp.fetch(url, {
      'muteHttpExceptions': true  // Permite capturar respuestas con errores, como 404
    });
    var statusCode = response.getResponseCode();
    return "Status: " + statusCode + " " + (statusCode == 200 ? "OK" : "Not OK");
  } catch (e) {
    return "Error: " + e.message;
  }
}
