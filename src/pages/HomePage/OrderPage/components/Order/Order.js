import { OrderItem } from "../OrderItem/OrderItem.js"
import './style.css';
export const Order = (props) => {
    const { items } = props

    const element = document.createElement('main')
    element.classList.add('order')
    element.innerHTML = `
        <div class="order__content container">
            <h1>Vaše objedávnka</h1>
            <p class="empty-order empty-order--hide">Zatím nemáte nic objednáno</p>
            <div class="order__items"></div>
        </div>

    `

    if (items === 'loading') {

        fetch(`https://cafelora.kodim.app/api/me/drinks`, {
                method: 'GET',
                headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            }
            ).then((response) => response.json())
            .then((data) => { 
                const newArray = data.result.filter((item) => item.ordered === true)
                if (newArray.length === 0) {
                    element.querySelector('.empty-order').classList.remove('empty-order--hide')
                } else {
                    element.querySelector('.order__items').append(
                    ...newArray.map((item) => OrderItem(item))
                    )
                }
            
        })

        return element
    }         

    return element

}