import { FC, HTMLAttributes } from "react";
import { FormSearch } from "../../components";
import "./Search.scss"



const Search:FC<HTMLAttributes<HTMLElement>> = (props) => {
    return (
        <main {...props} className='page-search' >
            <h1 className="title-page">Поймайте покемона</h1>
            <FormSearch/>
        </main>
    );
};

export default Search