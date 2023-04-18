import Meal from "./Meal";
import { useState } from "react";
// import Basket from "./Basket";

const Menu = ({data, basket, setBasket, total, setTotal }) => {
  const [confirm, setConfirm] = useState(true);
  const getSubTotal = (array) => {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
      total = total + array[i].price * array[i].quantity;
    }
    return total;
  };
  return (
    <div className="Menu">
    <div className="Container">
      {/* <div className="Element-menu"></div> */}
      {data.categories.map((category, index) => {
        return (
          <div key={index}>
            {category.meals.length > 0 && (
              <>
              <h2> {category.name}</h2>
            <div className="Meals">
            {category.meals.map((element2) => {
              // console.log("element2 => ", element2);
              return (
                <Meal 
                element2={element2}
                setBasket={setBasket}
                basket={basket}
                total={total}
                setTotal={setTotal}
                />
               );
             })}
            </div>
           </>
          )}
        </div>
       );
     })}
    </div>
    
    {basket.length > 0 ? (
    <div className="Basket">
      <button
        className={
          basket.length === 0
            ? "confirmation color-vide"
            : "confirmation color-nonvide"
        }
        onClick={() => {
          const newtab = [];
          setBasket(newtab);
          setConfirm(false);
        }}
      >
        Valider mon panier
      </button>
     <div className="basket-meals-list">
              {basket.map((element, index) => {
                console.log("basket element >", element);
                return (
                  <div key={element.id}>
                    <div className="basket-counter">
                      <button
                        onClick={() => {
                          // 1
                          const copy = [...basket];
                          if (copy[index].quantity > 1) {
                            // 2
                            // copy[index].quantity = copy[index].quantity - 1
                            copy[index].quantity--;
                            // 3
                            setBasket(copy);
                          } else {
                            // 2
                            copy.splice(index, 1);
                            // 3
                            setBasket(copy);
                          }
                        }}
                      >
                        -
                      </button>
                      <p>{element.quantity}</p>
                      <button
                        onClick={() => {
                          // 1
                          const copy = [...basket];
                          // 2
                          // copy[index].quantity = copy[index].quantity + 1
                          copy[index].quantity++;
                          // 3
                          setBasket(copy);
                        }}
                      >
                        +
                      </button>
                    </div>
                    <p>{element.title}</p>
                    <p>
                      {(element.price * element.quantity)
                        .toFixed(2)
                        .replace(".", ",")}
                      €
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="basket-totals">
              <div>
                <p>Sous-total</p>
                <p>{getSubTotal(basket).toFixed(2).replace(".", ",")} €</p>
              </div>
              <div>
                <p>Frais de livraison</p>
                <p>2,50 €</p>
              </div>
            </div>
            <div className="basket-final-total">
              <p>TOTAL</p>
              <p>
                {(Number(getSubTotal(basket).toFixed(2)) + 2.5)
                  .toFixed(2)
                  .replace(".", ",")}{" "}
                €
              </p>
            </div>
          </div>
        ) : (
          <div className="basket">
            {confirm ? <p> Votre panier est vide</p> : <p> Panier validé </p>}
          </div>
        )}
        {/* <Basket
          basket={basket}
          setBucket={setBasket}
          total={total}
          setTotal={setTotal}
        />
</div> */}
    </div>
    
    );
};
export default Menu;