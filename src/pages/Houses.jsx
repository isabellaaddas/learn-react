import "./../css/Houses.css";
import House from "./../components/House";
import {useState, useEffect} from "react";
import axios from "axios";

const Houses = () => {
    const [houses, setHouses] = useState([]);

    useEffect(() => {
        const loadHouses = async() => {
            const response = await axios.get("https://portiaportia.github.io/json/house-plans.json");
            setHouses(response.data);
        };

        loadHouses();
    }, []);
    
    return (
        <main id="houses" className="main-content">
            <h2>Houses</h2>

            <div id="house-list" className="columns">
                {houses.map((house) => (
                    <House  key={house._id}
                            id={house._id}
                            name={house.name}
                            size={house.size}
                            bedrooms={house.bedrooms}
                            bathrooms={house.bathrooms} 
                            main_image={house.main_image} />
                ))}
            </div>
            
        </main>
    );
};

export default Houses;