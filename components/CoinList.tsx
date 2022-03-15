import styles from '../styles/CoinList.module.scss';
import Coin from './Coin'

const CoinList = ({coinData}:any) => {



    return (
        <div className={styles.coin_list}>
            {
                coinData?.map((coin:any)=>(<Coin  coin_data={coin} key={coin.id}/>))
            }
        </div>
    )
}
export default CoinList
