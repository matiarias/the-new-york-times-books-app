import React from "react";
import newYorkTimesLogo from "../../assets/the-new-york-times-logo.png";

const NavBar = () => {
  const days = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];

  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const fullDate = new Date();

  const day = days[fullDate.getDay()];

  const date = fullDate.getDate();

  const month = months[fullDate.getMonth()];

  const year = fullDate.getFullYear();

  return (
    <div className="relative w-full h-[80px] border-b-2 border-gray-300 flex flex-col justify-center items-center gap-1 md:gap-0">
      <div className="h-[30px] md:h-[40px]">
        <img
          className="h-full object-cover"
          src={newYorkTimesLogo}
          alt="the new york times logo"
        />
      </div>
      <div className="absolute mx-auto bottom-0 md:left-2 border-t-2 border-gray-300 md:border-none">
        <p className="text-xs md:text-base font-bold">
          {day}, {date} de {month}, {year}
        </p>
      </div>
    </div>
  );
};

export default NavBar;
