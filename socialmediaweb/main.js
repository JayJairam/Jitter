fetch("data.json")
    .then(response => response.json())
    .then(data => {
        const frame = document.getElementById("loop");
        const scrollContainer = document.createElement("div");
        scrollContainer.style.overflow = "auto";
        scrollContainer.style.width = "80%";
        scrollContainer.style.marginLeft = "25rem";
        scrollContainer.style.display = "block";

        shuffleArray(data);

        data.forEach(element => {
            console.log(element);
            let newDiv = document.createElement("div");
            newDiv.id = element.id;
            newDiv.className = "card";
            newDiv.innerHTML = `
                <h2>${element.idname}</h2>
                <p>${element.postPlaats}</p>
                <img src="${element.imgPost}" alt="Post Image">
                <p>${element.textPost}</p>
                <div class="actions">
                    <button class="like-btn">Like</button>
                    <button class="share-btn">Share</button>
                    <button class="save-btn">Save</button>
                </div>`;
            scrollContainer.appendChild(newDiv);
        });

        frame.appendChild(scrollContainer);
    })
    .catch(error => console.error("Error loading JSON file", error));


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
