import React from "react";
import "./ItemList.css";
import { Items } from "../Items/Items.js";

export const ItemList = () => {
  return (
    <ul className="ItemList">
      <Items
        name="Стьюи Грифasdфин"
        src="https://cs4.pikabu.ru/images/previews_comm/2015-02_3/14236436694752.jpg"
      />
      <Items
        name="Стьasdюи Гриффин"
        src="https://cs4.pikabu.ru/images/previews_comm/2015-02_3/14236436694752.jpg"
      />
      <Items name="Стьюи Гриффин" />
      <Items
        name="Стьsadaюи Гриффин"
        src="https://cs4.pikabu.ru/images/previews_comm/2015-02_3/14236436694752.jpg"
      />
      <Items
        name="Стьюasdи Гриффин"
        src="https://cs4.pikabu.ru/images/previews_comm/2015-02_3/14236436694752.jpg"
      />
      <Items
        name="Стьюи Гриasdффин"
        src="https://cs4.pikabu.ru/images/previews_comm/2015-02_3/14236436694752.jpg"
      />
      <Items
        name="Стьюи Гриффин"
        src="https://cs4.pikabu.ru/images/previews_comm/2015-02_3/14236436694752.jpg"
      />
    </ul>
  );
};
