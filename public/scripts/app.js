// choose btn for dark mode
const themeModeBtns = document.querySelectorAll(".toggle-theme")
const submenu = document.querySelector(".submenu")
const submenuBtn = document.querySelector(".submenu-open-btn")
const navOpenBtn = document.querySelector(".nav-icon")
const nav = document.querySelector(".mobile-nav")
const navCloseBtn = document.querySelector(".nav-close-btn")
const overlay = document.querySelector(".overlay")
const cartOpenBtn = document.querySelector(".cart-icon")
const mobileCart = document.querySelector(".mobile-cart")
const cartCloseBtn = document.querySelector(".cart-close-btn")

submenuBtn.addEventListener("click", (e) => {
    submenu.classList.toggle("submenu--open")
    e.currentTarget.parentElement.classList.toggle("text-orange-300")
})

themeModeBtns.forEach(btn => {
    btn.addEventListener("click", function () {
        document.documentElement.classList.toggle("dark")

        if (localStorage.theme === "dark") {
            localStorage.theme = "light"
        } else {
            localStorage.setItem("theme", "dark")
        }
    })
})

navOpenBtn.addEventListener("click", () => openCloseHandler("nav", "open"))
navCloseBtn.addEventListener("click", () => openCloseHandler("nav", "close"))
overlay.addEventListener("click", () => openCloseHandler("nav", "close"))
cartOpenBtn.addEventListener("click", () => openCloseHandler("cart", "open"))
cartCloseBtn.addEventListener("click", () => openCloseHandler("cart", "close"))
overlay.addEventListener("click", () => openCloseHandler("cart", "close"))

function openCloseHandler(navCart, openClose) {
    if (navCart === "nav") {
        if (openClose === "open") {
            nav.classList.remove("-right-64")
            nav.classList.add("right-0")
        } else {
            nav.classList.remove("right-0")
            nav.classList.add("-right-64")
        }
    } else {
        if (openClose === "open") {
            mobileCart.classList.remove("-left-64")
            mobileCart.classList.add("left-0")
        } else {
            mobileCart.classList.remove("left-0")
            mobileCart.classList.add("-left-64")
        }
    }
    openClose === "open" ? overlay.classList.add("overlay--visible") : overlay.classList.remove("overlay--visible")
}

//check local srorage for last theme
const themeMode = localStorage.getItem("theme")

//choose theme as user choosing
themeMode === "dark" ? document.documentElement.classList.add("dark") : "";


