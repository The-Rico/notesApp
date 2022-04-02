import { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

export default function Sidebar() {
    
        const [car, setCar] = useState({
          brand: "Ford",
          model: "Mustang",
          year: "1964",
          color: "red"
        });
      
        const updateColor = () => {
          setCar(previousState => {
            return { ...previousState, color: "blue" }
          });
        }
      
        return (
            <div className="sideBar">
          <p>
            <h1>My {car.brand}</h1>
            
              It is a {car.color} {car.model} from {car.year}.
              <button
              type="button"
              onClick={updateColor}
            >Blue</button>
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
            </p>
            </div>
        )
      }