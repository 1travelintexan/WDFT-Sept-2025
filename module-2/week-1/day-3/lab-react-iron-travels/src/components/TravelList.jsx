import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import { PlanCard } from "./PlanCard";
import { Favorites } from "./Favorites";
export const TravelList = () => {
  const [plans, setPlans] = useState(travelPlansData);
  const [favorites, setFavorites] = useState([]);
  //functions
  function handleDelete(thePlanId) {
    const filteredPlans = plans.filter((onePlan) => {
      if (onePlan.id !== thePlanId) {
        return true;
      }
    });
    console.log("deleted", thePlanId, filteredPlans);
    setPlans(filteredPlans);
  }

  function handleFavorite(planId) {
    const theNewFav = plans.find((onePlan) => {
      if (onePlan.id === planId) {
        return true;
      }
    });
    //this adds an object to an array in REACT
    setFavorites([...favorites, theNewFav]);
    console.log("fav clicked", planId, theNewFav);

    //this removes the new favorite from the original plans
    const filteredPlans = plans.filter((onePlan) => {
      if (onePlan.id !== planId) {
        return true;
      }
    });
    setPlans(filteredPlans);
  }
  return (
    <div id="homepage">
      <div>
        <h2>Original Plans</h2>
        {plans.map((onePlan) => {
          return (
            <PlanCard
              onePlan={onePlan}
              key={onePlan.id}
              handleDelete={handleDelete}
              handleFavorite={handleFavorite}
            />
          );
        })}
      </div>
      <Favorites favorites={favorites} />
    </div>
  );
};
