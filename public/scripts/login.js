$(document).ready(function () {
    $('#submitButton').on("click", function(){
        // var userName = $(this).val();
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;
        console.log(username);
        console.log(password);
    });
});