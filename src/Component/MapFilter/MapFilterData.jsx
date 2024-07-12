import React, { useEffect, useState } from "react";

const MapFilterData = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  const mapData = () => {
    let filterData = users.filter((user) => {
      return user.name.includes("a");
    });
    console.log(filterData);
  };

  return (
    <>
      <div className="bg-gray-100 min-h-screen flex flex-col items-center p-4">
        <div className="w-full max-w-4xl">
          <h1 className="font-bold text-2xl mb-6 text-center">
            Users Testing the Data
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {users.slice(0, 6).map((user) => {
              const { street, suite, city, zipcode, geo } = user.address;
              return (
                <div
                  key={user.id}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <h4 className="font-bold text-lg mb-2">{user.name}</h4>
                  <p className="text-gray-600">{user.username}</p>
                  <p className="text-gray-600">{user.email}</p>
                  <p className="text-gray-600">
                    {street},{suite}
                  </p>
                  <p className="text-gray-600">
                    {city},{zipcode}
                  </p>
                  <p className="text-gray-600">
                    {geo.lat},{geo.lng}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <button
              className="bg-gray-600 text-white shadow-lg shadow-amber-950 p-2 rounded-2xl text-center"
              onClick={mapData}
            >
              Click To Check
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MapFilterData;
