# AppscriptDB

This project is an Appscript that provides a basic database functionality using Google Sheets. It can be particularly useful in hackathons or similar events where you want to focus more on your idea rather than spending time on setting up a database.

## Current Features

- Create Table
- Add Rows

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

