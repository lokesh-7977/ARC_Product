"use client"
import { useEffect } from "react";
import useRazorpay from "react-razorpay";


export default function Page() {
  const Razorpay = useRazorpay();

  const handlePayment = async () => {
    const order = await createOrder();

    const options = {
      key_id: "rzp_test_1DP5mmOlF5G5ag",
      amount: 100 * 100, // Amount in paise
      currency: "INR",
      name: "Acme Corp",
      description: "A Wild Sheep Chase",
      image: "https://example.com/your_logo",
      order_id: order.id,
      handler: (response : any) => {
        console.log(response);
      },
      prefill: {
        name: "Gaurav Kumar",
        email: "lokeshchowdary902@gmail.com",
        contact: "9999999999",
      },
    };

    const razorpayInstance = useRazorpay(options);
    razorpayInstance.open();
  };

  const createOrder = async () => {
    // Replace with your server-side code to create an order
    const order = {
      id: "order_EMBFqjDHEEn80l", // Replace with the actual order ID
    };
    return order;
  };

  useEffect(() => {
    handlePayment();
  }, []);

  return <div>Payment Page</div>;
}
