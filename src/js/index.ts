//Write your Typescript code here
//Task 1:
let myElement:HTMLElement = <HTMLElement> document.getElementById("0");
console.log(myElement);

let myList:HTMLCollectionOf<HTMLElement> = <HTMLCollectionOf<HTMLElement>> document.getElementsByTagName("li");
console.log(myList);

//Task 2:
for(let i = 0; i < myList.length; i++)
{
    let element = myList[i];
    console.log("\n"+element.className);
    console.log(element.innerText);
}

//Task 3:
let marshmallows: HTMLElement;
let cashew: HTMLElement;
let unhealthies:HTMLElement;

for(let i = 0; i < myList.length; i++)
{
    let element = myList[i];

    if(element.innerText == "Marshmallows")
    {
        marshmallows = element;
        
    }    
    if(element.innerText == "Cashew nuts")
    {
        cashew = element;
    }
    if(element.className == "unhealthy")
    {
        //I dunno how to add it into the collection
    }
}
marshmallows.setAttribute("class", "healthy");
cashew.setAttribute("hidden", "true");

//Task 4:
let parentList:HTMLUListElement = <HTMLUListElement> marshmallows.parentNode;
let firstChild:HTMLElement = <HTMLElement> parentList.firstChild;
let lastChild:HTMLElement = <HTMLElement> parentList.lastChild;

console.log(parentList);
console.log(firstChild);
console.log(lastChild);

//firstChild.setAttribute("class", "unhealthy");
//Doesn't work, I don't actually know what object it returns
//Task 5:
let newElement:HTMLElement = <HTMLElement> document.createElement("li");
newElement.setAttribute("class", "unhealthy");
let newElementText:HTMLElement = document.createElement("span");
newElementText.innerText = "Xannies";
newElement.appendChild(newElementText);
parentList.appendChild(newElement);

//Task 6:
let shoppingList: HTMLElement = <HTMLElement> document.getElementById("list");
let newItem: HTMLElement = <HTMLElement> document.createElement("li");
newItem.setAttribute("class", "healthy");
newItem.innerText = "Tier 3 Pokimane Subscription";
newItem.setAttribute("id", "1337");

for (let i = 0; i < shoppingList.children.length; i++)
{
    let element = <HTMLElement> shoppingList.children[i];
    if (i == 2)
    {
        shoppingList.insertBefore(newItem, element);
    }
}

//Task 7:
unhealthies = document.getElementById("listUnhealthy");
for(let i = 0; i < shoppingList.children.length; i++)
{
    let element = <HTMLElement> shoppingList.children[i];
    if(element.className == "unhealthy")
    {
        unhealthies.appendChild(element);
    }
}

//Task 8:
for(let i = 0; i < shoppingList.children.length; i++)
{
    let element = <HTMLElement> shoppingList.children[i];
    if(element.innerText == "Marchmallows")
    {
        element.innerText = "Snake Oil";
    }
}

for (let i = 0; i < shoppingList.children.length; i++)
{
    let element = <HTMLElement> shoppingList.children[i];

    if(element.innerText == "Apples")
    {
        element.innerText = "Předkožky";
    }
}

//Task 9:
for (let i = 0; i < shoppingList.children.length; i++)
{
    let element = <HTMLLIElement> shoppingList.children[i];

    if (element.innerText == "Předkožky")
    {
        shoppingList.removeChild(element);
    }
}
