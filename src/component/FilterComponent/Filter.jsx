import { useState, useEffect } from "react";
import style from "./Filter.module.scss";
import { fetchProducts } from "@/Utils/fetchProducts";
import PropTypes from "prop-types";
const Filter = ({ onFilterChange }) => {
  const [furnitureData, setFurnitureData] = useState([]);
  const [openRooms, setOpenRooms] = useState({});
  const [selectedFilters, setSelectedFilters] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProducts();
      setFurnitureData(data)
    };

    fetchData();
  }, []);

  const toggleRoom = (room) => {
    
    const newOpenRooms = { ...openRooms };

    if (newOpenRooms[room]) {
      newOpenRooms[room] = false;
    } else {
      newOpenRooms[room] = true;
    }

    setOpenRooms(newOpenRooms);
  };
  

  const handleCheckboxChange = (room, type, isChecked) => {
    setSelectedFilters((prevFilters) => {
      const newFilters = { ...prevFilters };
  
      if (isChecked) {
        if (!newFilters[room]) {
          newFilters[room] = [];
        }
        if (!newFilters[room].includes(type)) {
          newFilters[room].push(type);
        }
      } else {
        newFilters[room] = newFilters[room].filter((item) => item !== type);
  
        if (newFilters[room].length === 0) {
          delete newFilters[room];
        }
      }
  
      return newFilters;
    });
  };
  
  
  useEffect(() => {
    onFilterChange(selectedFilters);
  }, [selectedFilters, onFilterChange]); 
  
  const groupedData = {};

  furnitureData.forEach((item) => {
    const { room, type } = item;

    if (!groupedData[room]) {
      groupedData[room] = [];
    }
    const alreadyExists = groupedData[room].some((furniture) => furniture.type === type);
    if (!alreadyExists) {
      groupedData[room].push(item);
    }

  });

  return (
     <div className={style.filterContainer}>
      {Object.keys(groupedData).map((room, index) => (
        <div key={index}>
              <div className={style.roomContainer}>
                <h6 className={style.roomName}>
               {room}
     {selectedFilters[room]?.length > 0 && (
      <span className={style.badge}>{selectedFilters[room].length}</span>
    )}
                </h6>
       <button onClick={() => toggleRoom(room)} className={style.toggleBtn}>
       {openRooms[room] ? "-" : "+"}
       </button>

</div>

      {openRooms[room] && (
            <div className={style.accordionContent}>
              {groupedData[room].map((item, i) => (
                <label key={i} className={style.label}>
                  <input
                    className={style.checkboxInput}
                    type="checkbox"
                    onChange={(e) =>
                      handleCheckboxChange(room, item.type, e.target.checked)
                    }
                    checked={selectedFilters[room]?.includes(item.type) || false}
                  />{" "}
                  {item.type}
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};
export default Filter;
