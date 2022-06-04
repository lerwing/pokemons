import { FC, HTMLAttributes } from "react";
import "./Collection.scss"



const Collection:FC<HTMLAttributes<HTMLElement>> = (props) => {
    return (
        <main {...props} className='page-сollection' >
            <h1 className="title-page">Ваша коллекция</h1>
        </main>
    );
};

export default Collection