import "./Cards.css";

function Cards({ data }) {
  return (
    <div className="card-container flex-center flex-row gap-[5rem]">
      {data.map((card) => (
        <div className="card__wrapper h-[320px] w-[270px] p-[2px] relative overflow-hidden flex-center ">
          <div
            key={card.id}
            className=" rounded-xl  flex overflow-hidden relative img__card h-full w-full"
          >
            <img className=" object-cover" src={card.img} alt="img" />
            <div
              className="absolute blur__text w-full h-full flex-center rounded-xl"
              style={{
                boxShadow: `inset -20px -20px 50px 10px black`,
              }}
            >
              <h1 className="text-4xl text-white">{card.title}</h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
