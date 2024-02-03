import { changeThemeBtnSlider } from "./renderMainApp.js";
export function changeTheme() {
    changeThemeBtnSlider.classList.toggle('switched');
    document.body.classList.toggle('dark-theme');
}   