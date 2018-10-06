window.onload = function() {
    const addToCardButton = document.getElementById("addToCart");

    addToCardButton.onclick=()=>{ 

        const selectedSize = document.getElementById("sizeSelector");
        const size = selectedSize.value;

        const quantitySelector = document.querySelector('input[name="itemColour"]:checked')
        const quantity = quantitySelector.value;

        alert("Added item to cart!" + "\n" + "Size: " + size + "\n" + "Quantity: " + quantity);
    }
};


