
function createHomepage() {
    const page = document.querySelector('.content');

    const main = document.createElement('main');
    const restaurantContent = document.createElement('div');
    
    restaurantContent.classList.add('restaurantContent');
    restaurantContent.innerHTML = "Welcome to Restaurant Name! We are a family-owned restaurant located right on Main Street in the heart of our charming downtown. We first opened our doors in 2005 with the goal of bringing delicious, quality food to our neighborhood.";

    main.appendChild(restaurantContent);
    main.appendChild(restaurantContent);

    page.appendChild(main);
}


export default createHomepage;