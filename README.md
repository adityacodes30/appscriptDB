# AppscriptDB

This project is an Appscript that provides a basic database functionality using Google Sheets. It can be particularly useful in hackathons or similar events where you want to focus more on your idea rather than spending time on setting up a database.

## Current Features

- Create Table
- Add Rows

[<img src="https://run.pstmn.io/button.svg" alt="Run In Postman" style="width: 128px; height: 32px;">](https://god.gw.postman.com/run-collection/31980013-67a4199a-d1d6-4dd2-b807-7a9a30086cf4?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D31980013-67a4199a-d1d6-4dd2-b807-7a9a30086cf4%26entityType%3Dcollection%26workspaceId%3D5bbf4e11-4fa3-45d5-97d0-9bcdb2ab6931)

These functionalities are currently implemented. Other features are a work in progress.

## Goal

The ultimate goal of this project is to create a full-fledged database with CRUD operations, constraints, and everything you would expect from a traditional database.

## Usage

The project (for now) consists of two main functions: `createTable` and `addRows`.
You can copy paste code into your AppScript of your Google Sheet, click deploy, grant permissions and you're all set

### createTable `POST`

This function creates a new table. The post body should include the `tableName` and `headers` (which should be an array).

```
{
    "action": "createTable"
    "tableName": "Name of The table",
    "headers": [], // Array of column headers
}
```

### addRows `POST`

This function adds rows to a specified table. The content should be an array of arrays.

```
{
    "action": "addRows"
    "tableName": "Name of The table",
    "content": [ [ ] ], // Array of arrays of data
}
```

## Code Structure

The main code is in the `.gs` file which calls the `createTable.gs` and `addRows.gs` files as needed.

## Contributing

Contributions are welcome and encouraged. If you have any ideas or feature requests, feel free to open an issue or submit a pull request. Please open a issue if you have any doubts

