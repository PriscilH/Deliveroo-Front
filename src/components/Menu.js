import Meal from "./Meal";
import Basket from "./Basket";

const Menu = ({data, basket, setBasket, total, setTotal }) => {
      
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

    {/* {basket.length > 0 ? (
    <div className="basket">
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
            <p>Votre panier est vide</p>
          </div>
        )} */}
        <Basket
          basket={basket}
          setBucket={setBasket}
          total={total}
          setTotal={setTotal}
        />
</div>
    
    );
};
export default Menu;