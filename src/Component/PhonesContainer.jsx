import React, { useEffect, useState } from "react";
import PhoneCard from "./PhoneCard";
const PhonesContainer = ({ Phones }) => {
  const [displayPhones, setDisplayPhones] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (showAll) {
      setDisplayPhones(Phones);
    } else {
      setDisplayPhones(Phones.slice(0, 6));
    }
  }, [Phones, showAll]);
  return (
    <div className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {displayPhones.map((phone) => (
          <PhoneCard key={phone.id} phone={phone}></PhoneCard>
        ))}
      </div>
      <button onClick={() => setShowAll(!showAll)} className="btn btn-primary">
       { showAll?"Show Less":"Show ALL"}
      </button>
    </div>
  );
};
export default PhonesContainer;
