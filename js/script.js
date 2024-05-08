//responsável por adicionar um evento de clique a todas as categorias no menu lateral.
document.addEventListener('DOMContentLoaded', function () {
    const categories = document.querySelectorAll('.category');

    categories.forEach(category => {
        category.addEventListener('click', function () {
            const subMenu = this.nextElementSibling;
            subMenu.classList.toggle('show');
        });
    });

    //responsável por adicionar evento de clique a todos os ingredientes no menu lateral
    const ingredients = document.querySelectorAll('.ingredient');
    ingredients.forEach(ingredient => {
        ingredient.addEventListener('click', function () {
            const burger = document.querySelector('.burger');
            const ingredientName = this.textContent;
            addIngredientToBurger(burger, ingredientName);
        });
    });

    //adiciona os nomes dos ingredientes no burguer(Seu burguer)
    function addIngredientToBurger(burger, ingredientName) {
        const selectedIngredients = burger.querySelector('.selected-ingredients');
        const li = document.createElement('li');
        li.textContent = ingredientName;

        // Adicionando o botão de remoção
        const closeButton = document.createElement('button');
        closeButton.textContent = 'X';
        closeButton.className = 'remove-ingredient';
        closeButton.addEventListener('click', function () {
            // Removendo o ingrediente quando o botão é clicado
            li.remove();
        });

        //adiciona o botao de retirar item no li ai lado do nome
        li.appendChild(closeButton);
        selectedIngredients.appendChild(li);

    }
});