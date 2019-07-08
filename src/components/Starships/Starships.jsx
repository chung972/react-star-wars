import React from "react";
import Starship from "../Starship/Starship";


const Starships = (props) => (
    <div>
        {props.starshipList && props.starshipList.map((ship, index) =>

            <Starship
                ship={ship}
                key={index} />


        )}

    </div>
);

export default Starships;