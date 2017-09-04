import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import $ from "jquery";

var mobileMenu = new MobileMenu();
new RevealOnScroll($(".my-work__box"), "85%");
new RevealOnScroll($(".address__box"), "90%");