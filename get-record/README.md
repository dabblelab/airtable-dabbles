# How to get a single record from an Airtable Base

The following code shows a example of how to use the `filterByFormula` property to get a single record with a given field value.

```javascript
const getFirstByFilter = (tableName, fieldName, fieldValue) => {
    return base(tableName).select({
        maxRecords: 1,
        filterByFormula: `IF(TRIM(LOWER(${fieldName})) = TRIM(LOWER("${fieldValue}")), 1, 0)`
    }).firstPage();
}
```

> NOTE: See [index.js](./index.js) for a complete example.