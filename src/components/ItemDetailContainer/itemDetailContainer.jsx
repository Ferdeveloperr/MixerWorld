import { useState, useEffect } from 'react'
import { getDoc, doc, getFirestore } from 'firebase/firestore'
import ItemDetail from './itemDetail'
import { useParams } from 'react-router-dom'
import Item from '../item'


const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const [productos, setProductos] = useState();
    const id = useParams().id;

    useEffect(() => {
        const db = getFirestore();


        const oneItem = doc(db, "Parlantes", id);
        getDoc(oneItem)
            .then((resp) => {
                setItem(
                    { ...resp.data(), id: resp.id });
                setProductos([resp.data()]);
            })
            .catch((error) => {
                console.error("Error fetching item:", error);
            });
    }, [id]);

    return (
        <div>
            {item && <ItemDetail productos={productos} />}
        </div>
    );
}

export default ItemDetailContainer;
