const db = {
    id: 'app6tWUyaSErIMMOh',
    table: 'textures',
    apiKey: 'key1SiX7gdNiDuSwT'
};

const airtableUrl = `https://api.airtable.com/v0/${db.id}/${db.table}?maxRecords=100&view=Grid%20view&api_key=${db.apiKey}`

const slideshowContainer = document.getElementById('slideshow-container');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

const fetchTextures = async () => {
    const response = await fetch(airtableUrl).then(data => data.json());
    // console.log(response);
    buildSlideshow(response.records);
    return response.records;
};

const buildSlideshow = (textures) => {
    console.log(textures);
    console.log(buildSlide(textures[0]));

    const firstTexture = buildSlide(textures[0]);
    slideshowContainer.append(firstTexture);

    let currentTexture = 0;

    prevButton.addEventListener('click', () => {
        if (currentTexture === 0) {
            currentTexture = textures.length - 1;
        } else {
            currentTexture = currentTexture - 1;
        }

        const textureRecord = textures[currentTexture];
        swapSlide(textureRecord);
    });

    nextButton.addEventListener('click', () => {
        if (currentTexture === textures.length - 1) {
            currentTexture = 0;
        } else {
            currentTexture = currentTexture + 1;
        }

        const textureRecord = textures[currentTextures];
        swapSlide(textureRecord);
    });
};

const swapSlide = (textureRecord) => {
    const slideEl = buildSlide(textureRecord);

    slideshowContainer.innerHTML = '';
    slideshowContainer.append(slideEl);
};

const buildSlide = (texture) => {
    const textureContainer = document.createElement('article');
    if (texture.fields.image) {
        console.log(texture.fields.image[0].url);
        const imageImg = document.createElement('img');
        imageImg.src = texture.fields.image[0].url;
        imageImg.classList.add('image-img', 'dlkjfdl');
        imageImg.id = 'image-img-id';
        textureContainer.append(imageImg);
    }
    if (texture.fields.description) {
        console.log(texture.fields.description);
    }

    if (texture.fields.maincolor) {
        const maincolorEl = document.createElement('p');
        maincolorEl.innerHTML = texture.fields.maincolor;
        maincolorEl.classList.add('texture-maincolor');
        textureContainer.append(maincolorEl);
    }
    return textureContainer;
};

fetchTextures();
