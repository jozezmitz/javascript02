/*Name this external file gallery.js*/

function upDate(previewPic){
 /* In this function you should 
    1) change the url for the background image of the div with the id = "image" 
    to the source file of the preview image
    
    2) Change the text  of the div with the id = "image" 
    to the alt text of the preview image 
    */
    
    let imgDiv=document.getElementById('image');
    imgDiv.style.backgroundImage="url('" + previewPic.src + "')";
    imgDiv.innerHTML=previewPic.alt
	}

	function unDo(){
     /* In this function you should 
    1) Update the url for the background image of the div with the id = "image" 
    back to the orginal-image.  You can use the css code to see what that original URL was
    
    2) Change the text  of the div with the id = "image" 
    back to the original text.  You can use the html code to see what that original text was
    */

    let imgDivUndo = document.getElementById('image');
    imgDivUndo.style.backgroundImage="none";
    imgDivUndo.innerHTML = "Hover over an image below to display here.";
}




function setImages() {
    const options = [
        "image/Photo01.jpg",
        "image/Photo02.jpg",
        "image/Photo03.jpg",
        "image/Photo04.jpg",
        "image/Photo05.jpg",
        "image/Photo06.jpg",
        "image/Grijs.png",
        "image/groen.png",
        "image/Groen03.png",
        "image/Oranje01.png",
        "image/Paars01.png",
        "image/Roze.png"
    ];

    const currentImages = document.querySelectorAll(".flex img");

    const shuffled = options
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);

    for (let i = 0; i < currentImages.length; i++) {
        const randomImg = shuffled[i];

        currentImages[i].src = randomImg;
        currentImages[i].parentElement.href = randomImg;

        const filename = randomImg.split('/').pop().split('.')[0]; // e.g., "Photo01"
        const altText = filename
            .replace(/([A-Z])/g, ' $1')
            .replace(/^./, str => str.toUpperCase())
            .trim();

        currentImages[i].alt = altText;
        currentImages[i].tabIndex = 0;
    }
}


