import React, { useState, useEffect } from 'react';

const Notif: React.FC = () => {
  const notifContent: string[] = [
    "Discover the Ray-Ban RED Community",
    "Return Within 45 days of Receiving Shipment",
    "Enjoy Free Standard Shipping on all Orders"
  ];

  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % notifContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black text-white flex items-center justify-between p-4">
      <p className="mx-auto font-light">
        {notifContent[index]}
      </p>
      <p className="font-light whitespace-nowrap">
        Our Services & Eye Exam
      </p>
    </div>
  );
};

export default Notif;