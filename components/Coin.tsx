import styles from '../styles/coin.module.scss';
import { useRouter } from 'next/router';

const Coin = ({coin_data}:any) => {
  const router = useRouter();


    return (
        <div className={styles.coin} onClick={()=>router.push(`/coin/${coin_data.id}`)}>
          <div className={styles.coin_img}><img src={coin_data.image} style={{flexGrow:"1"}} alt={coin_data.name}/></div>
          <div className={styles.coin_name}>{coin_data.name}</div>
          <div className={styles.price}>{coin_data.current_price}</div>
          <div className={coin_data.price_change_24h>0? styles.price_up:styles.price_down}>{Number((coin_data.price_change_24h).toFixed(4))} $</div>
          <div className={styles.market_cap}>Mkt Cap: $ {coin_data.market_cap}</div>
        </div>
    )
}
export default Coin
