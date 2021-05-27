import styles from "../styles/Home.module.css";

import { React, useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";



export default function Home() {
  const [listCards, setlistCards] = useState([]);
  const fetchAPI = () => {
    axios
      .get("https://api.pokemontcg.io/v1/cards?pages=1&pageSize=10")
      .then((result) => {
        setlistCards(result.data.cards);
      })
      .catch((err) => {});
  };
  useEffect(() => {
    fetchAPI();
  }, []);
  return (
    <div className={styles.container}>
        {listCards.map((card, i) => (
          <Link  key={i} href={`/get/${card.id}`}>
          <div  style={{ width: 230, float: "left" }}>
            <div style={{ margin: 10 }}>
              <img src={card.imageUrl} style={{ width: 200 }} />
            </div>
          </div>
          </Link>
         
        ))}
    </div>
  );
}
