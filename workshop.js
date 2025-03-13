const startingFreelancers = [
    {name: "Alice", occupation: "Writer", startingPrice: 30},
    {name: "Bob", occupation: "Teacher", startingPrice: 50}
]

const newFreelancers = [
    {name: "Carol", occupation: "Programmer", startingPrice: 70},
    {name: "Sam", occupation: "Developer", startingPrice: 65},
    {name: "Randy", occupation: "Designer", startingPrice: 45},
    {name: "Colin", occupation: "Marketing", startingPrice: 30},
    {name: "Liz", occupation: "Therapist", startingPrice: 70},
    {name: "Tori", occupation: "Head-Hunter", startingPrice: 55}
]

function init(){
    const listing = document.querySelector('.listing');
    const container = document.createElement("div");
    container.id = "freelancer-container"; 
    container.style.border = "1px solid #ccc";
    container.style.padding = "10px";
    container.style.margin = "10px";

    console.log(listing)
    
    listing.append(container)

    const average = document.querySelector('#avg')
    const newP = document.createElement("p")
    newP.innerHTML = `The current average price of freelancers is: `
    average.append(newP)


    renderFreelancers()
}
function calculateAveragePrice() {
    if (startingFreelancers.length === 0) return 0; 

    const totalPrice = startingFreelancers.reduce((sum, freelancer) => sum + freelancer.startingPrice, 0);
    const avgPrice = (totalPrice / startingFreelancers.length).toFixed(2); 

    document.querySelector("#avg p").innerText = `The current average price of freelancers is: $${avgPrice}`;
}

function renderFreelancers(){
    const container = document.querySelector('#freelancer-container')
    container.innerHTML = ""

    startingFreelancers.forEach((worker)=>{
        const workerDiv = document.createElement("div")
        workerDiv.classList.add("worker");
        workerDiv.innerHTML = `<span>${worker.name}</span>
                               <span>${worker.occupation}</span>
                               <span>${worker.startingPrice}</span>`
        container.append(workerDiv)
    })
    calculateAveragePrice()
}

function addFreelancer(){
    const randomFreelancer = Math.floor(Math.random() * newFreelancers.length)
    const randomFreelancers = newFreelancers[randomFreelancer]
    startingFreelancers.push(randomFreelancers)
    renderFreelancers()
}

const add = setInterval(addFreelancer, 2000)
setTimeout(()=>{
    clearInterval(add)
  }, 30000)

window.onload = init;