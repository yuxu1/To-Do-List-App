function newItem() {
    //jQuery
    //1. Adding a new item to the list of items:
    let inputValue = $('#input').val();
    let list = $('#list');
    let li = $('<li></li>');
    li.append(inputValue);

    //check if inputted value exists before adding to list
    if (inputValue === '') {
        alert('You must write something!');
    } else {
        list.append(li);
    }

    //2. Crossing out an item from the list of items
    function crossOut() {
        li.toggleClass('strike');
    }
    //double click to cross out list item
    li.on('dblclick', function () {
        li.toggleClass('strike');
    })

    //3(i). Add delete button "X":
    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);
    crossOutButton.on('click', deleteListItem);

    //3(ii.) Add CLASS DELETE (DISPLAY:NONE) from the css:
    function deleteListItem() {
        li.addClass('delete');
    }

    // 4. Reordering the items: 
    $('#list').sortable();
}

//can press "Enter" to add item to list
//fixes bug -"Enter" normally refreshes page,erasing all list items
$(document).ready(function(){
    $('#input').keypress(function(event){
        //keyCode 13 = "Enter"
        if(event.keyCode===13){
            event.preventDefault();
            newItem();
        }
    });
});