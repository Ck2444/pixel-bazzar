import React, { useEffect, useState } from 'react'
import Cart from './Cart';
import GoodsList from './GoodsList';
import Preloader from './Preloader';
import BasketList from './BasketList';
import Alert from './Alert';

export default function Shop() {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading]= useState(true);
    const [order, setOrder]= useState([]);
 
    const [isBasketShow, setBasketShow]=useState(false)
    const [alertName, setArertName] = useState('');
  

    const addToBasket =(item)=> {
        const itemIndex = order.findIndex(orderItem => orderItem.mainId === item.mainId);

        if(itemIndex<0) {

            const newItem = {
                ...item,
                quantity:1,
            }
            
            setOrder([...order, newItem])

        } else {
            const newOrder = order.map(orderItem => {
                if (orderItem.mainId === item.mainId) {
                    return {...orderItem, quantity: orderItem.quantity + 1};
                }
                return orderItem;
            });
        
            setOrder(newOrder)
        }
        setArertName(item.displayName)
    }

    const removeFromBacket =(itemId)=> {
        const newOrder = order.filter(el=>el.mainId !== itemId) 
        setOrder(newOrder);
    }

    const incQuantity = (itemId)=>{
        const newOrder = order.map(el=> {
            if(el.mainId===itemId){
                const newQuantity = el.quantity +1;
                return{
                    ...el,
                    quantity: newQuantity
                }
            } else {
                return el;
            }
        });
        setOrder(newOrder)
    }

    const decQuantity = (itemId) => {
        const productIndex = order.findIndex(el => el.mainId === itemId);
        if (productIndex !== -1) {
            if (order[productIndex].quantity === 1) {
                // Если количество равно 1, удаляем элемент из массива
                const newOrder = order.filter(el => el.mainId !== itemId);
                setOrder(newOrder); // Обновляем состояние
            } else {
                // Клонируем массив и уменьшаем количество на 1
                const newOrder = [...order];
                newOrder[productIndex].quantity--;
                setOrder(newOrder); // Обновляем состояние
            }
        }
    };
    
    


    const handelBasketShow = () => {
        setBasketShow(!isBasketShow)
    }    

    const closeAlert =() => {
        setArertName('')
    }
    useEffect(function getGoods(){
        fetch('https://fortniteapi.io/v2/shop?lang=de', {
            headers: {
                "Authorization": 'd3797db5-a0c25b1c-202bf67f-c5f671e8' 
            },
        })
        .then(response=> response.json())
        .then(data=>{
            data.shop &&  setGoods(data.shop)
            setLoading(false);
        })
    },[]);

  return (
    <main className='container content'>
        <Cart quantity ={order.length} handelBasketShow={handelBasketShow}/>
        {
            loading ?  
            (<Preloader/> 
            ):( 
            <GoodsList goods={goods} addToBasket={addToBasket}/>
        )}
        {
            isBasketShow && (<BasketList order={order} 
            handelBasketShow={handelBasketShow} 
            removeFromBacket={removeFromBacket}
            incQuantity={incQuantity}
            decQuantity={decQuantity}
            />
        )}

        {
            alertName && <Alert name={alertName} closeAlert={closeAlert}/>
        }
    </main>
  )
}
