// //responsável por adicionar um evento de clique a todas as categorias no menu lateral.
// document.addEventListener('DOMContentLoaded', function () {
//     const categories = document.querySelectorAll('.category');

//     categories.forEach(category => {
//         category.addEventListener('click', function () {
//             const subMenu = this.nextElementSibling;
//             subMenu.classList.toggle('show');
//         });
//     });

//     //responsável por adicionar evento de clique a todos os ingredientes no menu lateral
//     const ingredients = document.querySelectorAll('.ingredient');
//     ingredients.forEach(ingredient => {
//         ingredient.addEventListener('click', function () {
//             const burger = document.querySelector('.burger');
//             const ingredientName = this.textContent;
//             addIngredientToBurger(burger, ingredientName);
//         });
//     });

//     //adiciona os nomes dos ingredientes no burguer(Seu burguer)
//     function addIngredientToBurger(burger, ingredientName) {
//         const selectedIngredients = burger.querySelector('.selected-ingredients');
//         const li = document.createElement('li');
//         li.textContent = ingredientName;

//         // Adicionando o botão de remoção
//         const closeButton = document.createElement('button');
//         closeButton.textContent = 'X';
//         closeButton.className = 'remove-ingredient';
//         closeButton.addEventListener('click', function () {
//             // Removendo o ingrediente quando o botão é clicado
//             li.remove();
//         });

//         //adiciona o botao de retirar item no li ai lado do nome
//         li.appendChild(closeButton);
//         selectedIngredients.appendChild(li);

//     }
// });


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
            // Verificando se o ingrediente é do tipo 'Francês'
            if (ingredientName === 'Francês') {
                // Criando um elemento de imagem
                const image = document.createElement('img');
                image.src = 'img/ingredientes/pao-frances-cima.png';
                image.alt = 'Imagem do Ingrediente';

                image.style.width = '150px';
                // Adicionando o ingrediente como um elemento de imagem
                addIngredientToBurger(burger, image);
            } else {
                // Adicionando os outros ingredientes como texto
                addIngredientToBurger(burger, ingredientName);
            }
        });
    });

    //adiciona os nomes dos ingredientes no burguer(Seu burguer)
    function addIngredientToBurger(burger, ingredient) {
        const selectedIngredients = burger.querySelector('.selected-ingredients');
        const li = document.createElement('li');

        // Verificando se o ingrediente é uma imagem
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

        //adiciona o botao de retirar item no li ao lado do nome ou imagem
        li.appendChild(closeButton);
        selectedIngredients.appendChild(li);
    }
});
