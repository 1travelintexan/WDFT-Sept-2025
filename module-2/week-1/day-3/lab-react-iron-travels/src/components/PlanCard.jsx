export const PlanCard = ({ onePlan, handleDelete, handleFavorite }) => {
  return (
    <div className="plan-card">
      <img src={onePlan.image} alt={onePlan.destination} />
      <section>
        <h6>
          {onePlan.destination} ({onePlan.days} Days )
        </h6>
        <h6>{onePlan.description}</h6>
        <h6>Price: {onePlan.totalCost} $</h6>
        <section id="labels-section">
          {onePlan.totalCost < 350 ? <h5 id="great-deal">Great Deal</h5> : null}
          {onePlan.totalCost > 1500 ? <h5 id="premium">Premium</h5> : null}
          {onePlan.allInclusive && <h5 id="all-inclusive">All Inclusive</h5>}
          <button
            onClick={() => {
              handleDelete(onePlan.id);
            }}
          >
            Delete
          </button>
          <button
            onClick={() => {
              handleFavorite(onePlan.id);
            }}
          >
            Favorite
          </button>
        </section>
      </section>
    </div>
  );
};
