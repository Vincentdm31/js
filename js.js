var req = new XMLHttpRequest();
req.responseType = 'json';
req.open('GET', './json.json', true);
req.onload  = function() {
   var jsonResponse = req.response;
   // do something with jsonResponse
   //console.log(jsonResponse)

  Array.from(jsonResponse.todo).forEach(function(todo) {


    // Create a div and set class
    var mydiv = document.getElementById('mydiv');

    var div = document.createElement("div");
    div.setAttribute("class", "card w100 shadow-1");

    var card_header = document.createElement("div");
    card_header.setAttribute("class", "card-header txt-center");
    
    var card_content = document.createElement("div");
    card_content.setAttribute("class", "card-content txt-center");

    var button = document.createElement("a");
    button.setAttribute("class", "btn shadow-1 mx-auto airforce dark-4");
    
    // Add some text
    card_header.appendChild(document.createTextNode(todo.state));
    card_content.appendChild(document.createTextNode(todo.name));
    button.appendChild(document.createTextNode('Fait'));

    // Add it to the document body
    
    div.appendChild(card_header);
    div.appendChild(card_content);
    div.appendChild(button);
    mydiv.appendChild(div);

  })
};
req.send(null);

var btn = document.getElementById('add');

btn.addEventListener("click", function(e) {
  e.preventDefault();
 test();
});

function test(){
    var input = document.getElementById('input').value;

    var mydiv = document.getElementById('mydiv');

    var div = document.createElement("div");
    div.setAttribute("class", "card w100 shadow-1");

    var card_header = document.createElement("div");
    card_header.setAttribute("class", "card-header txt-center");
    
    var card_content = document.createElement("div");
    card_content.setAttribute("class", "card-content txt-center");

    var button = document.createElement("a");
    button.setAttribute("class", "btn shadow-1 mx-auto airforce dark-4");
    
    // Add some text
    card_header.appendChild(document.createTextNode('à faire'));
    card_content.appendChild(document.createTextNode(input));
    button.appendChild(document.createTextNode('Fait'));

    // Add it to the document body
    
    div.appendChild(card_header);
    div.appendChild(card_content);
    div.appendChild(button);
    mydiv.appendChild(div);
}