var doc = SpreadsheetApp.getActiveSpreadsheet();
var sheet = doc.getSheetByName("default");

function doPost(e) {
  var data = JSON.parse(e.postData.contents);
  
  if (data && data.name && data.email && data.phone) {
    sheet.appendRow([data.name, data.email, data.phone]);
    return ContentService.createTextOutput("Post success");
  } else {
    Logger.log("Invalid request");
    return ContentService.createTextOutput("Invalid request");
  }
}
