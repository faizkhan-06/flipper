import "./Cards.css";

function Cards({ data }) {
  return (
    <div className="card-container flex-center flex-row gap-[5rem]">
      {data.map((card) => (
        <div
          key={card.id}
          className=" rounded-xl h-[320px] w-[270px] flex overflow-hidden relative img__card"
        >
          <img className=" object-cover" src={card.img} alt="img" />
          <div className="absolute blur__text w-full h-full flex-center">
            <h1 className="text-4xl text-white">{card.title}</h1>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
