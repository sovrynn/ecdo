function extractHyperlinksAndInsertColumn() {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Insert a new column after column A
    sheet.insertColumnAfter(1); // Insert a column after the first column (A)
    
    // Define the range for column A (skipping the header row)
    const range = sheet.getRange(2, 1, sheet.getLastRow() - 1, 1); // Skip the first row (headers)
    const values = range.getRichTextValues(); // Get rich text values (including embedded links)
    const links = [];
    
    // Loop through each cell in column A
    for (let i = 0; i < values.length; i++) {
        const richText = values[i][0];
        if (richText) {
            const link = richText.getLinkUrl(); // Extract embedded hyperlink
            links.push([link || ""]); // Add to array, empty if no link
        } else {
            links.push([""]); // No link, add empty
        }
    }
    
    // Write the extracted links to the new column (now column B)
    const outputRange = sheet.getRange(2, 2, links.length, 1); // Start in the new column B, skip the first row
    outputRange.setValues(links);

    // Optional: Add a header for the new column
    sheet.getRange(1, 2).setValue("Extracted Links");
}
