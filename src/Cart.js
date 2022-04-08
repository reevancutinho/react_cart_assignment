import React from 'react';

export default function Cart({ cart, setCart }) {
  const getTotalSum = () => {
    return cart.reduce(
      (sum, { cost, quantity }) => sum + cost * quantity,
      0
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const onAdd=(product) =>{
    const exist =cart.find(x => x.name === product.name);
    if(exist){
      setCart(cart.map(x=>x.name===product.name?{...exist,quantity:exist.quantity +1} : x))
    }else{
      setCart([...cart,{...product,quantity:1}]);
    }
  };

  const onRemove=(product)=>{
    const exist=cart.find((x)=>x.name===product.name);
    if(exist.quantity===1){
      setCart(cart.filter((x)=>x.name !== product.name))
    }else{
      setCart(cart.map((x) => x.name===product.name?{...exist,quantity:exist.quantity-1}:x))
    }
  }

//   const setQuantity = (product, amount) => {
//     const newCart = [...cart];
//     newCart.find(
//       (item) => item.name === product.name
//     ).quantity = amount;
//     setCart(newCart);
//   };

  const removeFromCart = (productToRemove) => {
    setCart(
      cart.filter((product) => product !== productToRemove)
    );
  };

  return (
    <>
      <h1>Cart</h1>
      {cart.length > 0 && (
        <button onClick={clearCart}>Clear Cart</button>
      )}
      <div className="block1 row1">
        {cart.map((product, idx) => (
          <div className="product1" key={idx}>
            <h3>{product.name}</h3>
            <h4>${product.cost}</h4>
            {/* <input
              value={product.quantity}
              onChange={(e) =>
                setQuantity(
                  product,
                  parseInt(e.target.value)
                )
              }
            /> */}
                      <div className="col-2">
            <button onClick={() => onAdd(product)} className="add">
              +
            </button>
            <button onClick={() => onRemove(product)} className="remove">
              -
            </button>
          </div>
          <div className="col-2 text-right">
              {product.quantity} x ${product.cost.toFixed(2)}
          </div>
            <img src={product.image} alt={product.name} />
            <button onClick={() => removeFromCart(product)}>
              Remove
            </button>
          </div>
        ))}
      </div>

      <div>Total Cost: ${getTotalSum()}</div>
    </>
  );
}