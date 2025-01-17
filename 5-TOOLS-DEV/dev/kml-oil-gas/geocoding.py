import sys
import os
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
    # Ensure we have two arguments: X and Y
    if len(sys.argv) != 3:
        print("Usage: python script.py <X> <Y>")
        sys.exit(1)

    X = sys.argv[1]  # Input directory
    Y = sys.argv[2]  # Output directory

    # Ensure the output directory Y exists; create if it doesn't
    if not os.path.exists(Y):
        os.makedirs(Y)

    # Scan for all .txt files in X
    for filename in os.listdir(X):
        if filename.endswith(".txt"):
            input_path = os.path.join(X, filename)
            output_path = os.path.join(Y, filename)

            # 1) Read the entire file content as the address
            with open(input_path, "r", encoding="utf-8") as infile:
                address = infile.read().strip()

            # 2) Geocode the address
            coords = geocode_address(address)

            if coords is not None:
                lat, lng = coords
                # 3) Write "lat lon" to the output file
                with open(output_path, "w", encoding="utf-8") as outfile:
                    outfile.write(f"{lat} {lng}\n")
            else:
                # If the address couldn't be geocoded, handle as needed
                with open(output_path, "w", encoding="utf-8") as outfile:
                    outfile.write(f"Error: Could not geocode address: {address} for file {filename}\n")
                    print(f"Error: Could not geocode address: {address} for file {filename}\n")

            # 4) Print progress update
            print(f"Finished processing {filename}")

if __name__ == "__main__":
    main()
