$(document).ready(function () {
  $(".BOOKME").append("<p>SELECT A STYLE</p>");
  $(".BOOKME").append("<table align='center' class='tableBook' id='TABLE'>");
  $("#TABLE").append("<tr><td>" + "<img id='Cat' src='../images/Cat.jpg' onClick=document.getElementById('Cat').scrollIntoView();>" + "</td>" +
                                "<td>" + "<img id='Doll' src='../images/Doll.jpg' onClick=document.getElementById('Doll').scrollIntoView();>" + "</td>" + "</tr>" + 
                                "<tr>" +"<td>" + "<img id='Natural' src='../images/Natural.jpg' onClick=document.getElementById('Natural').scrollIntoView();>" + "</td>" + 
                                "<td>" + "<img id='Open' src='../images/Open.jpg' onClick=document.getElementById('Open').scrollIntoView();>" + "</td>" +"</tr>");
  $(".BOOKME").append("</table>")
  $(".BOOKME").addClass("BOOKME2");
  $("#TABLE").addClass("tableBook")

  // $("#CAT").click(function(){
  //   catFunction();
  // });

  // $("#DOLL").click(function(){
  //   dollFunction();
  // });

  // $("#NATURAL").click(function(){
  //   naturalFunction();
  // });

  // $("#OPEN").click(function(){
  //   openFunction();
  // });

/*
<div class="boxBooking" id="booking">
    <div class="row">
      <div class="BOOKME">
*/

$('img').click(function(event){


  if ($(document).find($('#newForm'))){
    $('#newForm').remove();;
    console.log("removing form");
  }
    let newForm = $(document.createElement("div"));
    newForm.attr('id', 'newForm');
    newForm.addClass('boxBooking');
    newForm.append($("<p> You have selected style: " + event.target.id + "</p>"));
    newForm.append($("<form><br/>" + "FIRST NAME: " +"<input type='text' name='FirstName'>"));
    newForm.append($("<br/>" + "LAST NAME: " +"<input type='text' name='lasttName'>" + "<br/>"));
    newForm.append($("<br/>" + "DATE: " +"<input type='date' name='date'>"));
    newForm.append($("<br/> "+ "<input type='submit' id='SUBMIT' value='Confirm Booking'>" + "</form>"));
  
    newForm.insertAfter($('#booking'));
});
});
// $('#CAT').click(function(event){
//   console.log("cat clicked");
//   let newForm = $(document.createElement("div"));
//   newForm.attr('id', 'newForm');
//   newForm.addClass('boxBooking');
//   newForm.append($("<form><br/>" + "FIRST NAME: " +"<input type='text' name='FirstName'>"));
//   newForm.append($("<br/>" + "LAST NAME: " +"<input type='text' name='lasttName'>" + "<br/>"));
//   newForm.append($("<br/>" + "DATE: " +"<input type='date' name='date'>"));
//   newForm.append($("<br/> "+ "<input type='submit' id='SUBMIT' value='Confirm Booking'>" + "</form>"));

//   newForm.insertAfter($('#booking'));
// //  $('#booking').append(newForm);
// });


// $('#DOLL').click(function (event){
//   console.log("dol clicked");
// });

// $('#NATURAL').click(function(event){
//   console.log("natural clicked");
// });

// $('#OPEN').click(function(event){
//   console.log("open clicked");
// });

// });
// function catFunction(){
//   $('.CAT').click(false);

//   $(".DOLL").hide();
//   $(".NATURAL").hide();
//   $(".OPEN").hide();

//   $("#form").append("<form><br/>" + "FIRST NAME: " +"<input type='text' name='FirstName'>");
//   $("#form").append("<br/>" + "LAST NAME: " +"<input type='text' name='lasttName'>" + "<br/>");
//   $("#form").append("<br/>" + "DATE: " +"<input type='date' name='date'>");
//   $("#form").append("<br/> "+ "<input type='submit' id='SUBMIT' value='Confirm Booking'>" + "</form>");

// }


// function dollFunction(){
//   $('.DOLL').click(false);

//   $(".CAT").hide();
//   $(".NATURAL").hide();
//   $(".OPEN").hide();

//   $("#form").append("<form><br/>" + "FIRST NAME: " +"<input type='text' name='FirstName'>");
//   $("#form").append("<br/>" + "LAST NAME: " +"<input type='text' name='lasttName'>" + "<br/>");
//   $("#form").append("<br/>" + "DATE: " +"<input type='date' name='date'>");
//   $("#form").append("<br/> "+ "<input type='submit' id='SUBMIT' value='Confirm Booking'>" + "</form>");
// }

// function naturalFunction(){
//   $('.NATURAL').click(false);

//   $(".CAT").hide();
//   $(".DOLL").hide();
//   $(".OPEN").hide();

//   $("#form").append("<form><br/>" + "FIRST NAME: " +"<input type='text' name='FirstName'>");
//   $("#form").append("<br/>" + "LAST NAME: " +"<input type='text' name='lasttName'>" + "<br/>");
//   $("#form").append("<br/>" + "DATE: " +"<input type='date' name='date'>");
//   $("#form").append("<br/> "+ "<input type='submit' id='SUBMIT' value='Confirm Booking'>" + "</form>");
// }

// function openFunction(){
//   $('.OPEN').click(false);

//   $(".CAT").hide();
//   $(".NATURAL").hide();
//   $(".DOLL").hide();

//   $("#form").append("<form><br/>" + "FIRST NAME: " +"<input type='text' name='FirstName'>");
//   $("#form").append("<br/>" + "LAST NAME: " +"<input type='text' name='lasttName'>" + "<br/>");
//   $("#form").append("<br/>" + "DATE: " +"<input type='date' name='date'>");
//   $("#form").append("<br/> "+ "<input type='submit' id='SUBMIT' value='Confirm Booking'>" + "</form>");



