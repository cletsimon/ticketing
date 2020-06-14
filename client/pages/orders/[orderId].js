import { useEffect, useState } from 'react';

const OrderShow = ({ order }) => {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const findtimeLeft = () => {
      const msLeft = new Date(order.expiresAt) - new Date();
      setTimeLeft(Math.round(msLeft / 1000));
    };

    findtimeLeft();
    const timerId = setInterval(findtimeLeft, 1000);

    // stop the interval as soon that we navigate to other component
    return () => {
      clearInterval(timerId);
    };
  }, [order]);

  return <div>Time left to pay: {timeLeft} seconds </div>;
};

OrderShow.getInitialProps = async (context, client) => {
  const { orderId } = context.query;
  const { data } = await client.get(`/api/orders/${orderId}`);

  return { order: data };
};

export default OrderShow;
