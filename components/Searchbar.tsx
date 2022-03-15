import styles from '../styles/Searchbar.module.scss';

const Searchbar = ({ SetSearchCoin}:any) => {


      const handleChange = ( e: React.ChangeEvent<HTMLInputElement> ) => {
              SetSearchCoin(e.target.value.toLowerCase());
      };

    return (
        <div className={styles.coin__search}>
            <input className="form-control"  type='text' placeholder='Search'  onChange={handleChange}/>
        </div>
    )
}
export default Searchbar
