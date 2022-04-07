const db = {
    id: 'appri6R1fLwrOaXGO',
    table: 'textures',
    apiKey: 'key1SiX7gdNiDuSwT'
};

const airtableUrl = `https://api.airtable.com/v0/${db.id}/${db.table}?maxRecords=100&view=Grid%20view&api_key=${db.apiKey}`

const fetchTextures = async () => {
    const response = await fetch(airtableUrl).then(data => data.json());
    console.log(response);
    const myObject = {
        title: 'texture',
    }
    
    const myArray= ['texture',334824,'example']
    
    console.log (myObject.title)
    console.log(myArray[0]);

    const container = document.getElementById('textures-container');
    
    
    response.records.forEach((texture)=>{
        console.log(texture);
        if (texture.fields.image){
            console.log(texture.fields.image[0].url);
            const imageImg = document.createElement('img');
            imageImg.setAttribute('src',texture.fields.image[0].url);
            container.append(imageImg);

        }
        
        
        
        if(texture.fields.description){
            console.log(texture.fields.description);
            const descriptionEl = document.createElement('p');
            descriptionEl.innerHTML = texture.fields.description;
            descriptionEl.classList.add('texture-description')
            container.append(descriptionEl);
    
        }

        
        



    });
};

fetchTextures();



