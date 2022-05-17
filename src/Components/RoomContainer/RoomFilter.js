import React from "react";
import { useContext } from "react";
import { RoomContext } from "../../context";
import Title from "../Title";
import "./filter.css";

const getUniqueId = (items, value)=>{
   return [...new Set(items.map(item=>item[value]))]
}

export default function Roomfilter({rooms}) {
  const context = useContext(RoomContext);
  const {
    handleChange,
    price,
    type,
    capacity,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = context;

//   getUnique
  let types = getUniqueId(rooms, 'type');
  types = ['all', ...types];

  types = types.map((item, index) =>{
     return <option value={item} key={index}>{item}</option>;
  })
  let people = getUniqueId(rooms, 'capacity');
  people = people.map((item, index) =>{
      return <option value={item} key={index}>{item}</option>
   })
  return (
    <section className="filter-container">
      <Title title="Filter Rooms" />
      <from className="filter-form">
        {/* type */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select 
            name="type"
            id="type"
            value={type}
            onChange={handleChange}
            className="form-control"
          >
             {types}
          </select>
        </div>
        {/* Guest */}
        <div className="form-group">
          <label htmlFor="capacity">Guest</label>
          <select 
            name="capacity"
            id="capacity"
            value={capacity}
            onChange={handleChange}
            className="form-control"
          >
             {people}
          </select>
        </div>
        {/* price */}
        <div className="form-group">
          <label htmlFor="price">room price ${price}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {/* size */}
        <div className="form-group">
          <label htmlFor="price">room size </label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              value={minSize}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxSize"
              value={maxSize}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div>
        {/* extras */}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">pets</label>
          </div>
        </div>
        {/* end of extras type */}
      </from>
    </section>
  );
}
