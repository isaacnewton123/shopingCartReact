import { useState } from "react";
import Produk from "./components/produk";
import Cart from "./components/cart";
import rumah from "./assets/images/rumah.jpg";
import sawah from "./assets/images/sawah.jpeg";
import motor from "./assets/images/motor.jpg";

/**
 * Description placeholder
 *
 * @returns {*} 
 */
function App() {
  const initialProduk = [
    {
      id: Math.floor(Math.random() * 1000),
      name: "Rumah",
      price: 99_999,
      stok: 5,
      image: rumah,
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Sawah",
      price: 49_999,
      stok: 2,
      image: sawah,
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Motor",
      price: 19_999,
      stok: 10,
      image: motor,
    },
  ];

  const [produk, setProduk] = useState(initialProduk);
  const [cart, setCart] = useState([]);

  function handleToggleAddToCart(item) {
    if (item.stok <= 0) {
      console.log(`Stok Habis Guys`);
      return;
    }

    setProduk((prevProduk) => {
      const mappingProduk = prevProduk.map((a) => {
        if (a.id === item.id) {
          return { ...a, stok: a.stok - 1 };
        } else {
          return a;
        }
      });
      return mappingProduk;
    });

    setCart((prevCart) => {
      const itemCart = prevCart.find((b) => {
        return b.id === item.id;
      });

      if (itemCart) {
        const mappingcart = prevCart.map((c) => {
          if (c.id === item.id) {
            return { ...c, amount: c.amount + 1 };
          } else {
            return c;
          }
        });
        return mappingcart;
      } else {
        // eslint-disable-next-line no-unused-vars
        const { stok, ...itemForCart } = item;
        const newCartItem = { ...itemForCart, amount: 1 };
        return [...prevCart, newCartItem];
      }
    });
  }

  function handleAddAmount(item) {
    
    const itemFind = produk.find((a) => a.id === item.id);

    if (!itemFind || itemFind.stok <= 0) {
      console.log(`Stok Habis`);
      return;
    }

    setCart((prevCart) => {
      const mappingCart = prevCart.map((b) => {
        if (b.id === item.id) {
          return { ...b, amount: b.amount + 1 };
        } else {
          return b;
        }
      });
      return mappingCart;
    });

    setProduk((prevProduk) => {
      const mappingProduk = prevProduk.map((c) => {
        if (c.id === item.id) {
          return { ...c, stok: c.stok - 1 };
        } else {
          return c;
        }
      });
      return mappingProduk;
    });
  }

  function handleReduceCart(item) {
    if (item.amount <= 1) {
      handleDelete(item);
      return;
    }

    setCart((prevCart) => {
      const mappingCart = prevCart.map((a) => {
        if (a.id === item.id) {
          return { ...a, amount: a.amount - 1 };
        } else {
          return a;
        }
      });
      return mappingCart;
    });

    setProduk((prevProduk) => {
      const mappingProduk = prevProduk.map((b) => {
        if (b.id === item.id) {
          return { ...b, stok: b.stok + 1 };
        } else {
          return b;
        }
      });
      return mappingProduk;
    });
  }

  function handleDelete(item) {
    setProduk((prevProduk) => {
      const delCart = prevProduk.map((p) => {
        if (p.id === item.id) {
          return { ...p, stok: p.stok + item.amount };
        } else {
          return p;
        }
      });
      return delCart;
    });

    setCart((prevCart) => prevCart.filter((c) => c.id !== item.id));
  }

  function totalAllCart(item) {
    return item.reduce((acumulation, object) => {
      return acumulation + object.price * object.amount;
    }, 0);
  }

  return (
    <div className="w-screen h-screen flex flex-col md:flex-row">
      <Produk produk={produk} onToggle={handleToggleAddToCart} />
      <Cart
        produk={cart}
        total={totalAllCart(cart)}
        onReduc={handleReduceCart}
        onAdd={handleAddAmount}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;