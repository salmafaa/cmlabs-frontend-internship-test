//List of Categories
$.getJSON ('https://www.themealdb.com/api/json/v1/1/categories.php', function(data) {
    let categories = data.categories;
    let output = '';
    $.each(categories, function(i,data) {
        output += `
        <div class="meal-item">
        <div class="card">
            <img src="${data.strCategoryThumb}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${data.strCategory}</h5>
                <center> <a onclick="categorySelected('${data.strCategory}')" href="#" class="btn btn-warning" >Detail</a></center>
                
            </div>
        </div>
        </div>
        `;
    })
    $('#meal').html(output);
})

//Filter Category
function categorySelected(category) {
    sessionStorage.setItem('strCategory', category);
    window.location = 'categoryDetail.html';
    return false;
}

function getCategory() {
    let strCategory = sessionStorage.getItem('strCategory');

    $.getJSON('https://www.themealdb.com/api/json/v1/1/filter.php?c='+strCategory, function(data) {
        let meals = data.meals;
        let output = '';
        
        $.each(meals, function(i,data) {
            output += `
        <div class="meal-item">
        <div class="card">
            <img src="${data.strMealThumb}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${data.strMeal}</h5>
                <center><a onclick="mealSelected('${data.idMeal}')" href="#" class="btn btn-warning">Detail</a></center>
            </div>
        </div>
        </div>
        `;

    })
    $('#meals').html(output);
})

}

//Detail Meal
function mealSelected(id) {
    sessionStorage.setItem('idMeal', id);
    window.location = 'mealsDetail.html';
    return false;
}

function getDetail() {
    let idMeal = sessionStorage.getItem('idMeal');

    $.getJSON('https://www.themealdb.com/api/json/v1/1/lookup.php?i='+idMeal, function(data) {
        let meal = data.meals;
        let output = '';

        
        $.each(meal, function(i,data) {
            output += `
            <div class="media">
            <img src="${data.strMealThumb}" class="align-self-start mr-3">
            <div class="media-body">
              <h3 class="mt-0">${data.strMeal}</h3>
              <p>${data.strArea}, ${data.strCategory}</p>
              <h6>Ingredient :</6>
                <p>
                    <ul>
                        <p>${data.strMeasure1} ${data.strIngredient1}</p>
                        <p>${data.strMeasure2} ${data.strIngredient2}</p>
                        <p>${data.strMeasure3} ${data.strIngredient3}</p>
                        <p>${data.strMeasure4} ${data.strIngredient4}</p>
                        <p>${data.strMeasure5} ${data.strIngredient5}</p>
                        <p>${data.strMeasure6} ${data.strIngredient6}</p>
                        <p>${data.strMeasure7} ${data.strIngredient7}</p>
                        <p>${data.strMeasure8} ${data.strIngredient8}</p>
                        <p>${data.strMeasure9} ${data.strIngredient9}</p>
                        <p>${data.strMeasure10} ${data.strIngredient10}</p>
                        <p>${data.strMeasure11} ${data.strIngredient11}</p>
                        <p>${data.strMeasure12} ${data.strIngredient12}</p>
                        <p>${data.strMeasure13} ${data.strIngredient13}</p>
                        <p>${data.strMeasure14} ${data.strIngredient14}</p>
                        <p>${data.strMeasure15} ${data.strIngredient15}</p>
                        <p>${data.strMeasure16} ${data.strIngredient16}</p>
                        <p>${data.strMeasure17} ${data.strIngredient17}</p>
                        <p>${data.strMeasure18} ${data.strIngredient18}</p>
                        <p>${data.strMeasure19} ${data.strIngredient19}</p>
                        <p>${data.strMeasure20} ${data.strIngredient20}</p>
                    </ul>
                <p>
              <h6>Instructions :</h6>
              <p>${data.strInstructions}</p>
              <a href="${data.strSource}">Source</a> <br>
              <a href="${data.strYoutube}">Youtube</a>
            </div>
          </div>
            `;
        })
        $('#mealsDetail').html(output);
    })
}   



// <p class="card-text">${data.strCategoryDescription}</p>