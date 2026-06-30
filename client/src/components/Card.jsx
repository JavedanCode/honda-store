export default function Card({ onClick, motorcycle }) {
  return (
    <div className="bike-cards" onClick={onClick}>
      <img
        width={300}
        src={`http://localhost:3000${motorcycle.imagePath}`}
        alt={motorcycle.name}
      />
      <h3 className="bike-names">{motorcycle.name}</h3>
      <p className="bike-card-price">${motorcycle.price}</p>
    </div>
  );
}
