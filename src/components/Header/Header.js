import './style.css';
import { HomePage } from '../../pages/HomePage/HomePage.js';

export const Header = (props) => {
    const { showMenu } = props

    const element = document.createElement('header')

    if (showMenu ) {

        element.innerHTML = `
            <div class="header__content container" id="home">
                <div class="site-logo"></div>
                <div class="navigation">
                <button class="nav-btn"></button>
                <nav class="rollout-nav nav-closed">
                    <a href="#home">domů</a>
                    <a href="#menu">menu</a>
                    <a href="#gallery">galerie</a>
                    <a href="#contact">kontakt</a>
                </nav>
                </div>
            </div>
        `
    } else {
        element.innerHTML = `
        <div class="header__content container" id="home">
            <div class="site-logo"></div>
            <div class="navigation">
            <button class="nav-btn"></button>
            <nav class="rollout-nav nav-closed">
                <a href="/">domů</a>
            </nav>
            </div>
        </div>
    `  
    }

    element.querySelector('.nav-btn').addEventListener('click', () => {
        element.querySelector('.rollout-nav').classList.toggle('nav-closed')
    })

    element.querySelector('.rollout-nav').addEventListener('click', () => {
        element.querySelector('nav').classList.add('nav-closed')
    })

    return element
}