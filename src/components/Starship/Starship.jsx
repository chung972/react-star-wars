import React from "react";
import { Link } from 'react-router-dom';

const Starship = ({starship}) => (
    <div>
        <div>Name: {starship.name}</div>
        <div>Model: {starship.model}</div>
        <Link to='/'>Return to Starship List</Link>
        {starship.pilots ?
            starship.pilots.map(pilot=>
            <div>
                {pilot.name}
            </div>
            )
            :
            <div>No Pilots</div>
        }
    </div>
)

export default Starship;