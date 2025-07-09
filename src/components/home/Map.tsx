"use client";

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Fix for default icon issue with Leaflet and Webpack
const icon = new L.Icon({
    iconUrl: '/file.svg',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    shadowSize: [41, 41]
});


export default function Map() {
    const position: [number, number] = [41.8902, 12.4922]; // Colosseum, Rome

    return (
        <MapContainer center={position} zoom={15} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={icon}>
                <Popup>
                    Studio Legale Jessica Fici <br /> Via Roma, 123, 00100 Roma, Italia
                </Popup>
            </Marker>
        </MapContainer>
    );
} 