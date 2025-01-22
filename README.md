# ECE140-WI25-Lab3

Run the command below to build the docker image and start the server:

```
docker-compose up
```

You should then get some terminal output showing that the server is running, just like what we've seen in Lab Session 1.

You can then navigate to `http://localhost:8000/docs` to see the API documentation and test the API.

Also, if you open up Docker Desktop, you'll be able to see the running container.

## Instructions

Please see the Lab Session 3 slides posted on Canvas.

### Part 1: Alert

1. Go to `http://localhost:8000/counter`
2. Now, modify `counter.js` to display a pop-up alert when the page loads. *Hint*: you can use the `alert` function in JavaScript to help you with this.

### Part 2: `initializeCounter()` in `counter.js`

1. Open up `static/js/counter.js` in your text editor.
2. Complete the function called `initializeCounter()`.
   1. This function has a placeholder line `count = 0`. 
   2. Your task is to replace this line with the code that fetches the current count from the server. Inside `main.py`, there is a GET route called `/get_count` that returns a JSON object with the current count, in the format `{"count": i}`, where `i` is the current count. You can use the `fetch` function in JavaScript to make a GET request to this route, and then extract the count from the response.
3. After you're done, make sure to call the `initializeCounter()` function when the page loads. You can do this by adding an event listener that calls the function when the DOM content is loaded. Adding the code below to the end of `counter.js` should do the trick:

```javascript
document.addEventListener('DOMContentLoaded', function() {
    initializeCounter();
});
```

### Part 3: `setConnectionStatus()` in `counter.js`

1. As before, open up `static/js/counter.js` in your text editor.
2. Complete the function called `setConnectionStatus()`.
   1. The HTML page `counter.html` contains a `div` element with the ID `connectionStatus`.
   2. You need to write code that updates the text of this element to display "Connected" and set the color of the text to green.
3. After you're done, make sure to call the `setConnectionStatus()` function when the page loads. You can add the call to `setConnectionStatus()` in the same event listener that you added in Part 2.

### Part 4: Fixing a bug in `cart.js`

1. Open up `static/js/cart.js` in your text editor and read through it.
2. Go to `http://localhost:8000/cart`.
3. The page displays a product, it's price, and contains (+) and (-) buttons that allow you to increase or decrease the quantity of the product in your cart.
4. When the website loads, the `initializePrice()` function is called, which is supposed to fetch the initial price of the product from the server and display it on the page.
5. The initial price can be found from the GET route `/api/price` in `main.py`. This route returns a JSON object with the price of the product, in the format `{"price": p}`, where `p` is the price of the product.
6. While the (+) and (-) buttons work, there is a bug in the code where the initial price of the product does not correctly get fetched from the server, i.e. `initializePrice()` is not working as expected. The price is always displayed as `0`, when in reality, it should be something else!
7. Your task is to fix this bug. After fixing it, you should see that the price of the product is correctly displayed on the page when it loads. *Hint*: Is `fetch` being used correctly? 