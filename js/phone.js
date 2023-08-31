const loadData = async(searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    //console.log(phones);
    displayPhones(phones);
}

const displayPhones = phones => {

    const phoneContainer = document.getElementById('phone-container');
    //clear phone container cards before adding new cards
    phoneContainer.innerText = '';

    phones.forEach(phone => {
    console.log(phone);
    //2.create a div
    const phoneCard = document.createElement('div');
    phoneCard.classList = `card bg-gray-100 shadow-xl`;
    //3.set inner html
    phoneCard.innerHTML =`
    <figure> <img src="${phone.image}"/> </figure>
        <div class="card-body items-center text-center">
        <h2 class="card-title">${phone.phone_name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions">
            <button class="btn btn-primary">Buy Now</button>
        </div>
        </div>
    `;
    phoneContainer.appendChild(phoneCard);
   });  
}

const handleSearch = () => {
    const inputField = document.getElementById('input-field');
    const inputFieldText = inputField.value;
    //console.log(inputFieldText);
    loadData(inputFieldText);
}

