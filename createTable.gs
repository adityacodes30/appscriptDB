function createTable(data)
{
// post body should have tableName , headers 
const spreadsheet = doc.insertSheet(data.tableName)
var sheet = doc.getSheetByName(data.tableName);
// headers should be an array 
var headers = data.headers
sheet.appendRow(headers)
shemaDefined = true
return 0;
}


