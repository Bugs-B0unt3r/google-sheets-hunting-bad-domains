function getPwnedInfo(domain) {
  var url = "https://haveibeenpwned.com/api/v2/breaches?domain=" + domain;

  try {
    var response = UrlFetchApp.fetch(url);
    var result = JSON.parse(response.getContentText());

    if (result.length > 0) {
      var breachNames = result.map(function(breach) {
        return breach.Name;
      }).join(", ");
      return "Breached in: " + breachNames;
    } else {
      return "No breaches found";
    }
  } catch (e) {
    return "Error: " + e.message;
  }
}
