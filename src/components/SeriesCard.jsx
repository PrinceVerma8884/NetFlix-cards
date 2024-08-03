// import styled from 'styled-components';
const SeriesCard = ({curElem}) => {
    const {id,img_url,name,rating,description,genre,cast,watch_url} = curElem;
    const btn_style = {
    padding:"1.2rem 2.4rem", 
    border :"none", 
    fontSize: "1.6rem"
    };
    const ratingClass = rating >= 8.5 ? "super_hit" : "average";
    return (
        <>
        <li key = {id} className="card">
          <div>
            <img
              src={img_url}
              alt="err"
              width="40%"
              height="40%"
            />
          </div>
          <div className="card-content">
          {/* <div className="flex flex-col gap-[3.2rem] p-[1.2rem]"> */}
          <h2>Name : {name} </h2>
          {/* <h3 style={{margin:"1.2rem 0"}}>Ratings: {rating} </h3> */}
          {/* <h3>Ratings: <span className={`rating borders ${rating >= 8.5 ? "super_hit" : "average"}`} > {rating} </span></h3> */}
          
          <h3>Ratings: <span className={`rating borders ${ratingClass}`} > {rating} </span></h3>
          <p className="text-3xl font-bold underline">Summary: {description}</p>
          <p>Genre: {genre.join(", ")}</p>
          <p>Cast: {cast.join(", ")} </p>
          <a href={watch_url} target="_blank" >
            <button style ={btn_style}>Watch Now</button>
          </a>
          </div> 
        </li>
        </>
      );
} 
export default SeriesCard;