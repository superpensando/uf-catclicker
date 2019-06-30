let click = 0; 
let allCats = [];
let selectedCat = [];


class Cat {
    constructor(name, image) {
        this.name = name;
        this.image = image;
    }

    catClicks(event) {
        click += 1; 
        event.path[0].nextSibling.textContent = click +"Cliks";
    }

    catSelected(event, counts) {
        const selectedCatContent = document.querySelector(".cats");
        selectedCat = [];
        selectedCatContent.innerHTML="";

        const selectedCatImage = event.path[0].attributes.src.nodeValue;
        const seletedCatName = event.path[0].previousSibling.innerText;

        selectedCat.push(
            new Cat(seletedCatName,selectedCatImage)
        )
        castList(selectedCat, selectedCatContent,1);
    }
}


allCats.push(
    new Cat("Cala","img/catcute1.jpg"),
    new Cat("Brave","img/catcute2.jpg"),
    new Cat("Flaca","img/catcute3.jpg"),
    new Cat("Luke","img/catcute4.jpg"),
    new Cat("Leia","img/catcute5.jpg")
);



function castList (array, content, type) {
  
    const fragment = document.createDocumentFragment();
    for ( item of array) { 
        
        const newName = document.createElement("p");
        newName.className = "catName";
        newName.textContent = item.name;

        const newImage = document.createElement('img');
        newImage.setAttribute("src", item.image);
        newImage.setAttribute("title", item.name);

        const newClick = document.createElement('p');
           
        const newContent = document.createElement("article"); 

        switch (type) {
            case 0:
            newImage.className = "catImage";
            newContent.className = "catArticle";
            newClick.className = "catClicks";
            break;
            case 1: 
            newImage.className = "catImageSelected";
            newContent.className = "catArtibleSeleted";
            newClick.className = "catClicksSelected";
            break;
        }

        newContent.appendChild(newName);
        newContent.appendChild(newImage); 
        newContent.appendChild(newClick);

        fragment.appendChild(newContent);    
    } 
    content.appendChild(fragment);
}

const catListContent= document.querySelector(".cats-list");
castList(allCats, catListContent , 0);



var catImages = document.querySelectorAll("img.catImage");
for (let i=0; i<catImages.length; i++ ) {  
    catImages[i].addEventListener('click', function(){
        item.catSelected(event, i);
        catClicks();
        i++; 
    });
}

function catClicks() {
    var catImagesSelected = document.querySelectorAll("img.catImageSelected");
    for (let i=0; i<catImagesSelected.length; i++ ) {  
        catImagesSelected[i].addEventListener('click', function(){
            item.catClicks(event);
        });
    }
}







