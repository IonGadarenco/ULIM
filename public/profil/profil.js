document.addEventListener("DOMContentLoaded", async () => {
    const urlParams = new URLSearchParams(window.location.search);

    const email = urlParams.get('email');
    
    // Obiectul cu datele pe care vrei să le trimiți la server
    const dataToSend = {
        email: email,
    };

    // Realizează cererea fetch către server
    try {
        const response = await fetch('/poster/getUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataToSend),
        });

        const responseData = await response.json();
        console.log('Răspuns de la server:', responseData);

        // Poți adăuga orice logică suplimentară aici în funcție de răspunsul primit de la server
        createUserPost(responseData);
        showAllUsers(responseData);



    } catch (error) {
        console.error('Eroare la comunicarea cu serverul:', error);
    }


});

const createUserPost = (responseData) => {
    const container = document.getElementById("container");

    const postDiv = document.createElement("div");
    postDiv.className = "post";

    const imgPost = document.createElement("img");
    imgPost.src = responseData.existingUser.imgURL;

    const name = document.createElement("h4");
    name.textContent = `${responseData.existingUser.firstName} ${responseData.existingUser.lastName}`;

    const email = document.createElement("p");
    email.textContent = responseData.existingUser.email;

    const messageBut = document.createElement("button");
    messageBut.textContent = "Messagess";

    postDiv.appendChild(imgPost);
    postDiv.appendChild(name);
    postDiv.appendChild(email);
    postDiv.appendChild(messageBut);

    container.appendChild(postDiv);
}

const showAllUsers = (responseData) => {
    const container2 = document.getElementById("container2");

    const users = responseData.allUsers;
    console.log(users);
    for (let i = 0; i < users.length; i++) { 
        const postDiv = document.createElement("div");
        postDiv.className = "post";

        const imgPost = document.createElement("img");
        imgPost.src = users[i].imgURL;

        const name = document.createElement("h4");
        name.textContent = `${users[i].firstName} ${users[i].lastName}`;

        const email = document.createElement("p");
        email.textContent = users[i].email;

        const messageBut = document.createElement("button");
        messageBut.textContent = "Messagess";

        postDiv.appendChild(imgPost);
        postDiv.appendChild(name);
        postDiv.appendChild(email);
        postDiv.appendChild(messageBut);

        container2.appendChild(postDiv);
    }
}
