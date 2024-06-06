//npm install react-leaflet leaflet --save  npm install leaflet-geosearch  npm install leaflet-search  npm install leaflet react-leaflet
import React, { useRef, useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-geosearch/dist/geosearch.css';
import 'leaflet-search/dist/leaflet-search.min.css';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import L from 'leaflet';
import cities from "../assets/cities.json";

import useGeoLocation from '../hooks/useGeoLocation';

const markeIcon = new L.Icon({
    iconUrl: require("../assets/marker-icon.png"),
    iconSize: [40, 40],
    iconAnchor: [17, 46],
    popupAnchor: [0, -46],
});

const MapComponent = () => {
    const mapRef = useRef(null);
    const [searchResult, setSearchResult] = useState(null);
    const location = useGeoLocation(); 

    
    const handleSearchButtonClick = async () => {
        const map = mapRef.current;
        if (!map) return;

        const provider = new OpenStreetMapProvider();
        const searchControl = new GeoSearchControl({
            provider,
            style: 'bar',
            autoClose: true,
            searchLabel: 'Enter location',
            showMarker: true,
            retainZoomLevel: true,
            animateZoom: true,
            keepResult: true,
            updateMap: true,
            popupFormat: ({ query, result }) => result.label,
            maxMarkers: 1,
            marker: {
                icon: markeIcon
            } 
        });

        map.addControl(searchControl);

        try {
            const searchResults = await searchControl.search();
            if (searchResults && searchResults.length > 0) {
                setSearchResult(searchResults[0]);
                searchControl.addMarker(searchResults[0], { query: '', result: searchResults[0] });
                const { x, y } = searchResults[0].location;
                map.setView([y, x], 10); // Adjust zoom level for search results
                console.log('Search results:', searchResults);
            }
        } catch (error) {
            console.error('Error performing search:', error);
        }
    };

    // Function to handle locating user's position
    const locateUserPosition = () => {
        if (mapRef.current && location.loaded && !location.error) {
            const { lat, lng } = location.coordinates;
            mapRef.current.flyTo([lat, lng], 10); // Adjust zoom level for user's location
        } else {
            alert("Unable to locate your position.");
        }
    };

    // Set map center to user's location when location is loaded
    useEffect(() => {
        if (mapRef.current && location.loaded && !location.error) {
            const { lat, lng } = location.coordinates;
            mapRef.current.setView([lat, lng], 7); // Adjust zoom level when location is loaded
        }
    }, [location]);

    return (
        <div style={{ position: 'relative', width: '100%', height: '150px' }}>
        <div style={{ position: 'absolute', top: '10px', left: '10px', zIndex: '1000' }}>
            <button style={{ marginRight: '10px',marginLeft:'50px',borderRadius:'20px',borderColor:"none",borderStyle:"none",backgroundColor:"#0AFF91" }} onClick={handleSearchButtonClick}><p style={{width:"25px",height:"1px",fontSize:"8px",color:"white",textAlign:"center",padding:"2px"}}>Search</p></button>
            <button style={{ marginTop:"90px",borderRadius:'20px',borderColor:"none",borderStyle:"none",backgroundColor:"#0AFF91" }} onClick={locateUserPosition}><p style={{width:"80px",height:"1px",fontSize:"8px",color:"white",textAlign:"center",padding:"2px"}}>Locate My Position</p></button>
        </div>

        <MapContainer center={[34, 9]} zoom={9} style={{ height: '100%', width: '100%' }} ref={mapRef}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />

                {searchResult && (
                    <Marker position={[searchResult.location.y, searchResult.location.x]}>
                        <Popup>{searchResult.label}</Popup>
                    </Marker>
                )}

                {/* Display the user's location marker if available */}
                {location.loaded && !location.error && (
                    <Marker position={[location.coordinates.lat, location.coordinates.lng]} icon={markeIcon}>
                        <Popup>Your Location</Popup>
                    </Marker>
                )}

                {cities.map((city, idx) => (
                    <Marker
                        position={[city.lat, city.lng]}
                        icon={markeIcon}
                        key={idx}
                    >
                        <Popup>
                            <b>
                                {city.city}, {city.country}
                            </b>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default MapComponent;




