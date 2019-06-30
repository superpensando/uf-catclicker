class Cat {
    constructor(name, image) {
        this.name = name;
        this.image = image;
    }

    catClicks(event,counts) {
        const thisClicks = event.path[0].nextSibling.textContent= counts +"Cliks"; 
    }
}

const cat1 =   new Cat("Cala","img/catcute1.jpg");
const cat2 =   new Cat("Brave","img/catcute2.jpg");


var allCats = [];
allCats.push(
    cat1,
    cat2 
);

//console.log(allCats);

const cats = document.querySelector(".cats");
const fragment = document.createDocumentFragment();
for ( cat of allCats) { 
      
    const newName = document.createElement("p");
    newName.className = "catName";
    newName.textContent = cat.name;

    const newImage = document.createElement('img'); 
    newImage.id = "catImage";
    newImage.setAttribute("src", cat.image);
    newImage.setAttribute("title", cat.name);

    const newClick = document.createElement('p');
    newClick.id = "catClicks";
    
    const newContent = document.createElement("article"); 
    newContent.appendChild(newName);
    newContent.appendChild(newImage); 
    newContent.appendChild(newClick);

    fragment.appendChild(newContent);    
} 
cats.appendChild(fragment);


var catImages = document.querySelectorAll("img");
for (let i=0; i<catImages.length; i++ ) {  
    catImage[i].addEventListener('click', function(){
        cat.catClicks(event, i);
        i++; 
    });
}

