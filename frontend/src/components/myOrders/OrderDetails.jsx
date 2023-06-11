import React from "react";

const OrderDetails = () => {
  return (
    <>
      <section className="orderDetails">
        <main>
          <h1>Order Details</h1>
          <div>
            <h1>Shipping</h1>
            <p>
              <b>Address</b>
              {"24-south paramgana,kolkata,west Bengal"}
            </p>
          </div>
          <div>
            <h1>Contact</h1>
            <p>
              <b>Name</b>
              {"Navneet Singh"}
            </p>
            <p>
              <b>Phone</b>
              {"62743274992"}
            </p>
          </div>
          <div>
            <h1>Status</h1>
            <p>
              <b>Order Status</b>
              {"Preparing..."}
            </p>
            <p>
              <b>Places At</b>
              {"2023-06-11"}
            </p>
            <p>
              <b>Delivered At</b>
              {"2023-06-11"}
            </p>
          </div>
          <div>
            <h1>Payment</h1>
            <p>
              <b>Payment Method</b>
              {"Online"}
            </p>
            <p>
              <b>Payment Reference </b>
              {"dneibfwebnfke"}
            </p>
            <p>
              <b>Paid At</b>
              {"2023-06-11"}
            </p>
          </div>
          <div>
            <h1>Amount</h1>
            <p>
              <b>Items Total</b>₹{13133}
            </p>
            <p>
              <b>Shipping Charges</b>₹{90}
            </p>
            <p>
              <b>Tax</b>₹{180}
            </p>
            <p>
              <b>Total</b>₹{13133 + 90 + 180}
            </p>
          </div>

          <article>
            <h1>Ordered Items</h1>
            <div>
              <h4>Cheese Burger</h4>
              <div>
                <span>{2}</span> X <span>{345}</span>
              </div>
            </div>
            <div>
              <h4>Veg Cheese Burger</h4>
              <div>
                <span>{10}</span> X <span>{234}</span>
              </div>
            </div>
            <div>
              <h4>Burger Fries</h4>
              <div>
                <span>{10}</span> X <span>{410}</span>
              </div>
            </div>

            <div>
              <h4 style={{ fontWeight: 800 }}>Sub Total</h4>
              <div style={{ fontWeight: 800 }}>₹{32211}</div>
            </div>
          </article>
        </main>
      </section>
    </>
  );
};

export default OrderDetails;
