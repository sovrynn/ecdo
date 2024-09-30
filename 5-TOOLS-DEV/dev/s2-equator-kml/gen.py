import math

def lat_lon_to_cartesian(lat_deg, lon_deg):
    lat = math.radians(lat_deg)
    lon = math.radians(lon_deg)
    x = math.cos(lat) * math.cos(lon)
    y = math.cos(lat) * math.sin(lon)
    z = math.sin(lat)
    return (x, y, z)

def cartesian_to_lat_lon(x, y, z):
    # Clamp z to the valid range [-1, 1] to avoid math domain errors
    z = max(-1.0, min(1.0, z))
    lat = math.degrees(math.asin(z))
    lon = math.degrees(math.atan2(y, x))
    return (lat, lon)

def interpolate_great_circle(p1, p2, num_points):
    x1, y1, z1 = lat_lon_to_cartesian(p1[0], p1[1])
    x2, y2, z2 = lat_lon_to_cartesian(p2[0], p2[1])

    # Compute the angle between the two points
    dot = x1 * x2 + y1 * y2 + z1 * z2
    # Clamp dot product to valid range to avoid math domain errors
    dot = max(-1.0, min(1.0, dot))
    omega = math.acos(dot)

    sin_omega = math.sin(omega)
    EPSILON = 1e-10  # Small value to prevent division by zero

    interpolated_points = []
    if abs(sin_omega) < EPSILON:
        # Points are the same or antipodal
        if abs(omega) < EPSILON:
            # Points are identical; return copies of the same point
            for _ in range(num_points + 1):
                interpolated_points.append(p1)
        else:
            # Points are antipodal; choose an arbitrary great circle
            # Find a vector orthogonal to the starting point
            if abs(x1) > EPSILON or abs(y1) > EPSILON:
                u_x, u_y, u_z = -y1, x1, 0
            else:
                u_x, u_y, u_z = 0, 1, 0
            # Normalize the orthogonal vector
            u_norm = math.sqrt(u_x * u_x + u_y * u_y + u_z * u_z)
            u_x /= u_norm
            u_y /= u_norm
            u_z /= u_norm
            for i in range(num_points + 1):
                t = i / num_points
                theta = math.pi * t
                x = math.cos(theta) * x1 + math.sin(theta) * u_x
                y = math.cos(theta) * y1 + math.sin(theta) * u_y
                z = math.cos(theta) * z1 + math.sin(theta) * u_z
                # Normalize the vector
                norm = math.sqrt(x * x + y * y + z * z)
                if norm < EPSILON:
                    continue  # Skip if norm is zero
                x /= norm
                y /= norm
                z /= norm
                lat, lon = cartesian_to_lat_lon(x, y, z)
                interpolated_points.append((lat, lon))
    else:
        for i in range(num_points + 1):
            t = i / num_points
            a = math.sin((1 - t) * omega) / sin_omega
            b = math.sin(t * omega) / sin_omega
            x = a * x1 + b * x2
            y = a * y1 + b * y2
            z = a * z1 + b * z2
            # Normalize the vector
            norm = math.sqrt(x * x + y * y + z * z)
            if norm < EPSILON:
                continue  # Skip if norm is zero
            x /= norm
            y /= norm
            z /= norm
            lat, lon = cartesian_to_lat_lon(x, y, z)
            interpolated_points.append((lat, lon))

    return interpolated_points

def main():
    # Parameters you can modify
    thickness = 2  # Line thickness
    color = 'ff0000ff'  # Line color in AABBGGRR format (KML color format)

    # List of points (latitude, longitude)
    points = [
        (0, 121),
        (76, 31),
        (0, -59),
        (-76, -149),
        (0, 121)
    ]

    coordinates = []
    num_points_per_segment = 100  # Number of interpolated points per segment

    # Generate interpolated points along the great circle path
    for i in range(len(points) - 1):
        p1 = points[i]
        p2 = points[i + 1]
        segment_points = interpolate_great_circle(p1, p2, num_points_per_segment)
        # Exclude the last point to avoid duplicates (except for the final segment)
        if i < len(points) - 2:
            segment_points = segment_points[:-1]
        coordinates.extend(segment_points)

    # Convert coordinates to KML coordinate string (longitude,latitude)
    coordinates_str = ''
    for lat, lon in coordinates:
        coordinates_str += f'            {lon},{lat}\n'

    # KML file content
    kml_content = f'''<?xml version="1.0" encoding="UTF-8"?>
<kml xmlns="http://www.opengis.net/kml/2.2">
<Document>
    <Style id="lineStyle">
        <LineStyle>
            <color>{color}</color>
            <width>{thickness}</width>
        </LineStyle>
    </Style>
    <Placemark>
        <name>Great Circle Line</name>
        <styleUrl>#lineStyle</styleUrl>
        <LineString>
            <coordinates>
{coordinates_str.strip()}
            </coordinates>
        </LineString>
    </Placemark>
    <Style id="poleStyle">
      <IconStyle>
        <!-- Color format is aabbggrr (alpha, blue, green, red) -->
        <color>ffc0cbff</color> <!-- Blue color (fully opaque) -->
        <scale>10.0</scale> <!-- Controls the size of the icon (2.0 is twice the normal size) -->
        <Icon>
          <href>http://maps.google.com/mapfiles/kml/pushpin/pink-pushpin.png</href>        </Icon>
      </IconStyle>
      <LabelStyle>
        <scale>10.0</scale> <!-- Controls the size of the label text (2.0 is twice the normal size) -->
        # <color>ffc0cbff</color> <!-- Optional: you can also color the label text pink -->
      </LabelStyle>
    </Style>
    <Placemark>
     <name>S2 North Pole</name>
     <styleUrl>#poleStyle</styleUrl>
      <Point>
        <coordinates>31,-14</coordinates> <!-- longitude,latitude,altitude -->
      </Point>
    </Placemark>
    <Placemark>
     <name>S2 South Pole</name>
     <styleUrl>#poleStyle</styleUrl>
      <Point>
        <coordinates>-149,14</coordinates> <!-- longitude,latitude,altitude -->
      </Point>
    </Placemark>
</Document>
</kml>
'''

    # Write the KML content to output.kml
    with open('output.kml', 'w') as f:
        f.write(kml_content)

if __name__ == '__main__':
    main()
