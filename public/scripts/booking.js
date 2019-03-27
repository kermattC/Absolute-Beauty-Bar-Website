$(document).ready(function () {
  
  $(".BOOKME").append("<p>SELECT A STYLE</p>");
  $(".BOOKME").append("<table align='center' class='tableBook' id='TABLE'>");
  $("#TABLE").append("<tr><td>" + "<img id='Cat' src='../images/Cat.jpg' " + "</td>" +
    "<td>" + "<img id='Doll' src='../images/Doll.jpg'" + "</td>" + "</tr>" +
    "<tr>" + "<td>" + "<img id='Natural' src='../images/Natural.jpg' " + "</td>" +
    "<td>" + "<img id='Open' src='../images/Open.jpg'" + "</td>" + "</tr>");
  $(".BOOKME").append("</table>")
  $(".BOOKME").addClass("BOOKME2");
  $("#TABLE").addClass("tableBook")

  $('img').click(function (event) {
    displayData();
    deselectAll();
    if ($(document).find($('#newForm'))) {
      $('#newForm').remove();
    }
    if ($(document).find($('#calendar'))){
      $('#calendar').remove();
    }
    if ($(document).find($('#notice'))){
      $('#notice').remove();
    }
    var element = document.getElementById(event.target.id);
    element.classList.toggle("selected");

    let newForm = $(document.createElement("div"));
    newForm.attr('id', 'newForm');
    newForm.addClass('boxBooking');
    newForm.append($("<p> Style: " + event.target.id + "</p>"));

    newForm.append($("<form>" + "FIRST NAME: " + "<input type='text' id='firstNameField' name='FirstName'>"));
    newForm.append($("<br/>" + "LAST NAME: " + "<input type='text' id='lastNameField' name='lasttName'>" + "<br/>"));
    newForm.append($("<br/>" + "DATE: " + "<input id='date' type='date' name='date'>"));
    newForm.append($("<br/>" + "<button type='submit'  onclick='submitForm()' >" + "Submit" + "</button>"));
    newForm.insertAfter($('#booking'));

    newForm[0].scrollIntoView();
  });

  function deselectAll() {
    let selected = document.getElementsByTagName('img');
    for (let i = 0; i < selected.length; i++) {
      selected[i].className = "";
    }
  }
});

function submitForm() {
  if ($(document).find($('#notice'))){
    $('#notice').remove();
  }
  let firstName = document.getElementById('firstNameField').value;
  let lastName = document.getElementById('lastNameField').value;
  let date = document.getElementById('date').value;
  console.log("Form date: " + date);
  let style = $(document).find("img.selected").attr("id");
  let booked = false
  let currentDate = ""

  console.log("First name: " + firstName);
  console.log("Last Name: " + lastName);
  console.log("Date: " + date);
  console.log("Style: " + style);

  
  // Attempt: Prevent user from entering empty fields
  // if (firstName == "" || lastName == ""){
  //   $('.BOOKME').append("<p> Please enter a valid name</p>");
  // }
  
  
  // check that the day is not already booked
  $.ajax({
  type: 'GET',
  dataType: "text",
  url: '/database_read',
  success: function (data) {
    data = JSON.parse(data);
  
    let dates = [];
    let months = [];
    let years = [];
    
    for (let i = 0; i < data.length; i++){
      console.log(data[i].Date.substring(0,4))
      years[i] = data[i].Date.substring(0,4)
      months[i] = data[i].Date.substring(5,7)
      dates[i] = data[i].Date.substring(8,10)
      currentDate = years[i]+"-"+months[i]+"-"+dates[i]
      console.log("system date: " + currentDate);
      console.log("user date: " + date)
      if (date == currentDate){
        console.log("Day already booked")
        booked = true;
      } 
    }
    if (!booked){
      console.log("booking successful")
      $.ajax({
        url: "/database_update",
        data: {
          "firstName": firstName,
          "lastName": lastName,
          "Date": date,
          "Style": style
        },
        dataType: 'json',
        type: "POST"
      });
      let notice = $("<p id='notice'>Your appointment has been booked! See you soon!</p>");
      notice.addClass('notice');
      if ($(document).find($('#booking'))) {
        notice.insertAfter($('#booking'))
      }
    }else{
      console.log("booking unsuccessful");
      let notice = $("<p id='notice'>Sorry, the day you selected is already booked. Please choose another day </p>");
      notice.addClass('notice');
      if ($(document).find($('#booking'))) {
        notice.insertAfter($('#booking'));
      }
    }
  }
});
  
  
}
function displayData() {
  
  $.ajax({
    type: 'GET',
    dataType: "text",
    url: '/database_read',
    success: function (data) {
      data = JSON.parse(data);
     // console.log("data loaded");

      var months = ["January", "February", "March", "April", "June", "July", "August", "September", "October", "November", "December"];
      var monthId = 2;
      var currentMonth = months[monthId];
      let calendar = $(document.createElement("table"));
      calendar.attr('id', 'calendar');
      calendar.addClass('calendar');

      calendar.append($("<div id='month'>" + currentMonth + "</div>"));
      calendar.append($("<button id='prevButton'" + "Previous" + "</button>"));
      calendar.append($("<button id='nextButton'" + "Next" + "</button>"));

      calendar.append($("<tr> <th class='days'>Sunday</th> <th class='days'>Monday</th> <th class='days'>Tuesday</th> <th class='days'>Wednesday</th> <th class='days'>Thursday</th> <th class='days'>Friday</th> <th class='days'>Saturday</th></tr>"));
      calendar.append($("<tr> <td>1</td> <td>2</td> <td>3</td> <td>4</td> <td>5</td> <td>6</td> <td>7</td></tr>"));
      calendar.append($("<tr> <td>8</td> <td>9</td> <td>10</td> <td>11</td> <td>12</td> <td>13</td> <td>14</td></tr>"));
      calendar.append($("<tr> <td>15</td> <td>16</td> <td>17</td> <td>18</td> <td>19</td> <td>20</td> <td>21</td></tr>"));
      calendar.append($("<tr> <td>2</td> <td>23</td> <td>24</td> <td>25</td> <td>26</td> <td>27</td> <td>28</td></tr>"));
      calendar.append($("<tr> <td>29</td> <td>30</td> <td>31</td>"));
      
      // calendar.appennd($('#booking'));
      // $('#booking').appendTo(calendar)
      calendar.insertAfter($('#booking'));

      // update to the next month
      $('#prevButton').on("click", function(){
        monthId -= 1;
        if (monthId == 0){
          monthId = 12;
        }
        document.getElementById('month').innerHTML = months[monthId]
      });

      $('#nextButton').on("click", function(){
        monthId += 1;
        if (monthId == 13){
          monthId = 1;
        }
        document.getElementById('month').innerHTML = months[monthId]
      });

      // for (let i = 0; i < data.length; i++){
      //   // console.log(data[i].Date);
      //   // console.log(data[i].Date.substring(5,7))  // month
      //   // console.log(data[i].Date.substring(8,10)) // date
      // }
    }
  });
}

