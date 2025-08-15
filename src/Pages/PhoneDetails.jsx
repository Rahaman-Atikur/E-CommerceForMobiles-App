import React from "react";
import { useLoaderData, useParams } from "react-router";
const PhoneDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const singlePhone = data.find((phone) => phone.id === parseInt(id));
  console.log(singlePhone);
  const { name, brand, image } = singlePhone;

  return (
    <div>
      <h1 className="font-extrabold text-4xl">{name}</h1>
      <h2 className="font-bold text-2xl">{brand}</h2>
      <img className="w-full" src={image} alt="" />
    </div>
  );
};
export default PhoneDetails;
