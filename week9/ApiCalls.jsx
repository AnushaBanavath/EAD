import React, { useEffect, useState } from "react";

const ApiCalls = () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [print, setPrint] = useState([]);

  // async function to fetch data
  const getData = async (apiCall) => {
    const response = await fetch(apiCall);
    console.log(response);
    const data = await response.json();
    console.log(data);
    setPrint(data);
  };

  // useEffect should be outside of getData and inside component
  useEffect(function() {
    getData(url);
  }, []);

  return (
    <div>
      {
        print.map(function(eachItems){
          return (
            <div> 
              <h1>{eachItems.name}</h1>
              <h4>{eachItems.username}</h4>
              <h4>{eachItems.email}</h4>
              <h4>{eachItems.address.street}</h4>
              <h4>{eachItems.address.suite}</h4>
              <h4>{eachItems.address.city}</h4>
              <h4>{eachItems.address.zipcode}</h4>
              <h4>{eachItems.phone}</h4>
              <h4>{eachItems.website}</h4>
            </div>
          );
        })
      }
    </div>
  );
};

export default ApiCalls;
