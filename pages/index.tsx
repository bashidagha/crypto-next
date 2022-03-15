import SearchBar from '../components/Searchbar'
import CoinList from '../components/CoinList'
import { GetServerSidePropsContext } from "next/types/index";
import styles from '../styles/Home.module.scss';
import logo from '../assets/download.svg'
import Image from 'next/image'
import {useState} from 'react'

export default function Home({coinData}:any) {

    const [searchCoin, SetSearchCoin] = useState<any>([]);

  console.log(coinData);
  return (
    <div className={styles.container}>
      <Image src={logo} alt="logo" className={styles.img_logo}/>
      <SearchBar  SetSearchCoin={SetSearchCoin}/>
      <CoinList coinData={coinData.filter((coin:any)=> coin.name.toLowerCase().includes(searchCoin))} />
    </div>
  )
}

export const getServerSideProps = async (  context: GetServerSidePropsContext) => {
  const apiResponse = await fetch(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false',
  );
  const coinData = await apiResponse.json();
  return ({
    props: {
      coinData,
    },
  });
};
