import sys
import requests

# Replace with your actual API key
with open("apikey.txt", "r", encoding="utf-8") as file:
    API_KEY = file.read().strip()

GEOCODING_API_URL = "https://maps.googleapis.com/maps/api/geocode/json"

def geocode_address(address):
    """Geocode an address using the Google Geocoding API."""
    params = {
        "address": address,
        "key": API_KEY
    }

    response = requests.get(GEOCODING_API_URL, params=params)

    if response.status_code == 200:
        result = response.json()
        if result["status"] == "OK":
            # Extract latitude and longitude
            location = result["results"][0]["geometry"]["location"]
            lat, lng = location["lat"], location["lng"]
            return lat, lng
        else:
            print(f"Error from Geocoding API: {result['status']}")
            return None
    else:
        print(f"HTTP Error: {response.status_code}")
        return None

def main():
    # Ensure we have exactly one argument (the relative file path)
    if len(sys.argv) != 2:
        print("Usage: python script.py <relative_input_file>")
        sys.exit(1)

    input_file = sys.argv[1]
    output_file = "output.txt"

    # Read all lines from the input file
    try:
        with open(input_file, "r", encoding="utf-8") as infile:
            lines = infile.readlines()
    except FileNotFoundError:
        print(f"Error: File '{input_file}' not found.")
        sys.exit(1)

    # Open the output file for writing
    with open(output_file, "w", encoding="utf-8") as outfile:
        # For each line in the input file, geocode and write "lat lon" to output.txt
        for line in lines:
            address = line.strip()
            # Skip empty lines if needed
            if not address:
                outfile.write("Error: Empty address line.\n")
                continue

            coords = geocode_address(address)
            if coords is not None:
                lat, lng = coords
                outfile.write(f"{lat} {lng}\n")
            else:
                outfile.write("Error: Could not geocode address.\n")

    print(f"Finished processing. Results written to '{output_file}'.")

if __name__ == "__main__":
    main()
