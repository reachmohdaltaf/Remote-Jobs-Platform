import { fetchLocations } from "@/app/api/locationApi";
import React, { useState, useEffect } from "react";

const LocationMenu = ({ visible, inputValue, setInputValue, setIsFocused }) => {
  const [filteredLocations, setFilteredLocations] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (inputValue.trim() === "") return;

    setLoading(true);

    // Use the fetchLocations API function
    fetchLocations(inputValue)
      .then((locations) => {
        setFilteredLocations(locations);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [inputValue]);

  if (!visible) return null;

  return (
    <div className="absolute top-full left-0 w-full bg-white shadow-md border rounded-b-md z-10 max-h-40 overflow-y-auto">
      {loading ? (
        <div className="p-2 text-gray-500">Loading...</div>
      ) : filteredLocations.length > 0 ? (
        filteredLocations.map((location, index) => (
          <div
            key={index}
            className="p-2 hover:bg-gray-200 cursor-pointer"
            onClick={() => {
              setInputValue(location.formatted);
              setIsFocused(false); // Close the menu after selection
            }}
          >
            {location.formatted}
          </div>
        ))
      ) : (
        <div className="p-2 text-gray-500">No matching locations</div>
      )}
    </div>
  );
};

export default LocationMenu;
