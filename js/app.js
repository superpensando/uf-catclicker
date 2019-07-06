/* ======= Model ======= */

var model = {
    selectedCat: [],
    allCats: [
        {
            clickCount: 0,
            name: "Cala",
            image: "img/catcute1.jpg"
        }, 
        {   
            clickCount: 0,
            name: "Brave",
            image: "img/catcute2.jpg" 
        },
        {   
            clickCount: 0,
            name: "Flaca",
            image: "img/catcute3.jpg" 
        },
        {   
            clickCount: 0,
            name : "Luke",
            image: "img/catcute4.jpg"
        },
        {   
            clickCount: 0,
            name: "Leia",
            image: "img/catcute5.jpg"
        }
    ]    
};


/* ======= Octopus ======= */

var octopus = {

    init: function() {
        // set our current cat to the first one in the list
        model.currentCat = model.allCats[0];
        // tell our views to initialize
        catListView.init();
        catView.init();
    },

    getCats: function() {
        return model.allCats;
    },


    getSelectedCat: function() {
        return model.selectedCat; 
    },

    // set the currently-selected cat to the object passed in
    setSelectedCat: function(event) {
        model.selectedCat = [];
        model.selectedCat.push(
            {
                clickCount: 0,
                name: event.path[0].previousSibling.innerText,
                image: event.path[0].attributes.src.nodeValue
            }, 
        )
    },


    // increments the counter for the currently-selected cat
    incrementCounter: function(event) {
        model.selectedCat[0].clickCount++; 
        event.path[0].nextSibling.textContent =  model.selectedCat[0].clickCount + "Cliks";
           
    }
};


/* ======= View ======= */

var catPaintView = {

    paintCats: function  ( content, array, type) {

        content.innerHTML="";
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
}

var catView = {

    init: function() {
        this.selectedCatContent = document.querySelector(".cats");
        // render this view (update the DOM elements with the right values)
        this.render();
    },

    render: function() {
        // update the DOM elements with values from the current cat
        catPaintView.paintCats(this.selectedCatContent, octopus.getSelectedCat(), 1);

        this.selectedCatImage = document.querySelectorAll("img.catImageSelected");
        for (let i=0; i<this.selectedCatImage.length; i++ ) {  
            this.selectedCatImage[i].addEventListener('click', function(){
                octopus.incrementCounter(event);
           });
        }
    }
};

var catListView = {

    init: function() {
        // store the DOM element for easy access later
        this.catListContent= document.querySelector(".cats-list");

        // render this view (update the DOM elements with the right values)
        this.render();
    },

    render: function () {

        catPaintView.paintCats(this.catListContent, octopus.getCats(), 0);

        this.catImages = document.querySelectorAll("img.catImage");
        for (let i=0; i < this.catImages.length; i++ ) { 
            cat = this.catImages[i];
            cat.addEventListener('click', (function() {
                return function() {
                    octopus.setSelectedCat(event);
                    catView.render();
                };
            })(cat));
        }
    },
  
};

// make it go!
octopus.init();

