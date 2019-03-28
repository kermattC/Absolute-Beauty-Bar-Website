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
    newForm.addClass('boxBooking2');
    newForm.append($("<p> Style: " + event.target.id + "</p>"));

    newForm.append($("<form>" + "FIRST NAME: " + "<input type='text' id='firstNameField' name='FirstName'>"));
    newForm.append($("<br/>" + "LAST NAME: " + "<input type='text' id='lastNameField' name='lasttName'>" + "<br/>"));
    newForm.append($("<br/>" + "DATE: " + "<input id='dateSelect' type='date' name='date'>"));
    newForm.append($("<br/>" + "<button type='submit'  onclick='submitForm()' >" + "Submit" + "</button>"));
    newForm.insertAfter($('#booking'));

    ;
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
  displayData();
  if ($(document).find('#bookedData')){
    $('#bookedData').remove();
  }
  if ($(document).find($('#notice'))){
    $('#notice').remove();
  }
  let firstName = document.getElementById('firstNameField').value;
  let lastName = document.getElementById('lastNameField').value;
  let date = document.getElementById('dateSelect').value;
  let style = $(document).find("img.selected").attr("id");
  let booked = false
  let currentDate = ""
  
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
        // console.log(data[i].Date.substring(0,4))
        years[i] = data[i].Date.substring(0,4)
        months[i] = data[i].Date.substring(5,7)
        dates[i] = data[i].Date.substring(8,10)
        currentDate = years[i]+"-"+months[i]+"-"+dates[i]
        // console.log("system date: " + currentDate);
        // console.log("user date: " + date)
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
        let notice = $("<p id='notice'>YOUR APPOINTMENT HAS BEEN BOOKED! SEE YOU SOON!</p>");
        if ($(document).find('#bookedData')){
          $('#bookedData').remove();
        }
        notice.addClass('notice');
        if ($(document).find($('#booking'))) {
          notice.insertAfter($('#booking'))
        }
      }else{
        console.log("booking unsuccessful");
        
        let notice = $("<p id='notice'>SORRY, THIS DAY HAS BEEN BOOKED. PLEASE CHOOSE ANOTHER DAY</p>");
        notice.addClass('notice');
        if ($(document).find($('#booking'))) {
          notice.insertAfter($('#booking'));
        }
      }
    }
  });
}
function displayData() {
  if ($(document).find('#bookedData')){
    $('#bookedData').remove();
  }
  let currentDate = '';

  $.ajax({
    type: 'GET',
    dataType: "text",
    url: '/database_read',
    success: function (data) {
      data = JSON.parse(data);
      console.log("data loaded");
      let currentDate = ''

      for (var i= 0; i < data.length; i++){
        currentDate[i] = data[i].Date;
      }
      let test = document.getElementById('dateSelect');
      // for some reason it only worked with extra if statements
      if (test){
        if ((test.value != undefined)){
          console.log('has date');
          let bookedData = $("<p id='bookedData'>Schedule for the next 7 days:</p>");
          bookedData.addClass('bookedData');
          if (test.value == ''){
            bookedData.append("<p>Enter in a date to see the availabilities</p>");
          }else{
            var date = test.value.substring(8,10)
            var month = test.value.substring(5,7)
            var year = test.value.substring(0,4)
            
            for (var i=1; i<8; i++){        
              var max = 0
              max = parseInt(max, 10)
              date = parseInt(date, 10)
              month = parseInt(month, 10)
              year = parseInt(year, 10)

              // set the max amount of days according to each month
              if (month % 2 == 0){
                max = 30;
              }else if (month %2 != 0){
                max = 31;
              }
              

              // check if it is the next month/year
              if ((date +1) > max){
                date = 0  
                if ((month +1 ) > 12){
                  month = 1
                  year += 1
                }else{
                  month += 1
                }
              }
              date += 1
          
              var userDay = year+'-'+month+'-'+date  
            
              // check database if date is already booked
              for (let j = 0; j < data.length; j++){
                var dbDate = parseInt(data[j].Date.substring(8,10))
                var dbMonth = parseInt(data[j].Date.substring(5,7))
                var dbYear = parseInt(data[j].Date.substring(0,4))
                // console.log(data[i].Date.substring(0,4))
                 currentDate = dbYear+'-'+dbMonth+'-'+dbDate
                 console.log("User date: " + userDay + " Database date: " + currentDate)
                if (userDay == currentDate){
                  booked = true;
                  break;
                }else{
                  booked = false;
                }
              }
              if (booked){
                bookedData.append("<p>"+userDay+": booked</p>");
              }else{
                bookedData.append("<p>"+userDay+": available</p>");
              }
            }
          }
          if ($(document).find($('#booking'))){
            bookedData.insertAfter($('#booking'));
          }

        }else{
          console.log('no date');
        }
      }
    }
  });
}

