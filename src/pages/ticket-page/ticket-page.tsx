import React from "react";
import "./_index.scss";
// @ts-ignore
import logo from "../../images/logo_30jahr.png";

export const TicketPage: React.FC = () => {
  return (
    <div className="ticket-page">
      <div className="ticket-page__logo-container">
        <img src={logo} alt="Logo der Timpel-Gäischter" />
      </div>
      <h1 className="ticket-page__title">Eintrittskarte</h1>
      <p className="ticket-page__text">
        Dieses Ticket berechtigt zum Eintritt in das Varieté der
        Timpel-Gäischter Brunnen vom 04.11.2022
      </p>
    </div>
  );
};
