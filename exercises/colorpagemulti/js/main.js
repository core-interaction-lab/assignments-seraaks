const db = {
    id: 'app6tWUyaSErIMMOh',
    table: 'textures',
    apiKey: 'key1SiX7gdNiDuSwT'
};

const airtableUrl = `https://api.airtable.com/v0/${db.id}/${db.table}?maxRecords=100&view=Grid%20view&api_key=${db.apiKey}`

const slideshowContainer = document.getElementById('slideshow-container');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let texturesArray = [];


const fetchTextures = async () => {
    const response = await fetch(airtableUrl).then(data => data.json());
    //console.log(response);
    texturesArray = response.records;

    const greyTextures = texturesArray.filter(texture => {
        if(texture.fields.maincolor==="multi"){
            return true;
        }
        return false;

    });
    console.log(greyTextures);



    buildSlideshow(greyTextures);
    return response.records;
};

const buildSlideshow = (textures)=>{
    const slideCount = 4;


    const articleEls= textures.slice(0,slideCount).map(buildSlide);
    console.log(articleEls);

    slideshowContainer.append(...articleEls);
    
    let leftIndex = 0;
    let rightIndex= slideCount -1;



        

    prevButton.addEventListener('click', ()=>{
        leftIndex += 1;
        rightIndex +=1;

        if (rightIndex>=textures.length){
            rightIndex=0;
        }

        slideshowContainer.removeChild(slideshowContainer.children[0]);
        slideshowContainer.append(buildSlide(textures[rightIndex, rightIndex]));

        });

        nextButton.addEventListener('click', ()=>{
            leftIndex -= 1;
            rightIndex -= 1;

            if(leftIndex<0){
                leftIndex = textures.length -1;
            }

            if(rightIndex<0){
                rightIndex=textures.length -1;

            }

           if(leftIndex>=textures.length){
               leftIndex = 0;
           }
           
            console.log(leftIndex, rightIndex);

            const lastItem = slideshowContainer.querySelectorAll('article')[slideCount -1];
            console.log(lastItem);
            slideshowContainer.removeChild(lastItem);
            slideshowContainer.prepend(buildSlide(textures[leftIndex, leftIndex]));
            
                
            });
    };

    




    const buildSlide =(texture,index)=>{
        const textureContainer = document.createElement('article');
        if (texture.fields.image){
        const posterSelectBtn = document.createElement('button');
        posterSelectBtn.dataset.textureIndex=index;

        posterSelectBtn.addEventListener('click',evt=>{
            buildSelectedTexture(texturesArray[index]);

        })

        console.log(texture.fields.image[0].url);
        const imageImg = document.createElement('img');
        imageImg.setAttribute('src',texture.fields.image[0].url);
        imageImg.classList.add('image-img');
        //imageImg.id='image-id';
        posterSelectBtn.append(imageImg);
        textureContainer.append(posterSelectBtn);

    }
    
    if(texture.fields.description){
        console.log(texture.fields.description);
        const descriptionEl = document.createElement('p');
        descriptionEl.innerHTML = texture.fields.description;
        descriptionEl.classList.add('texture-description');
        textureContainer.append(descriptionEl);

    }

    if(texture.fields.maincolor){
        console.log(texture.fields.maincolor);
        const maincolorEl = document.createElement('p');
        maincolorEl.innerHTML = texture.fields.maincolor;
        maincolorEl.classList.add('texture-maincolor');
        textureContainer.append(maincolorEl);
    }
    if(texture.fields.mainmaterial){
        console.log(texture.fields.mainmaterial);
        const mainmaterialEl = document.createElement('p');
        mainmaterialEl.innerHTML = texture.fields.mainmaterial;
        mainmaterialEl.classList.add('texture-mainmaterial');
        textureContainer.append(mainmaterialEl);

    }
    if(texture.fields.date){
        console.log(texture.fields.date);
        const dateEl = document.createElement('p');
        dateEl.innerHTML = texture.fields.date;
        dateEl.classList.add('texture-date');
        textureContainer.append(dateEl);
        
    }
    

    return textureContainer;
};

const selectedTextureContainer = document.getElementById('selected-texture');

const buildSelectedTexture = texture =>{
    selectedTextureContainer.innerHTML='';
    if(texture.fields.image){
        console.log(texture.fields.image[0].url);
        const imageImg = document.createElement('img');
        imageImg.setAttribute('src',texture.fields.image[0].url);
        imageImg.classList.add('image-img');
        selectedTextureContainer.append(imageImg);
        
    }
    if(texture.fields.description){
        console.log(texture.fields.description);
        const descriptionEl = document.createElement('p');
        descriptionEl.innerHTML = texture.fields.description;
        descriptionEl.classList.add('texture-description');
        textureContainer.append(descriptionEl);
        selectedTextureContainer.append(descriptionEl);
    }
    if(texture.fields.maincolor){
        console.log(texture.fields.maincolor);
        const maincolorEl = document.createElement('p');
        maincolorEl.innerHTML = texture.fields.maincolor;
        maincolorEl.classList.add('texture-maincolor');
        textureContainer.append(maincolorEl);
        selectedTextureContainer.append(maincolorEl);
    }
    if(texture.fields.mainmaterial){
        console.log(texture.fields.mainmaterial);
        const mainmaterialEl = document.createElement('p');
        mainmaterialEl.innerHTML = texture.fields.mainmaterial;
        mainmaterialEl.classList.add('texture-mainmaterial');
        textureContainer.append(mainmaterialEl);
        selectedTextureContainer.append(mainmaterialEl);


    }
    if(texture.fields.date){
        console.log(texture.fields.date);
        const dateEl = document.createElement('p');
        dateEl.innerHTML = texture.fields.date;
        dateEl.classList.add('texture-date');
        textureContainer.append(dateEl);
        selectedTextureContainer.append(dateEl);

        
    }
        
}
fetchTextures();

