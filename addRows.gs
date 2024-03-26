function addRows(data)
{
// content should be an array of arrays
var sheet = doc.getSheetByName(data.tableName);
var content = data.content
var len = content.length
// iterates over the array and adds
for(let i=0;i<len;i++)
{
sheet.appendRow(content[i])
}
return ContentService.createTextOutput("Post success");
}
