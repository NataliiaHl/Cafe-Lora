import './style.css';
import { Header } from '../../../components/Header/Header.js';
import { Footer } from '../../../components/Footer/Footer.js';
import { Order } from './components/Order/Order';

export const OrderPage = () => {
    
    const pageElement = document.createElement('div')
    pageElement.classList.add('page')

    pageElement.append(Header({showMenu: false}), Order({items: 'loading'}), Footer())

    return pageElement
}