import { useEffect, useState } from 'react'
import List from './components/List'
import { Prod } from './types/types';
import  './styles/home.css'


const Home: React.FC = () => {

    const [productos, setProductos] = useState<Array<Prod>>([]);
    const [modalVisible, toogleModal] = useState(false)
        
    const handleSubmit = ( event :React.FormEvent<HTMLFormElement>) =>{

        const value = event.target[0].value;
        
        event.preventDefault();
        
        const newProductos =   {
            id : +new Date,
            value,
            completed: false
           
        }
        
        if(value.length < 1){
            return;
        }
        
        setProductos([...productos, newProductos])
        
        event.target[0].value = ''

        toogleModal(false)
        
    }

    const handleDelete = (id: number) => {
        setTimeout(() => {
            setProductos(productos.filter(prod => prod.id !== id));
        }, 500);
    }


    const handleToogle = (id: number) => {
        setProductos( productos => productos.map(prod => prod.id == id ? {...prod , completed : !prod.completed }: {...prod}))
    }
    

    //Local Storage

    useEffect( () => {
        setTimeout(() => {
            localStorage.setItem('productos' , JSON.stringify(productos))
        }, 1000);
    },[productos])

    
    useEffect( () => {
        setTimeout(() => {
            setProductos( JSON.parse(localStorage.getItem('productos')!))
        }, 500);
        
    },[])
 
    return (
      
        <main className="container">
            <h1 className='title'>Supermarket list</h1>
            <h3 className='desc'>{productos.length} item(s)</h3>
        
            {
                modalVisible && (
                <form className='modal' onSubmit={handleSubmit} >
                    <h2 className='modalTitle'>Add item</h2>
                    <input className='modalInput' name='product' type="text" />
                    <div className='modalBotones'>
                    <button className='modalCancel' type='button' onClick={() => toogleModal(false)}> Cancel </button>
                    <button className='modalAdd' type='submit' > Add </button>
                    </div>
                </form>
                
                )
            }

                <List productos= {productos} handleToogle = {handleToogle} handleDelete = {handleDelete} />

            <button onClick={() => toogleModal(true)} className='addItem'>Add item</button>

        </main>
  )
}

export default Home