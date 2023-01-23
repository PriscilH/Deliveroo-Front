import MenuDefault from "../assets/images/Menu.jpeg"

const Meal = ({element2, basket, setBasket, total, setTotal}) => {
    return (
        <div 
        className="Content"  key={element2.id}
        onClick={() => { 
          let change = false;
          // console.log(meal.id);
          const copytab = [...basket];
          if (copytab.length === 0) {
            copytab.push({
              id: element2.id,
              quantity: 1,
              title: element2.title,
              price: parseFloat(element2.price),
              amount: parseFloat(element2.price),
            });
          } else {
            for (let i = 0; i < copytab.length; i++) {
              if (copytab[i].id === element2.id) {
                copytab[i].quantity += 1;
                copytab[i].amount = copytab[i].price * copytab[i].quantity;
                change = false;
                break;
              } else {
                change = true;
              }
            }
            if (change) {
              copytab.push({
                id: element2.id,
                quantity: 1,
                title: element2.title,
                price: parseFloat(element2.price),
                amount: parseFloat(element2.price),
              });
            }
          }
          console.log(copytab);
          setBasket(copytab);
  
          let count = 0;
          for (let i = 0; i < copytab.length; i++) {
            count = count + copytab[i].amount;
          }
          console.log(count);
          setTotal(count);
        //   // 1
        //   const copy = [...element2.basket];

        //   const isPresent = copy.find(
        //     (element) => element.id === element2.id
        //   );
        //   if (isPresent) {
        //     const indexToModify = copy.indexOf(isPresent);
        //     // incrémenter la quantité
        //     // 2
        //     copy[indexToModify].quantity++;
        //     // 3
        //     element2.setBasket(copy);
        //   } else {
        //     // copier l'objet "meal" pour ne pas le modifier directement :
        //     const mealCopy = { ...element2 };
        //     mealCopy.quantity = 1;
        //     // 2
        //     copy.push(mealCopy);
        //     // 3
        //     element2.setBasket(copy);
        //   }
         }}
        >
        
                  <div className="Object">
                    <h3> {element2.title}</h3>
                    <p>{element2.description.slice(0, 60)}</p>
                    <div className="Pricestar">
                      <h4>{element2.price} €</h4>{element2.popular && (
                      <span className="icon-STAR_FILL">Populaire</span>
                    )}
                    </div>
                  </div>
                  <div>
                    <img src={element2.picture ? element2.picture : MenuDefault} alt="Menu" />
                  </div>
                </div>
                
    );
};

export default Meal;