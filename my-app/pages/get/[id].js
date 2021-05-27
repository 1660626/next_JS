import { useRouter } from "next/router";
import { Image } from "antd";
import axios from "axios";
import { React, useEffect,useState } from "react";

const Get = ({ user }) => {
    console.log(user.card)
//   const router = useRouter();
//   const { id } = router.query;
//   const [Card, setCard] = useState({});

  
//   useEffect(() => {
//     axios
//     .get(`https://api.pokemontcg.io/v1/cards/${id}`)
//     .then((result) => {
//         setCard(result.data.card);
    
//     })
//     .catch((err) => {});
//   }, [id]);

  return <Image src={user.card.imageUrlHiRes} width={200}></Image>;
};


export async function getStaticPaths() {
    const res = await fetch('https://api.pokemontcg.io/v1/cards?pages=1&pageSize=3')
    const users = await res.json()
    const paths = users.cards.map((user) => ({
      params: { id: user.id.toString() },
    }))
  return { paths, fallback: false }
  }
  
  
  export async function getStaticProps({ params }) {
    const res = await fetch(`https://api.pokemontcg.io/v1/cards/${params.id}`)
    const user = await res.json()
    return { props: { user } }
  }
export default Get;
