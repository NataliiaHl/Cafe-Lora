import './style.css';
import { Layer } from '../../Layer/Layer.js';

export const Drink = (props) => {
    const { id, name, ordered, image, layers } = props

const element = document.createElement('div')
element.classList.add('drink')

element.innerHTML = `
    <div class="drink__product">
        <div class="drink__cup">
            <img src=${image}>
        </div>
        <div class="drink__info">
            <h3>${name}</h3>
            <div class="layers">
            </div>
        </div>
    </div>
    <div class="drink__controls">
    <button class="order-btn">
        Objednat
    </button>
    </div>
`

element.querySelector('.layers').append(
    ...layers.map((layer) => Layer({ color: layer.color, label: layer.label }))
    
)

const btnEl = element.querySelector('.order-btn')

if (ordered) {
    btnEl.classList.add('order-btn--ordered')
    btnEl.textContent = 'Zrušit'
} else {
    btnEl.classList.remove('order-btn--ordered')
    btnEl.textContent = 'Objednat'
}

const orderDrink = () => {
    fetch(`https://cafelora.kodim.app/api/me/drinks/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({
        ordered: !ordered
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        element.replaceWith(
          Drink( data.result )
        );
      });
    
}

btnEl.addEventListener('click', orderDrink)

return element

}