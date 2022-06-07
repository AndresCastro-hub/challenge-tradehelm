import { Props } from "../types/types";

const List: React.FC<Props> = ({productos, handleDelete, handleToogle}) => {

    const styles = {
        Active: {
            textDecoration: 'line-through',
            cursor: 'pointer'
        },
        Disabled:{
            textDecoration: 'none',
            cursor:'pointer'
        }
    }

    return (
        <ul>
        {
            productos.map ( prod => (
                
                <div key={prod.id} className='contenedor'>

                <li 
                   
                    onClick={() => handleToogle (prod.id) }  
                    style={ prod.completed ? styles.Active : styles.Disabled }>
                        {prod.value}
                </li>
                    <button className='delete' onClick={() => handleDelete(prod.id)}>delete</button>
                </div>

            )) 
        }
    </ul>
    )
}

export default List;