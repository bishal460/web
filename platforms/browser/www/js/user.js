function Register(){
	window.location='user/registration.html';
}

function userRegister(){

 	 $(document).ready(function(){
    $('#userForm').submit(function(){
     
        // show that something is loading
        $('#response').html("<b>Loading response...</b>");
         
       
        $.post('https://artist460.000webhostapp.com/api.php?module=user&task=storeAll', $(this).serialize(), function(data){
             
            // show the response
            // $('#response').html(data);
            alert("Successfully regsitered!!");
             
        }).fail(function(xhr, status, error) {
         
            // just in case posting your form failed
            
            alert( xhr );
            alert(status);
            alert(error);
             
        });
 
        // to prevent refreshing the whole page page
        // return false;
 
    });
});

}

function backLogin(){
	window.location ="../index.html";
}


function Login(){



    var useremail= document.getElementById('userEmail').value
    var userpassword=document.getElementById('userPassword').value

    var userApi = "https://artist460.000webhostapp.com/api.php?module=user&task=loginAll";
    $.post( userApi, {useremail: useremail, userpassword: userpassword})
    .done(function(response){
        console.log(response);
        data = JSON.parse(response);
        console.log(data.status);
         if(data.status==200){
            localStorage.setItem('user', JSON.stringify(data.data));
            console.log('set in local storage');
            if(data.data.type=='manager'){
                alert("Successfully Logged in");
                window.location ='manager/managerdashboard.html';


            }else{
                alert("Successfully Logged in");
                window.location="user/userdashboard.html";
            }
        }

    });



}

function myFunction(){

var articleData;
(function() {
    var newsAPI = "https://artist460.000webhostapp.com/api.php?module=event&task=listAll";
    $.getJSON( newsAPI)
    .done(function( data ) {
        if(data.status==200){
            $("#newslist").empty();
            eventList = data.data;
            $.each( eventList, function( i, event ) {
                

                var updatebutton =$("<a>").attr("href","#book")
                .attr("data-transition","slidedown").html("Book")
                .click({param1: i}, setUpdateData);

                 


                var eventName = $("<h1>").html(event.eventName); 
                var eventLocation=$("<p>").html(event.eventLocation);
                var eventDes = $("<p>").html(event.eventDes); 
                var eventDate = $("<p>").html(event.eventDate); 
                var eventPrice = $("<p>").html(event.eventPrice); 
                var listitem = $("<li>");
                var eventId = $("<p>").html(event.eventId); 
                 listitem.append(eventId);
                listitem.append(eventName);
                listitem.append(eventLocation);
                listitem.append(eventDes);
                listitem.append(eventDate);
                listitem.append(eventPrice);
                listitem.append(updatebutton);
               
                $("#newslist").append(listitem);
                 
            });
            $("#newslist").listview("refresh");
        }
        
    });
})();
}
function setUpdateData(event){
    var i = event.data.param1;
     var eventName = eventList[i].eventName;
     var eventLocation = eventList[i].eventLocation;
     var eventId = eventList[i].eventId;
     $("#eventId").val(eventId);
    $("#eventName").val(eventName);
    $("#eventLocation").val(eventLocation);
     
}

function book(){
     $(document).ready(function(){
    $('#userForm').submit(function(){
     
        // show that something is loading
        $('#response').html("<b>Loading response...</b>");
         
       
        $.post('https://artist460.000webhostapp.com/api.php?module=event&task=bookAll', $(this).serialize(), function(data){
             
            // show the response
            $('#response').html(data);
            alert("Successfully booked!!");
            window.location ="userdashboard.html";
             
        }).fail(function() {
         
            // just in case posting your form failed
            alert( "Posting failed." );
             
        });
 
        // to prevent refreshing the whole page page
        return false;
 
    });
});



}

function Logout(){
    // alert("hello");
                localStorage.removeItem('user');
                window.location= "../index.html";
                alert("Successfully Logged out!!");
}


