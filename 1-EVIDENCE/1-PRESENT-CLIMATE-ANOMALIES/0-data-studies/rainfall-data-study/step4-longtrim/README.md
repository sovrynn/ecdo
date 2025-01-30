I understand this to be my final work on plotting rainfall; a successful one, where I filtered the data down even further than I did in the first attempt (step2).

There are 2 steps in here - filtering the data and then plotting/performing regression on it.

# script trim.py

**Here's a step-by-step explanation of what this script does:**

1. **Identify Folders**  
   - It looks in the current directory (`.`) for all folders whose names end with "`-reduced`".

2. **Create Output Folders**  
   - For each folder named "`A-reduced`," it extracts the prefix (everything before "`-reduced`") and creates a new folder named "`A-longtrim`" if it does not already exist.

3. **Locate and Process CSV Files**  
   - Inside each "`-reduced`" folder, the script finds all `*.csv` files.
   - For each CSV file, it attempts to:
     1. Read the file into a Pandas DataFrame.
     2. Ensure the required columns (`DATE` and `PRCP`) are present.
     3. Convert the `DATE` column to an integer.
     4. **Filter rows** so that only those with `DATE` between `1950` and `2020` remain.
     5. **Check year coverage:** Verify that for every year from `1950` to `2020`, there is at least one row where `PRCP` is not zero. If not, the file is skipped.
     6. Sort the resulting data by `DATE`.
     7. Create a new column, `MULT`, which is:
        - `PRCP` in the current row divided by `PRCP` in the *previous* row.
        - For the first row, `MULT` is set to `1`.
     8. **Save** this updated data to the "`-longtrim`" folder corresponding to the original folder.

4. **Progress and Summary**  
   - The script maintains a counter of how many CSV files were successfully processed and prints incremental updates.
   - After processing all files in all matching folders, it prints the total number of files processed.

In essence, the script **filters and transforms** CSV files from each "`-reduced`" folder by:
- Restricting the date range.
- Enforcing a requirement that every year in that range must have a non-zero precipitation record.
- Adding a `MULT` (multiplier) column indicating the ratio of precipitation to the previous year’s precipitation.
- Saving the results into corresponding "`-longtrim`" folders.

# script trimmed-folder-cumulative.py

**Summary of What the Script Does**

1. **Takes a Directory Argument**
   - The script expects one command-line argument: a **relative path** to a directory containing CSV files.
   - It checks if the directory exists; if not, it exits with an error message.

2. **Finds All CSV Files**
   - It searches the provided directory for all files with the `.csv` extension.
   - If none are found, it exits with an error message.

3. **Initializes Data Structures**
   - Creates a dictionary (`mult_values`) keyed by years from 2000 to 2023, each associated with an empty list.
   - These lists will store `MULT` column values for the corresponding year.

4. **Processes Each CSV File**
   - Uses a progress bar (`tqdm`) to give feedback while processing each file.
   - Reads the file into a Pandas DataFrame.
   - Checks for the presence of `DATE` and `MULT` columns—if they’re missing, the file is skipped.
   - Converts the `DATE` column to an integer type, handling non-numeric values by dropping them (along with any rows missing `MULT` values).

5. **Collects MULT Values by Year**
   - For every year from 2000 to 2023, the script looks for rows in the DataFrame where `DATE` equals that year.
   - It appends any `MULT` values from those rows to the corresponding year’s list in the `mult_values` dictionary.

6. **Computes Median and Average**
   - After processing all CSV files, the script iterates through each year in the dictionary.
   - For the collected `MULT` values in each year’s list:
     - Calculates the **median** (`np.median`).
     - Calculates the **average** (`np.mean`).
   - Prints both values in a formatted table. If there were no values for a given year, it indicates “No data.”

**In short, this script reads all CSV files in a specified directory, extracts `MULT` values by year (2000–2023), and then outputs the median and average of those values for each year.**
