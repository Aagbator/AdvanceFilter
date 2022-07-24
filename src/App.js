import React, { useState, useEffect } from "react";
import "./styles.css";
import Events from "./events.json";
import Event from "./components/event";
import FilterInput from "./components/filterInput";

export default function App() {
  const initialFilters = [
    { inputType: "text", name: "city", value: "" },
    { inputType: "text", name: "price", value: "" },
    { inputType: "checkBox", name: "filterByCheapest", value: false }
  ];

  const [events, setEvents] = useState([]);
  const [filters, setFilters] = useState(initialFilters);

  useEffect(() => {
    setEvents(Events);
  }, []);

  const changeFilter = (name, value) => {
    const newFilters = filters.map((filter) => {
      if (filter.name === name) {
        return { ...filter, value: value };
      }
      return filter;
    });

    setFilters(newFilters);
  };

  const resetFilter = () => {
    setFilters(initialFilters);
    setEvents(Events);
  };

  const applyFilter = () => {
    let filteredEvents = [];

    filteredEvents = events.filter(function (event) {
      let x;
      x = filters.some((filter) => {
        if (filter.name === "city") {
          return event.city.includes(filter.value);
        }

        if (filter.name === "price") {
          return event.minPrice == filter.value;
        }

        // if (filter.name === "filterByCheapest") {
        //   if (filter.value) {
        //     if (event.minPrice < 100) {
        //       console.log("filterByCheapest ", event.minPrice);
        //       return event.minPrice < 100;
        //     }
        //   }
        // }
        return false;
      });
      return x;
    });

    // var result = data.filter(function(e) {
    //   return keys.every(function(a) {
    //     return values.includes(e[a])
    //   })
    // })

    // if (order['orderBuyerStatus'] === statusFilter
    // && order['vendorName'] === supplierFilter){
    //   return true;
    // }
    // return currentElement > 3 && currentElement < 17;

    // filters.forEach((filter) => {
    //   const filterKey = filter.name;
    //   if (filterKey === "city") {
    //     filteredEvents = events.filter((event) => {
    //       return event.city.includes(filter.value);
    //     });
    //   }

    //   if (filterKey === "price") {
    //     filteredEvents = events.filter((event) => {
    //       return event.minPrice == filter.value;
    //     });
    //   }

    //   return false;
    // });

    // filters.forEach((filter) => {
    //   const filterKey = filter.name;
    //   if (filterKey === "city") {
    //     console.log(filterKey)
    //     filteredEvents = events.filter((event) => {
    //       return event.city.includes(filter.value);
    //     });
    //   }

    //   if (filterKey === "price") {
    //     filteredEvents = events.filter((event) => {
    //       return event.minPrice === filter.value;
    //   });

    //   // } else if (filterKey === "filterByCheapest") {
    //   //   // filteredEvents = events.filter(event.nam)
    //   }
    // });

    console.log(filteredEvents);
  };

  return (
    <div className="App">
      <h1>React App</h1>
      <p>Filter events by city and price</p>
      <div>
        <button onClick={resetFilter}>Reset Form</button>
        <button onClick={applyFilter}>Apply Filter</button>
      </div>
      <div className="filter-form">
        {filters.map((filter) => (
          <FilterInput
            key={filter.name}
            changeFilter={changeFilter}
            {...filter}
          />
        ))}
      </div>

      <div>
        <h1>Event Results {events.length}</h1>
        <div>
          {events.map((event) => (
            <Event key={event.id} {...event} />
          ))}
        </div>
      </div>
    </div>
  );
}
