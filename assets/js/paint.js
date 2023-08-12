document.addEventListener('DOMContentLoaded', function() {
    configureListeners();
});

function configureListeners() {
    let images = document.querySelectorAll('img');

    for (let i = 0; i < images.length; i++) {
        images[i].addEventListener('mouseenter', addOpacity);
        images[i].addEventListener('mouseleave', removeOpacity);
    }
}

function addOpacity(event) {
    event.target.classList.add('dim');
    getProductInfo(event.target.id);
}

function removeOpacity(event) {
    event.target.classList.remove('dim');

    let element = document.getElementById('color-price');
    element.textContent = '';
        
    let color = document.getElementById('color-name');
    color.textContent = '';

    event.preventDefault();    
}

function getProductInfo(paintColor) {
    let price;
    let colorName;
    
    switch (paintColor) {
        case 'pn1':           
            colorName = "Lime Green";
            price = "$10";
            break;
        case 'pn2':
            colorName = "Medium Brown";
            price = "$12";
            break;
        case 'pn3':
            colorName = "Royal Blue";
            price = "$11";
            break;
        case 'pn4':
            colorName = "Solid Red";
            price = "$13";
            break;
        case 'pn5':
            colorName = "Solid White";
            price = "$9";
            break;
        case 'pn6':
            colorName = "Solid Black";
            price = "$14";
            break;
        case 'pn7':
            colorName = "Solid Cyan";
            price = "$12";
            break;
        case 'pn8':
            colorName = "Solid Purple";
            price = "$15";
            break;
        case 'pn9':
            colorName = "Solid Yellow";
            price = "$10";
            break;
        default:
            return;
    }

    updatePrice(colorName, price);
}

function updatePrice(colorName, price) {
    let colorPrice = document.getElementById('color-price');
    colorPrice.textContent = price;
        
    let color = document.getElementById('color-name');
    color.textContent = colorName;
}
