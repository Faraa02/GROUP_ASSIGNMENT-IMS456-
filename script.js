document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.terms-section p, .terms-section ul, .terms-section li');
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('show');
        }, index * 150);
    });
});


<script>
    // Add to Cart functionality
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    document.querySelectorAll('.add-to-cart').forEach(button = {
        button.addEventListener('click', () => {
            const name = button.getAttribute('data-name');
            const price = button.getAttribute('data-price');
            const image = button.parentElement.querySelector('img').getAttribute('src');

            const item = cart.find(i => i.name === name);
            if (item) {
                item.quantity += 1;
            } else {
                cart.push({ name, price, quantity: 1, image });
            }

            localStorage.setItem('cart', JSON.stringify(cart));
            alert(`${name} added to cart!`);
        })
    });

    document.addEventListener("DOMContentLoaded", () = {
        document.body.style.opacity = 0;
        setTimeout(() = {
            document.body.style.transition = "opacity 0.5s"}
            document.body.style.opacity = 1;
        , 100);
    });


</script>


