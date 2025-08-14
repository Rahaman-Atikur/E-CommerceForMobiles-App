import React from "react";
import { useLoaderData, useParams } from "react-router";

const PhoneDetails = () => {
  const data = useLoaderData();
  const params = useParams();
  const singlePhone = data.find(phone=>phone.id===parseInt(id))
  console.log(params);
  return (
    <div>
      <h5>Phone Details</h5>
    </div>
  );
};

export default PhoneDetails;
