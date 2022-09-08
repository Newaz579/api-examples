const loadMeals = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    fetch(url)
    .then(response => response.json())
    .then(data => displayLoadMeals(data.meals));
}

loadMeals('');

const displayLoadMeals = (meals) =>{
    const mealsContainer = document.getElementById('meals-container');
    mealsContainer.innerHTML = ``;
    meals.forEach(meal => {
        console.log(meal);
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
            <div onclick="displayMealDetail(${meal.idMeal})" class="card">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(1,100)}.</p>
                </div>
            </div>
        `;
        mealsContainer.appendChild(mealDiv);
    })
}

const searchFood = () =>{
    const searchField = document.getElementById('search-field');
    const searchValue = searchField.value;
    loadMeals(searchValue);
}

const displayMealDetail = (mealID) =>{
    const url = `www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`;
    console.log(url);
}