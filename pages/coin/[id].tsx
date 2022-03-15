import { GetServerSidePropsContext } from "next/types/index";


export default function Coin({coinData}:any) {

  console.log(coinData);



  return (
    <div style={{textAlign:"center", paddingTop:"2rem" , border:"2px solid yellow" , maxWidth:"20rem",borderRadius:"1rem", margin:"0 auto",marginTop:"2rem"}}>
      <img src={coinData.image.large} alt={coinData.name} style={{maxWidth:"8rem"}}/>
      <h1>{coinData.name}</h1>
      <h2>{coinData.market_data.current_price.usd} $</h2>
    </div>
  )
}

export const getServerSideProps = async (  context: GetServerSidePropsContext) => {
    const { id } = context.query;

    const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
    const coinData = await res.json();
  return ({
    props: {
      coinData,
    },
  });
};
