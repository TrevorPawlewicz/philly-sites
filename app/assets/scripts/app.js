// import the class from the JS file:
import MobileMenu from './modules/MobileMenu.js';
import RevealOnScroll from './modules/RevealOnScroll.js';
import $ from 'jquery';
import StickyHeader from './modules/StickyHeader.js';
import Modal from './modules/Modal.js';




// save new instance to our variables
var mobileMenu = new MobileMenu();
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "60%");
var stickyHeader = new StickyHeader();
var modal = new Modal();
