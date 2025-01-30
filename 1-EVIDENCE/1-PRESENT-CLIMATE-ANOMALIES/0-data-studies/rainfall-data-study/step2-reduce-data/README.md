I understand this to be my first attempt at filtering/reducing the data down from its extremely granular state with lots of columns, to a simplified state with yearly granularity.

Successful but I expanded on it

# Script reduce-yearly.py

## Script Overview

### 1. Input and Output Directories
- The script expects two command-line arguments:
  1. `input_directory` (where the original CSV files are located)
  2. `output_directory` (where the processed files will be saved)

### 2. Statistics Tracking
- It initializes counters to track:
  - **Total files** found in the input directory
  - **Processed files** (how many were successfully handled)
  - **Skipped files**, broken down by reasons:
    - Missing required columns (`DATE` or `PRCP`)
    - Earliest date is >= 2001
    - Latest date is <= 2019
    - Other exceptions (generic errors during processing)

### 3. Iteration Through CSV Files
- Lists all CSV files (`*.csv`) in the specified `input_directory`.
- For each file:
  1. Attempts to **read** it into a Pandas `DataFrame`.
  2. Checks for the required columns (`DATE` and `PRCP`). If missing, the file is skipped.
  3. Converts the `DATE` column to a DateTime object, dropping rows with invalid dates.
  4. Determines the earliest and latest dates in the file:
     - If the **earliest year** is >= 2001, the file is skipped.
     - If the **latest year** is <= 2019, the file is skipped.
  5. Keeps only the relevant columns:
     - Required: `DATE`, `PRCP`
     - Optional: `TMAX`, `TMIN` (if they exist, they are retained)
  6. Adds a `Year` column by extracting the year from `DATE`.
  7. **Groups** by this `Year` column and **aggregates**:
     - `PRCP` is **summed** over each year.
     - `TMAX` and `TMIN` (if present) are **averaged**.
     - The script counts the number of rows per year and stores that in a column called `NROWS`.
  8. Resets the index, renames `Year` back to `DATE`, and reorders the columns (e.g., `[DATE, PRCP, TMAX, TMIN, NROWS]`).
  9. Saves the resulting yearly-aggregated data to the `output_directory`.

### 4. Final Statistics
- After processing all CSV files, the script prints:
  - Total number of CSV files in the input directory
  - Number of successfully processed files
  - A breakdown of skipped files by reason

# Script reduced-mega-calc.py function

**Summary of What the Script Does**

1. **Finds Relevant Folders**
   - Looks in the current directory for folders ending with `_reduced`.

2. **Processes CSV Files in Each Folder**
   - For each `_reduced` folder, identifies all `.csv` files and reads them into Pandas DataFrames.

3. **Filters and Sorts Data**
   - Only keeps rows where:
     - `DATE` is between 1973 and 2023 (inclusive).
     - `PRCP` (precipitation) is not zero.
   - Sorts the filtered rows by `DATE`.

4. **Calculates Year-to-Year Ratios**
   - For each row, if the next row has a `DATE` that is exactly one year later, calculates:
     \[
       \text{ratio} = \frac{\text{PRCP}_{(\text{next year})}}{\text{PRCP}_{(\text{current year})}}
     \]
   - Stores these ratios in a dictionary, keyed by the current year.

5. **Aggregates and Computes Statistics**
   - For each year, computes:
     - The **average** of the year’s ratios.
     - The **median** of the year’s ratios.

6. **Performs Linear Regression**
   - For the years 1973–2023 (as `x` values), it fits two linear regressions:
     - One on the average ratios.
     - One on the median ratios.
   - Computes slope, intercept, and other regression stats.

7. **Plots Results**
   - Creates a time-series plot of:
     - Average ratios vs. year.
     - Median ratios vs. year.
   - Adds two regression lines to the plot.
   - Uses a **logarithmic** scale on the y-axis.
   - Saves the figure as `output.png`.

8. **Computes Cumulative Products**
   - Calculates the overall product of average ratios and of median ratios over all years:
     \[
       \prod_{i=1973}^{2022} \text{ratio}_i
     \]
   - Prints these cumulative multipliers.

9. **Displays Regression Equations and Cumulative Multipliers**
   - Prints:
     - The exact regression equations for both average and median ratio series.
     - The cumulative products (average and median).
     - The multiplication steps (the “show the math” part).

**In short, this script reads precipitation data from multiple CSV files, calculates annual precipitation ratios for consecutive years, analyzes the results (averages, medians, and trends), and visualizes them on a logarithmic plot.**
