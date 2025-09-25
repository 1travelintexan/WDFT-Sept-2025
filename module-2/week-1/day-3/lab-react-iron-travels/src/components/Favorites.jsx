import { PlanCard } from "./PlanCard";

export const Favorites = ({ favorites }) => {
  return (
    <div>
      <h2>Favorites</h2>
      {favorites.map((onePlan) => {
        return <PlanCard onePlan={onePlan} key={onePlan.id} />;
      })}
    </div>
  );
};
