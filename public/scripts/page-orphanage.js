const options = {
    daragging:false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZooom: false,
    zoomControl: false
}
// get values from html
const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng

// create map
const map = L.map('mapid').setView([lat,lng], 15)

// create and add tilelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

// create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29, 68],
    popupAnchor: [170,2]
})

// create popup overlay
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Lar das meninas <a href="/orphanage?id=1" class="choose-orphanage"><img src="/images/arrow-white.svg"></a>')

// create and add marker
L.marker([lat,lng], {icon})
.addTo(map)

/*Image gallery*/ 

function selectImage (event) {
    const button = event.currentTarget

    // remover todas as classe ativas
    const buttons = document.querySelectorAll(".images button")
    
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button) {
        button.classList.remove("active")
    }

    // selecionar a imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    // atualizar o conteiner de img
    imageContainer.src = image.src

    // adicionar a classe .active para este botao
    button.classList.add("active")
}
