import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

const Product = ({ product }) => {
  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);
  const paypalRef = useRef();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: product.description,
                amount: {
                  currency_code: "MXN",
                  value: product.price,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          setPaidFor(true);
          console.log("La order pagada fue: ");
          console.log(order);
        },
        onError: err => {
          setError(err);
          console.error(err);
        },
      })
      .render(paypalRef.current);
  }, [product.description, product.price]);

  if (paidFor) {
    console.log("Avisar a Ordering");
    return (
      <div>
        <h1>Felicidades acabas de comprar {product.name}!</h1>
        <Image
          src="/imgs/mysterybox.jpeg"
          alt={product.description}
          width={200}
          height={200}
        />
      </div>
    );
  }

  return (
    <div>
      {error && <div>Chale! Ocurrió un error {error.message}</div>}
      <h1>
        {product.description} le vale, le cuesta ${product.price}
      </h1>
      <Image
        src="/imgs/mysterybox.jpeg"
        alt={product.description}
        width={200}
        height={200}
      />
      <div style={{ width: "80%", margin: "auto" }} ref={paypalRef} />
    </div>
  );
};

export default Product;
