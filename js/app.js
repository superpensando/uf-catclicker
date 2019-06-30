let click0 = 0;
let click1 = 0; 
let click2 = 0;
let click3 = 0;
let click4 = 0;
let click  = 0; 
let allCats = [];

class Cat {
    constructor(name, image) {
        this.name = name;
        this.image = image;
    }

    catClicks(event, imagesnumber) {
        switch (imagesnumber) {
            case 0:  
            click0 += 1; 
            click = click0;
            break;
            case 1:
            click1 += 1;
            click = click1;   
            break; 
            case 2:
            click2 += 1;
            click = click2;   
            break; 
            case 3:
            click3 += 1;
            click = click3;   
            break; 
            case 4:
            click4 += 1;
            click = click4;   
            break; 
        }
        event.path[0].nextSibling.textContent= click +"Cliks";
    }
}


allCats.push(
    new Cat("Cala","img/catcute1.jpg"),
    new Cat("Brave","img/catcute2.jpg"),
    new Cat("Flaca","img/catcute3.jpg"),
    new Cat("Luke","img/catcute4.jpg"),
    new Cat("Leia","img/catcute5.jpg")
);

//console.log(allCats);

const cats = document.querySelector(".cats");
const fragment = document.createDocumentFragment();
for ( cat of allCats) { 
      
    const newName = document.createElement("p");
    newName.className = "catName";
    newName.textContent = cat.name;

    const newImage = document.createElement('img'); 
    newImage.className = "catImage";
    newImage.setAttribute("src", cat.image);
    newImage.setAttribute("title", cat.name);

    const newClick = document.createElement('p');
    newClick.className = "catClicks";
    
    const newContent = document.createElement("article"); 
    newContent.appendChild(newName);
    newContent.appendChild(newImage); 
    newContent.appendChild(newClick);

    fragment.appendChild(newContent);    
} 
cats.appendChild(fragment);


var catImages = document.querySelectorAll("img");
for (let i=0; i<catImages.length; i++ ) {  
    catImages[i].addEventListener('click', function(){
        cat.catClicks(event, i);
    });
}

