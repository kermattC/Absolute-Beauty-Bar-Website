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



