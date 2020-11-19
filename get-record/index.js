
require('dotenv').config()

const Airtable = require('airtable');
const base = new Airtable({
    apiKey: process.env.AIRTABLE_API_KEY
}).base(process.env.AIRTABLE_BASE_ID);

const getFirstByFilter = (tableName, filter, fields = [], sort = []) => {
    return base(tableName).select({
        maxRecords: 1,
        filterByFormula: filter,
        fields: fields,
        sort: sort
    }).firstPage();
}

const getRecord = async (table_name, field_name, field_value) => {
    const filter = `IF(TRIM(LOWER(${field_name})) = TRIM(LOWER("${field_value}")), 1, 0)`;
    return await getFirstByFilter(table_name, filter);
}

getRecord("Table 1", "record_id", "recdp31MWmoLD8NO1").then(result => {
    console.log(result);
});

