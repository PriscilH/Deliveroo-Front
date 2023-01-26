// import { useState } from "react";

// const Basket = ({ basket, setBasket, total, setTotal }) => {
//     const [confirm, setConfirm] = useState(true);
//     return (
//       <div className="Basket">
//         <button
//         className={
//           basket.length === 0
//             ? "confirmation color-vide"
//             : "confirmation color-nonvide"
//         }
//         onClick={() => {
//           const newtab = [];
//           setBasket(newtab);
//           setConfirm(false);
//         }}
//       >
//         Valider mon panier
//       </button>
//       <div>
//         {basket.map((element, index) => {
//           return (
//             <div key={element.id}>
//               <div className="Retailsbasket">
//                 <div>
//                   <button
//                     onClick={() => {
//                         const copytab = [...basket];
//                       if (copytab[index].quantity > 1) {
//                         copytab[index].quantity -= 1;
//                         copytab[index].amount =
//                           copytab[index].price * copytab[index].quantity;
//                         setBasket(copytab);

//                         let count = 0;
//                         for (let i = 0; i < copytab.length; i++) {
//                           count = count + copytab[i].amount;
//                         }
//                         setTotal(count);
//                       } else {
//                         const newtab = [];
//                         for (let i = 0; i < basket.length; i++) {
//                           if (i !== index) {
//                             newtab.push(basket[i]);
//                           }
//                         }
//                         setBasket(newtab);
//                         let count = 0;
//                         for (let i = 0; i < newtab.length; i++) {
//                           count = count + newtab[i].amount;
//                         }
//                         setTotal(count);
//                       }
//                     }}
//                   >
//                     -
//                   </button>
//                   <p className="Retails-qty">{element.quantity}</p>
//                   <button
//                     onClick={() => {
//                       const copytab = [...basket];
//                       copytab[index].quantity += 1;
//                       copytab[index].amount =
//                         copytab[index].price * copytab[index].quantity;
//                       setBasket(copytab);

//                       let count = 0;
//                       for (let i = 0; i < copytab.length; i++) {
//                         count = count + copytab[i].amount;
//                       }
//                       setTotal(count);
//                     }}
//                   >
//                     +
//                   </button>

//                   <p className="Retailstitle">{element.title}</p>
//                 </div>
//                 <p>{Number.parseFloat(element.amount).toFixed(2)} €</p>
//               </div>
//             </div>
//           );
//         })}
//         {basket.length !== 0 ? (
//           <div className="Confirm-2">
//             <p className="trait"></p>
//             <div className="totaux">
//               <p>Sous-total</p>
//               <p>{Number.parseFloat(total).toFixed(2)} €</p>
//             </div>
//             <div className="totaux">
//               <p>Frais de livraison</p>
//               <p>2.50 €</p>
//             </div>
//             <p className="trait"></p>
//             <div className="finaltotals">
//               <p>Total</p>
//               <p>{Number.parseFloat(total + 2.5).toFixed(2)} €</p>
//             </div>{" "}
//           </div>
//         ) : (
//           <div className="panier-vide">
//             {confirm ? <p> Votre panier est vide</p> : <p> Panier validé </p>}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Basket;
        