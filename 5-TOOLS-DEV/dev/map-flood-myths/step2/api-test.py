import requests

# Replace with your actual API key
API_KEY = ""
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
            print(f"Address: {address}")
            print(f"Latitude: {lat}, Longitude: {lng}")
            print(f'Data type of coords: {type(lat)}')
            return lat, lng
        else:
            print(f"Error: {result['status']}")
            return None
    else:
        print(f"HTTP Error: {response.status_code}")
        return None

if __name__ == "__main__":
    # Replace with any address you want to geocode
    address = "Istanbul, Turkey, Europe"
    geocode_address(address)
