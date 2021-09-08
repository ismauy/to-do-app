function newItem() {


    let li = $('<li></li>');
    let inputValue = $('#input').val();
    let list = $('#list');
    li.append(document.createTextNode(inputValue));

    if (inputValue === '') {
        alert("You must write something!");
    } else {
        list.append(li);
    }


    li.on('dblclick', function crossOut() {
        li.toggleClass('strike');
    });


    let crossOutButton = $('<crossOutButton> x </crossOutButton>');
    li.append(crossOutButton);


    crossOutButton.on('click', function deleteListItem() {
        li.addClass("delete");
    });


    list.sortable();

}
