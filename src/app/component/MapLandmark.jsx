"use client";
import {
  LayersControl,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

function LocationMarker({ position, setPosition }) {
  const map = useMapEvents({
    click(e) {
      console.log("e.latlng", e.latlng);
      setPosition(e.latlng);
      map.flyTo(e.latlng, 14);
    },
  });

  return (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}
const MapLandmark = () => {
  const DEFAULT_LOCATION = [35.51341539512051, 139.62217764828603];
  const [position, setPosition] = useState(DEFAULT_LOCATION);
  console.log("position->", position);
  //   const test = location || DEFAULT_LOCATION
  //   console.log("test-->",test)
  useEffect(() => {
    if (typeof window !== "undefined") {
      
      console.log("Map is ready in the client-side");
    }
  }, []);

return (
    <div>
        <MapContainer
            className="h-[400px] w-[800px] rounded-md"
            zoom={14}
            center={DEFAULT_LOCATION}
            scrollWheelZoom={true}
        >
            <LayersControl>
                <LayersControl.BaseLayer name="Openstreetmap" checked>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                </LayersControl.BaseLayer>

                <LayersControl.BaseLayer name="CyclOSM">
                    <TileLayer
                        attribution='&copy; <a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases'
                        url="https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png"
                    />
                </LayersControl.BaseLayer>
            </LayersControl>
            <LocationMarker position={position} setPosition={setPosition} />
        </MapContainer>
    </div>
);
};

export default MapLandmark;
