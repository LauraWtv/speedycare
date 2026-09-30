import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./MapView.css";

const MapView = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const latitude = 50.924942467606;
  const longitude = 3.6403891134948414;

  useEffect(() => {
    if (!mapRef.current) return;

    const map = L.map(mapRef.current).setView([latitude, longitude], 15);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // const markerIcon = L.divIcon({
    //   className: "custom-marker-container",
    //   html: `<div class="custom-marker"></div>`,
    //   iconSize: [24, 24],
    //   iconAnchor: [12, 12],
    // });

    // L.marker([latitude, longitude], {
    //   icon: markerIcon,
    // })
    //   .addTo(map)
    //   .bindPopup("<b>SpeedyCare</b>");

    L.marker([latitude, longitude]).addTo(map).bindPopup("<b>SpeedyCare</b>");

    return () => {
      map.remove();
    };
  }, []);

  return <div ref={mapRef} className="map" />;
};

export default MapView;
