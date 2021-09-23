document.addEventListener('DOMContentLoaded', () => {

    const addSquareButton = document.createElement("button");
    addSquareButton.textContent = "Nice compliment to you!";
    document.body.appendChild(addSquareButton);

    addSquareButton.addEventListener("click", function () {
        alert("Why Hello there Beautiful!") 
    })

    let container = document.createElement("div");
    let div = document.createElement('div');
    let button = document.createElement('button');
    let paragraph = document.createElement('p');
    let spanButton = document.createElement('button');
    let spanDiv = document.createElement('div');
    let paragraphText = document.createTextNode("Flash is the best speedster!");
    let textButton = document.getElementById('textButton');
    let textInput = document.getElementById('textInput');
    let friendspart = document.getElementById('friendspart');
    let myFriendsButton = document.getElementById('addFriend');
    let friendslist = ["Gavin", "Madalynn", "Chris", "Ashlyn", "Shae", "Tristan", "Tatum", "Tony", "Emma", "Meagan"];

    myFriendsButton.innerHTML = "Add friend";
    div.style.height = "10em"; // Big Boi
    paragraph.appendChild(paragraphText);
    container.appendChild(div);
    container.appendChild(paragraph);
    container.appendChild(spanDiv);
    document.body.appendChild(container);

    textButton.addEventListener('click', function () {
        alert(textInput.value);
    })
    div.addEventListener('mouseenter', function () {
        div.style.background = "Red";
    })
    div.addEventListener('mouseleave', function () {
        div.style.background = "white";
    })
    paragraph.addEventListener('click', function () {
        paragraph.style.color = 'rgb(' + colorR + ')';
    })

    myFriendsButton.addEventListener('click', function () {
        for (let i = 0; i < friendslist.length; i++) {
            let friend = document.createElement('li');
            let friendName = document.createTextNode(friendslist[i]);
            friend.appendChild(friendName);
            friendspart.appendChild(friend);
        }
    })

})