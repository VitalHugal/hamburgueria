document.addEventListener('DOMContentLoaded', function () {
    const categories = document.querySelectorAll('.category');

    categories.forEach(category => {
        category.addEventListener('click', function () {
            const subMenu = this.nextElementSibling;
            subMenu.classList.toggle('show');
        });
    });

    // Responsável por adicionar evento de clique a todos os ingredientes no menu lateral
    const ingredients = document.querySelectorAll('.ingredient');
    ingredients.forEach(ingredient => {
        ingredient.addEventListener('click', function () {
            const burger = document.querySelector('.burger');
            const ingredientName = this.textContent;

            // Verifica se o ingrediente é uma imagem conhecida
            const imageSrc = getImageSource(ingredientName);

            if (imageSrc) {
                // Criando um elemento de imagem
                const image = document.createElement('img');
                image.src = imageSrc;
                image.alt = 'Imagem do Ingrediente';
                image.style.width = '120px';

                // Adicionando o ingrediente como um elemento de imagem
                addIngredientToBurger(burger, image);
            } else {
                // Adicionando os outros ingredientes como texto
                addIngredientToBurger(burger, ingredientName);
            }
        });
    });

    // Retorna a fonte da imagem correspondente ao nome do ingrediente
    function getImageSource(ingredientName) {
        // Mapeia os nomes dos ingredientes para suas respectivas fontes de imagem
        const imageSources = {
            'Francês': 'img/ingredientes/pao-frances-cima.png',
            'Australiano': 'img/ingredientes/australiano.png',
            'Brioche': 'img/ingredientes/brioche.png',
            'Maionese': 'img/ingredientes/maionese.png',
            'Ketchup': 'img/ingredientes/ketchup.png',
            'Alface': 'img/ingredientes/alface.png',
            'Picanha': 'img/ingredientes/picanha.png',
            'Cheddar': 'img/ingredientes/cheddar.png',
            // Adicione outras correspondências de ingredientes aqui
        };

        return imageSources[ingredientName];
    }

    // Adiciona os nomes dos ingredientes ou imagens no burger (Seu burger)
    function addIngredientToBurger(burger, ingredient) {
        const selectedIngredients = burger.querySelector('.selected-ingredients');
        const li = document.createElement('li');

        // Verifica se o ingrediente é uma imagem
        if (ingredient instanceof HTMLImageElement) {
            // Adicionando a imagem ao elemento li
            li.appendChild(ingredient);
        } else {
            // Adicionando o nome do ingrediente como texto
            li.textContent = ingredient;
        }

        // Adicionando o botão de remoção
        const closeButton = document.createElement('button');
        closeButton.textContent = 'X';
        closeButton.className = 'remove-ingredient';
        closeButton.addEventListener('click', function () {
            // Removendo o ingrediente quando o botão é clicado
            li.remove();
        });

        // Classe para estilização no CSS
        li.className = 'burger-ingredient'; 

        // Adiciona o botao de retirar item no li ao lado do nome ou imagem
        li.appendChild(closeButton);
        selectedIngredients.appendChild(li);
    }
});
