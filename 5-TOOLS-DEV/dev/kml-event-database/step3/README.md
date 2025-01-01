Given the nearest present day location, use Google Geocoding API to get a lat/lon

# Prompt

Modify this script so that for each text file in the input directory it simply calls the geocode address function on the conetnt of it, gets the lat lon, and writes the lat lon (space separated) to an output file with the same name in output directory y.

import sys
import os
import requests

# Replace with your actual API key
with open("apikey.txt", "r", encoding="utf-8") as file:
    API_KEY = file.read().strip()

GEOCODING_API_URL = "https://maps.googleapis.com/maps/api/geocode/json"

def geocode_address(address):
    """Geocode an address using Google Geocoding API."""
    params = {
        "address": address,
        "key": API_KEY
    }

    response = requests.get(GEOCODING_API_URL, params=params)

    if response.status_code == 200:
        result = response.json()
        if result['status'] == "OK":
            # Extract latitude and longitude
            location = result['results'][0]['geometry']['location']
            lat, lng = location['lat'], location['lng']
            # print(f"Address: {address}")
            # print(f"Latitude: {lat}, Longitude: {lng}")
            return lat, lng
        else:
            print(f"Error: {result['status']}")
            return None
    else:
        print(f"HTTP Error: {response.status_code}")
        return None

def main():
    # Ensure we have two arguments: X and Y
    if len(sys.argv) != 3:
        print("Usage: python script.py <X> <Y>")
        sys.exit(1)

    X = sys.argv[1]
    Y = sys.argv[2]

    # Ensure Y directory exists, create if not
    if not os.path.exists(Y):
        os.makedirs(Y)

    # Scan for all .txt files in X
    for filename in os.listdir(X):
        if filename.endswith(".txt"):
            input_path = os.path.join(X, filename)
            output_path = os.path.join(Y, filename)

            # Process the file
            with open(input_path, 'r', encoding='utf-8') as infile, \
                 open(output_path, 'w', encoding='utf-8') as outfile:
                
                for line in infile:
                    line = line.strip()
                    # Each line should start with "- " for markdown lists
                    # Strip that if present
                    if line.startswith("- "):
                        address = line[2:].strip()  # Remove the "- " prefix
                        lat, lng = geocode_address(address)
                        print(f'Processed address: {address}')
                        outfile.write(f"{lat},{lng}\n")

            # Print progress update after file is processed
            print(f"Finished processing {filename}")

if __name__ == "__main__":
    main()