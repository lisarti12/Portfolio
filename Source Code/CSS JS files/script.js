function addItem(name, price) {

    if (name && price) {

        var item = {
            name: name,
            price: price
        };

        if (typeof(Storage) !== "undefined") {

            var items = JSON.parse(localStorage.getItem("items")) || [];


            items.push(item);

            localStorage.setItem("items", JSON.stringify(items));

            alert("Item added successfully!");
        } else {
            alert("Sorry, your browser does not support localStorage.");
        }
    } else {
        alert("Please provide both item name and price.");
    }
}

function displayItems() {
    if (typeof(Storage) !== "undefined") {
        var items = JSON.parse(localStorage.getItem("items")) || [];

        var itemsContainer = document.getElementById("itemsContainer");
        itemsContainer.innerHTML = "<h2>Items:</h2>";

        if (items.length > 0) {
            var itemList = document.createElement("ul");

            items.forEach(function(item) {
                var listItem = document.createElement("li");
                listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
                itemList.appendChild(listItem);
            });

            itemsContainer.appendChild(itemList);
        } else {
            itemsContainer.innerHTML += "<p>No items found.</p>";
        }
    } else {
        alert("Sorry, your browser does not support localStorage.");
    }
}
function deleteItems() {
    if (typeof(Storage) !== "undefined") {
        localStorage.removeItem("items");

        var itemsContainer = document.getElementById("itemsContainer");
        itemsContainer.innerHTML = "<p>Items deleted successfully.</p>";
    } else {
        alert("Sorry, your browser does not support localStorage.");
    }
}

function sumPrices() {
    if (typeof(Storage) !== "undefined") {
        var items = JSON.parse(localStorage.getItem("items")) || [];

        var totalSum = items.reduce(function(sum, item) {
            return sum + item.price;
        }, 0);

        var totalSumElement = document.getElementById("totalSum");
        totalSumElement.textContent = `Total Sum: $${totalSum.toFixed(2)}`;
    } else {
        alert("Sorry, your browser does not support localStorage.");
    }
}
