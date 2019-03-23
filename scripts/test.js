// $(document).ready(function myFunction() {
  // // $(".")
  // $(".BOOKME").append("<p>SELECT A STYLE</p>");
  // $(".BOOKME").append("<table align='center' class='tableBook' id='TABLE'>");
  // $("#TABLE").append("<tr><td>" + "<img id='CAT' src='../images/Cat.jpg'>" + "</td>" + "<td>" 
  //                     + "<img class='DOLL' src='../images/Doll.jpg'>" + "</td>" + "</tr>" + "<tr>" +"<td>" 
  //                     + "<img class='NATURAL' src='../images/Natural.jpg'>" + "</td>" + "<td>" 
  //                     + "<img class='OPEN' src='../images/Open.jpg'>" + "</td>" +"</tr>");
  // $(".BOOKME").append("</table>")
  // $(".BOOKME").addClass("BOOKME2");
  // $("#TABLE").addClass("tableBook")
// });

function myFunction(){
  $('.CAT').click(false);

  $(".DOLL").hide();
  $(".NATURAL").hide();
  $(".OPEN").hide();

  $("#form").append("<form><br/>" + "FIRST NAME: " +"<input type='text' name='FirstName'>");
  $("#form").append("<br/>" + "LAST NAME: " +"<input type='text' name='lasttName'>" + "<br/>");
  $("#form").append("<br/>" + "DATE: " +"<input type='date' name='date'>");
  $("#form").append("<br/> "+ "<input type='submit' value='Confirm Booking'>" + "</form>");

}


function myFunction2(){
  $('.DOLL').click(false);

  $(".CAT").hide();
  $(".NATURAL").hide();
  $(".OPEN").hide();

  $("#form").append("<form><br/>" + "FIRST NAME: " +"<input type='text' name='FirstName'>");
  $("#form").append("<br/>" + "LAST NAME: " +"<input type='text' name='lasttName'>" + "<br/>");
  $("#form").append("<br/>" + "DATE: " +"<input type='date' name='date'>");
  $("#form").append("<br/> "+ "<input type='submit' value='Confirm Booking'>" + "</form>");
}

function myFunction3(){
  $('.NATURAL').click(false);

  $(".CAT").hide();
  $(".DOLL").hide();
  $(".OPEN").hide();

  $("#form").append("<form><br/>" + "FIRST NAME: " +"<input type='text' name='FirstName'>");
  $("#form").append("<br/>" + "LAST NAME: " +"<input type='text' name='lasttName'>" + "<br/>");
  $("#form").append("<br/>" + "DATE: " +"<input type='date' name='date'>");
  $("#form").append("<br/> "+ "<input type='submit' value='Confirm Booking'>" + "</form>");
}

function myFunction4(){
  $('.OPEN').click(false);

  $(".CAT").hide();
  $(".NATURAL").hide();
  $(".DOLL").hide();

  $("#form").append("<form><br/>" + "FIRST NAME: " +"<input type='text' name='FirstName'>");
  $("#form").append("<br/>" + "LAST NAME: " +"<input type='text' name='lasttName'>" + "<br/>");
  $("#form").append("<br/>" + "DATE: " +"<input type='date' name='date'>");
  $("#form").append("<br/> "+ "<input type='submit' value='Confirm Booking'>" + "</form>");
}



