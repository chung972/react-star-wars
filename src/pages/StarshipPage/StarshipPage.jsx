import React from "react";
import Starship from "../../components/Starship/Starship";


const StarshipPage = (props) => {

    const starship = props.getStarship(props.match.params.idx);

    return (
        <div>
          {starship ?
            <Starship starship={starship}/>
            :
            <h3>Loading...</h3>
          }
        </div>
      );
};

export default StarshipPage;