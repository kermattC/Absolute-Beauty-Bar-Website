$(document).ready(function () {

  displayData();
  $(".BOOKME").append("<p>SELECT A STYLE</p>");
  $(".BOOKME").append("<table align='center' class='tableBook' id='TABLE'>");
  $("#TABLE").append("<tr><td>" + "<img id='Cat' src='../images/Cat.jpg' " + "</td>" +
                                "<td>" + "<img id='Doll' src='../images/Doll.jpg'" + "</td>" + "</tr>" + 
                                "<tr>" +"<td>" + "<img id='Natural' src='../images/Natural.jpg' " + "</td>" + 
                                "<td>" + "<img id='Open' src='../images/Open.jpg'" + "</td>" +"</tr>");
  $(".BOOKME").append("</table>")
  $(".BOOKME").addClass("BOOKME2");
  $("#TABLE").addClass("tableBook")

  $('img').click(function(event){
  deselectAll();
  if ($(document).find($('#newForm'))){
    $('#newForm').remove();;
  }
    var element = document.getElementById(event.target.id);
    element.classList.toggle("selected");

    let newForm = $(document.createElement("div"));
    newForm.attr('id', 'newForm');
    newForm.addClass('boxBooking');
    newForm.append($("<p> Style: " + event.target.id + "</p>"));

    newForm.append($("<form>" + "FIRST NAME: " +"<input type='text' id='firstNameField' name='FirstName'>"));
    newForm.append($("<br/>" + "LAST NAME: " +"<input type='text' id='lastNameField' name='lasttName'>" + "<br/>"));
    newForm.append($("<br/>" + "DATE: " +"<input id='date' type='date' name='date'>"));
    newForm.append($("<button type='submit'  onclick='submitForm()' >" + "Submit" + "</button>"));
    newForm.insertAfter($('#booking'));

    newForm[0].scrollIntoView();
  });

  function deselectAll(){
    let selected = document.getElementsByTagName('img');
    for (let i = 0; i < selected.length; i++){
      selected[i].className = "";
    }
  }

 
});

function submitForm(){
  let firstName = document.getElementById('firstNameField').value;
  let lastName = document.getElementById('lastNameField').value;
  let date = document.getElementById('date').value;

  console.log("First name: " + firstName);
  console.log("Last Name: " + lastName);
  console.log("Date: " + date);
}

function displayData(){
  $.ajax({
    type: 'GET',
    dataType:"text",
    url: '/database',
    success:function(data){
        console.log("data loaded");
        // console.log(data.split("\n"));
  
        // for (let i = 0; i < student_data.length; i++){
        //     students[i] = student_data[i].split(",");
           // console.log(students[i]);
        // }
    }
  });
}
