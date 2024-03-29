import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";


export function Search() {
    const query = useQuery();
    const search = query.get("search");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
       // navigate("/?search=" + searchText);
    };
    return (
        <form className={styles.searchContainer} onSubmit={handleSubmit}>
            <div className={styles.searchBox}>
                <input 
                className={styles.searchInput} 
                type="text" 
                value={search} 
                placeholder="Title"
                aria-label="Search movies"
                onChange={(e) => {
                    const value = e.target.value;
                    navigate("/?search=" + value);
                }} 
                 />
                <FaSearch size= {20} className={styles.searchButton}/>
            </div>
      </form>
    )
}