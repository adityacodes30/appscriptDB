eval(createTable.gs);
eval(addRows.gs);

var doc = SpreadsheetApp.getActiveSpreadsheet();
var sheet = doc.getSheetByName("default");
var schemaDefined = false

function doPost(e) {
  var data = JSON.parse(e.postData.contents);
  var tableName = data.tableName
  var action = data.action

  if (action==="createTable")
  {
    createTable(data)
  }
  
  if (action === "addRows")
  {
    addRows(data)
  }

}