var currentAnimalIndex = 0;

const animalImage = document.getElementById("animalImage");
const animalName = document.getElementById("animalName");

const animals = [
  {
    name: "Bear",
    image: "https://placehold.co/400x300?text=Bear"
  },
  {
    name: "Duck",
    image: "https://placehold.co/400x300?text=Duck"
  },
  {
    name: "Lion",
    image: "https://placehold.co/400x300?text=Lion"
  },
  {
    name: "Octopus",
    image: "https://placehold.co/400x300?text=Octopus"
  },
  {
    name: "Monkey",
    image: "https://placehold.co/400x300?text=Monkey"
  }
]

// Click the left arrow to trigger this function
function previousAnimal() {
  currentAnimalIndex = (currentAnimalIndex - 1 + animals.length) % animals.length;
  animalImage.src = animals[currentAnimalIndex].image;
  animalName.innerText = animals[currentAnimalIndex].name;
}

// Click the right arrow to trigger this function
function nextAnimal() {
  currentAnimalIndex = (currentAnimalIndex + 1) % animals.length;
  animalImage.src = animals[currentAnimalIndex].image;
  animalName.innerText = animals[currentAnimalIndex].name;
}
