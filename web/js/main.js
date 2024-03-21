fetch("./js/data.json")
    .then(response => response.json())
    .then(data => {
        const frame = document.getElementById("loop");
        const scrollContainer = document.createElement("div"); 
        scrollContainer.style.overflow = "auto"; 
        scrollContainer.style.width = "100%"; 
        scrollContainer.style.marginLeft = "65rem"; 
        scrollContainer.style.display = "block"; 

        data.forEach(element => {
            console.log(element);
            let newDiv = document.createElement("div");
            newDiv.id = element.id;
            newDiv.className = "card";
            newDiv.innerHTML = `
                <h2>${element.idname}</h2>
                <p>${element.postPlaats}</p>
                <img src="${element.imgPost}" alt="Post Image">
                <p>${element.textPost}</p>`;
            scrollContainer.appendChild(newDiv); 
        });
        
        frame.appendChild(scrollContainer); 
    })
    .catch(error => console.error("Error loading JSON file", error));
