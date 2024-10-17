import React, { useState } from "react";
import "./LocationSearchbar.css";

import Alibaugh from "../assets/Alibaug9.svg";
import Bhimtal from "../assets/Bhimtal20.svg";
import Chandigarh from "../assets/Chandigarh23.svg";
import Chikmagalur from "../assets/Coorg14.svg";
import Dehrahdun from "../assets/Dehradun22.svg";
import Goa from "../assets/Goa10.svg";
import Gurugoan from "../assets/Gurgaon25.svg";
import Igatpuri from "../assets/Igatpuri2.svg";
import Jaipur from "../assets/Jaipur16.svg";
import Karjat from "../assets/Karjat5.svg";
import Kasauli from "../assets/Kasauli11.svg";
import Lonavala from "../assets/Lonavala6.svg";
import Manali from "../assets/Manali12.svg";
import Manesar from "../assets/Manesar24.svg";
import Mussoorie from "../assets/Mussoorie15.svg";
import Nashik from "../assets/Nashik4.svg";
import Ooty from "../assets/Ooty13.svg";
import Panchagani from "../assets/Panchgani7.svg";
import Pune from "../assets/Pune3.svg";
import Shimla from "../assets/Shimla19.svg";
import Udaipur from "../assets/Udaipur17.svg";
import Wayanad from "../assets/Wayanad18.svg";

const locations = [
  { name: "Ahmedabad", image: Alibaugh },
  { name: "Alibaug", image: Alibaugh },
  { name: "Alleppey", image: Alibaugh },
  { name: "Amritsar", image: Alibaugh },
  { name: "Badami", image: Alibaugh },
  { name: "Bandhavgarh National Park", image: Alibaugh },
  { name: "Bangalore", image: Alibaugh },
  { name: "Bhimtal", image: Bhimtal },
  { name: "Bhopal", image: Bhimtal },
  { name: "Chali", image: Chandigarh },
  { name: "Chamba", image: Chikmagalur },
  { name: "Chandigarh", image: Chandigarh },
  { name: "Chikmagalur", image: Chikmagalur },
  { name: "Coimbatore", image: Dehrahdun },
  { name: "Coonor", image: Chikmagalur },
  { name: "Coorg", image: Chikmagalur },
  { name: "Dalhousie", image: Dehrahdun },
  { name: "Darjeeling", image: Dehrahdun },
  { name: "Dehradun", image: Dehrahdun },
  { name: "Delhi", image: Goa },
  { name: "Dhanulti", image: Gurugoan },
  { name: "Dharamshala", image: Gurugoan },
  { name: "Dwarka", image: Dehrahdun },
  { name: "Ernakulam", image: Goa },
  { name: "Ghatok", image: Gurugoan },
  { name: "Goa", image: Goa },
  { name: "Gulmarg", image: Gurugoan },
  { name: "Gurgaon", image: Gurugoan },
  { name: "Hampi", image: Gurugoan },
  { name: "Havelock Island", image: Gurugoan },
  { name: "Hosur", image: Gurugoan },
  { name: "Hyderabad", image: Gurugoan },
  { name: "Idukki", image: Gurugoan },
  { name: "Igatpuri", image: Igatpuri },
  { name: "Indore", image: Gurugoan },
  { name: "Jabalpur", image: Gurugoan },
  { name: "Jaipur", image: Jaipur },
  { name: "Jim Corbett", image: Gurugoan },
  { name: "Jodhpur", image: Jaipur },
  { name: "Jorhat", image: Jaipur },
  { name: "Kabini", image: Karjat },
  { name: "Kalimponf", image: Gurugoan },
  { name: "Kamshet", image: Kasauli },
  { name: "Kanha National Park", image: Kasauli },
  { name: "Karjat", image: Karjat },
  { name: "Khopoli", image: Kasauli },
  { name: "Kochi", image: Kasauli },
  { name: "Kodaikanal", image: Lonavala },
  { name: "Kolkata", image: Kasauli },
  { name: "Kotagiri", image: Kasauli },
  { name: "Kozhikode", image: Gurugoan },
  { name: "Landdown", image: Lonavala },
  { name: "Lavsana", image: Lonavala },
  { name: "Lonavala", image: Lonavala },
  { name: "Madikeri", image: Manali },
  { name: "Mahabaleshwar", image: Manali },
  { name: "Mahabalipuram", image: Manali },
  { name: "Malpe", image: Manali },
  { name: "Manali", image: Manali },
  { name: "Maneshwar", image: Manesar },
  { name: "Mashobra", image: Mussoorie },
  { name: "Mukteshwar", image: Mussoorie },
  { name: "Mumbai", image: Mussoorie },
  { name: "Munnar", image: Manesar },
  { name: "Mussoorie", image: Mussoorie },
  { name: "Mysore", image: Mussoorie },
  { name: "Nagpur", image: Nashik },
  { name: "Nahan", image: Nashik },
  { name: "Nainital", image: Nashik },
  { name: "Naldehra", image: Nashik },
  { name: "Nashik", image: Nashik },
  { name: "Ooty", image: Ooty },
  { name: "Panchmarhi", image: Panchagani },
  { name: "Palampur", image: Pune },
  { name: "Pali", image: Pune },
  { name: "Panchagani", image: Panchagani },
  { name: "Panna National Park", image: Pune },
  { name: "Pathankot", image: Pune },
  { name: "Pawna", image: Pune },
  { name: "Pench National Park", image: Pune },
  { name: "Pondicherry", image: Pune },
  { name: "Pune", image: Pune },
  { name: "Pushkar", image: Pune },
  { name: "Rajkot", image: Pune },
  { name: "Ramgarh", image: Pune },
  { name: "Ranikhet", image: Pune },
  { name: "Rishikesh", image: Pune },
  { name: "Samdong", image: Pune },
  { name: "Satara", image: Shimla },
  { name: "Shahapur", image: Shimla },
  { name: "Shimla", image: Shimla },
  { name: "Sohna", image: Shimla },
  { name: "Thekkady", image: Shimla },
  { name: "Thrissur", image: Shimla },
  { name: "Udaipur", image: Udaipur },
  { name: "Udupi", image: Udaipur },
  { name: "Ujjain", image: Udaipur },
  { name: "Vagamon", image: Udaipur },
  { name: "Valparai", image: Udaipur },
  { name: "Waada", image: Udaipur },
  { name: "Wayanad", image: Wayanad },
  { name: "Yercaud", image: Udaipur },
  { name: "Kantal", image: Udaipur },
  { name: "Kurukshetra", image: Udaipur },
  { name: "Shelpani", image: Udaipur },
];

const LocationSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredLocations = locations.filter((location) =>
    location.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const highlightMatch = (name) => {
    const parts = name.split(new RegExp(`(${searchTerm})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === searchTerm.toLowerCase() ? (
        <span key={index} className="highlight">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Search for a location..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <div className="location-list">
        {filteredLocations.length > 0 ? (
          filteredLocations.map((location, index) => (
            <div
              key={index}
              className={
                index < 3 ? "location-item highlighted" : "location-item"
              }
            >
              <img
                src={location.image}
                alt={location.name}
                className="location-icon"
              />
              <span>{highlightMatch(location.name)}</span>
            </div>
          ))
        ) : (
          <div className="no-results">No locations found</div>
        )}
      </div>
    </div>
  );
};

export default LocationSearch;
