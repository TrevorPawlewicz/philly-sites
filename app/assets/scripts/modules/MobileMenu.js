//var $ = require('jquery'); // ES5
import $ from 'jquery'; // ES6 same as ES5

class MobileMenu {
    constructor() {
        this.siteHeader = $(".site-header");
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
        this.siteHeader.toggleClass("site-header--is-expanded");
        this.menuIcon.toggleClass("site-header__menu-icon--close-x");
    }
};

//module.exports = MobileMenu; // ES5
export default MobileMenu; // ES6 same as ES5
