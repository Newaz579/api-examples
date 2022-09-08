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
        // console.log(meal);
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('card');
        mealDiv.innerHTML = `
            <div onclick="loadMealDetail(${meal.idMeal})" class="card">
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

const loadMealDetail = (mealID) =>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`;
    // console.log(url);
    fetch(url)
    .then(response => response.json())
    .then(data => displayMealDetail(data.meals[0]))
}

const displayMealDetail = (meal)=> {
    const mealContainer = document.getElementById('meal-container');
    mealContainer.innerHTML = ``;
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(1,100)}.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    `;
    mealContainer.appendChild(div);
}