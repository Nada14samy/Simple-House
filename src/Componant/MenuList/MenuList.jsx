import React, { useEffect, useState } from "react";
import "./MenuList.css";
const MenuList = () => {
  const [btn, setBtn] = useState('Beef');
  const [menu, setMenu] = useState([]);
  const [btnClick, setBtnClick] = useState([]);

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
      .then(res => res.json())
      .then(data => setBtnClick(data.meals))
  }, []);

  const handleClick = (event) => {
    setBtn(event.target.textContent);
  };

  useEffect(() => {
    if (btn) {
      fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${btn}`)
        .then(response => response.json())
        .then(data => setMenu(data.meals));
    }
  }, [btn]);

  return (
    <>
      <div className="mb-5 w-11/12 flex flex-wrap justify-center">
        {btnClick.map((item, index) => (
          <button key={index} className="bg-white font-medium text-emerald-800 border-2 border-emerald-800 m-2 px-6 py-2 text-xl" onClick={handleClick}>{item.strCategory}</button>
        ))}
      </div>
      <div className="category w-11/12 flex flex-wrap my-1">
        {menu.map((item, index) => (
          <div key={index} className="card w-52 h-fit my-7 px-2">
            <img src={item.strMealThumb} alt={item.strMeal} />
            <h3 className="text-xl text-slate-400 my-5 pl-2">{item.strMeal.substring(0, 15)}....</h3>
            <p className="text-xs opacity-60 pl-2">Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default MenuList;