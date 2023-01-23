const Painquotidien = ({data}) => {
    return (
        <div className="InfoResto"> 
        <div className="InforestoText">
      <h1> {data.restaurant.name}</h1>
      <p> {data.restaurant.description} </p>
    </div>
    <div>
      <img className="Picheader" src={data.restaurant.picture} alt="menu-plat"/>
    </div>
    </div>
    );
};

export default Painquotidien;