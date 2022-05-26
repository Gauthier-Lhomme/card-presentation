import "../scss/Card.scss"

const Card = () => {
  return (
    <div>
      <article className="card thumb infos">
       
        <section>
             <h2 className="title" >New york</h2> 
             <h3 className="date">November</h3>
        <h3 className="seats">Seats remaining : 2</h3>
        <p className="txt">
          | Join us for our Live Infinity Session in | beautiful New York City.
          This is a 3 day | intensive workshop where you'll learn | how to beco
        </p>
        <h3 className="details">Event deatails</h3>
        <span className="flag"></span>
        </section>
       
      </article>
    </div>
  );
};

export default Card;
