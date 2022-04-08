import React, { useState } from 'react';

const HOME_GARDEN = 'home essentials';
// const UTILITY = 'utility';

export default function Products({ setCart, cart }) {

//    const [isDisabled, setIsDisabled] = useState(false);

  const [products] = useState([

    {
      category: HOME_GARDEN,
      name: 'Blanket 1',
      cost: 19.99,
      image:
        'https://tse4.mm.bing.net/th?id=OIP.jOyYlEZEnwuoquDZzhR6pgHaHa&pid=Api&P=0&w=169&h=169',
    },
    {
        category: HOME_GARDEN,
        name: 'Blanket 2',
        cost: 23,
        image:
          'https://tse1.mm.bing.net/th?id=OIP.xAhrl4_o6C6OABw6e2VpBwHaGM&pid=Api&P=0&w=197&h=164',
      },    {
        category: HOME_GARDEN,
        name: 'Blanket 3',
        cost: 12,
        image:
          'https://tse3.mm.bing.net/th?id=OIP.jpm2pOspBIKJFBQGLbhrvQHaHa&pid=Api&P=0&w=165&h=165',
      },    {
        category: HOME_GARDEN,
        name: 'Blanket 4',
        cost: 54,
        image:
          'https://tse2.mm.bing.net/th?id=OIP.xBHurkJW4DukWSfQHjklcgHaHa&pid=Api&P=0&w=165&h=165',
      },    {
        category: HOME_GARDEN,
        name: 'Blanket 5',
        cost: 33,
        image:
          'https://tse3.mm.bing.net/th?id=OIP.K6xrLodPYnQZ_bwitsXinwHaHa&pid=Api&P=0&w=175&h=175',
      },    {
        category: HOME_GARDEN,
        name: 'Blanket 6',
        cost: 15,
        image:
          'https://tse4.mm.bing.net/th?id=OIP.28-3cKXuoCKmwl2J3u4gwQHaHa&pid=Api&P=0&w=160&h=160',
      },
      {
        category: HOME_GARDEN,
        name: 'Blanket 7',
        cost: 100,
        image:
          'https://tse1.mm.bing.net/th?id=OIP.qHlw17qLGnl-2kq-qIwv2QHaFS&pid=Api&P=0&w=224&h=160',
      },    {
        category: HOME_GARDEN,
        name: 'Blanket 8',
        cost: 29.99,
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSpwdYDmUL_ZEqhLV7ZWRdQAU7DGcGaxtCt7SrTlL9umrQs2Un7rj9Nbb9Vq01RtEfA0eAVmdt-&usqp=CAc',
      },    {
        category: HOME_GARDEN,
        name: 'Blanket 9',
        cost: 41,
        image:
          'https://tse2.mm.bing.net/th?id=OIP.dCrj-hDdBdukPf4-K2SeFwHaHa&pid=Api&P=0&w=166&h=166',
      },
      {
        category: HOME_GARDEN,
        name: 'Blanket 10',
        cost: 9,
        image:
          'https://tse4.mm.bing.net/th?id=OIP.Lg32S9bRtPlS34yJfl0UFgHaEf&pid=Api&P=0&w=290&h=176',
      },{
        category: HOME_GARDEN,
        name: 'Blanket 11',
        cost: 12.29,
        image:
          'https://tse3.mm.bing.net/th?id=OIP.EVDEwswOIdvEoOxQt3RskAHaFx&pid=Api&P=0&w=213&h=166',
      },
      
  ]);

//   const disableTheButton = (product,idx) =>{
//     let newCart1 = [...cart];
//     let itemInCart1 = newCart1.find(
//       (item) => product.idx === item.idx
//     );

//     console.log(itemInCart1.quantity);
//     if(itemInCart1.quantity > 0){
//         console.log("disable it")
//         setIsDisabled(true);
//     }
//   }

  const addToCart = (product) => {
    let newCart = [...cart];
    let itemInCart = newCart.find(
      (item) => product.name === item.name
    );
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...product,
        quantity: 1,
      };
      newCart.push(itemInCart);
    }
    setCart(newCart);

 //   disableTheButton(product,idx);
    // setIsDisabled(true);
  };

  const [category] = useState(HOME_GARDEN);

  const getProductsInCategory = () => {
    return products.filter(
      (product) => product.category === category
    );
  };


  return (
    <>
      <h1>PRODUCTS</h1>
      {/* <select onChange={(e) => setCategory(e.target.value)}>
        <option value={HOME_GARDEN}>{HOME_GARDEN}</option>
        {/* <option value={UTILITY}>{UTILITY}</option> 
      </select> */}
      <h5>Home Blankets</h5>
      <div className="block row">
        {getProductsInCategory().map((product, idx) => (
          <div className="product" key={idx}>
            <h3>{product.name}</h3>
            <h4>${product.cost}</h4>
            <img src={product.image} alt={product.name} />
            {/* <button onClick={() => addToCart(product,idx) }> */}
            <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
}