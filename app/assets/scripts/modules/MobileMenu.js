//var $ = require('jquery'); // ES5
import $ from 'jquery'; // ES6 same as ES5

class MobileMenu {
    constructor() {
        this.menuIcon = $(".site-header__menu-icon");
        this.menuContent = $(".site-header__menu-content");
        this.events();

    }
    // our events function
    events() {
        this.menuIcon.click(this.toggleMenu.bind(this));
    }

    toggleMenu() {
        //               jQuery func
        this.menuContent.toggleClass("site-header__menu-content--is-visible");
    }
};

//module.exports = MobileMenu; // ES5
export default MobileMenu; // ES6 same as ES5
