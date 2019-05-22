function add(){
$(document).ready(function(){
$('#userForm').submit(function(){

// show that something is loading
$('#response').html("<b>Loading response...</b>");

$.post('https://artist460.000webhostapp.com/api.php?module=event&task=storeAll', $(this).serialize(), function(data){

// show the response
$('#response').html(data);
alert("succesfully added");

}).fail(function() {

// just in case posting your form failed
alert( "Posting failed." );

});

// to prevent refreshing the whole page page
return false;

});
});
}
function viewEvent(){
window.location ="view.html";
}
// retriving the data from the table event
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

    // var htmlItem = '
    //     <div data-role="controlgroup" data-type="horizontal" class="ui-corner-all ui-controlgroup ui-controlgroup-horizontal"><div class="ui-controlgroup-controls">
    //         <a href="index.html" data-role="button" data-icon="plus" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="c" class="ui-btn ui-btn-icon-left ui-corner-left ui-btn-up-c"><span class="ui-btn-inner ui-corner-left"><span class="ui-btn-text">Add</span><span class="ui-icon ui-icon-plus ui-icon-shadow">&nbsp;</span></span></a>
    //         <a href="index.html" data-role="button" data-icon="delete" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="c" class="ui-btn ui-btn-icon-left ui-corner-right ui-controlgroup-last ui-btn-up-c"><span class="ui-btn-inner ui-corner-right ui-controlgroup-last"><span class="ui-btn-text">Delete</span><span class="ui-icon ui-icon-delete ui-icon-shadow">&nbsp;</span></span></a>
    //     </div></div>
    // ';
    
    var Deletebutton =$("<a>").attr("href","#delete")
    .attr("data-transition","slidedown").html("asd")
    .click({param1: i}, setDeleteData);

    var updatebutton =$("<a>").attr("href","#update")
        .attr("data-transition","slidedown").html("Update")
        .click({param1: i}, setUpdateData);
        
        var eventName = $("<h1>").html(event.eventName);
        var eventLocation=$("<p>").html(event.eventLocation);
            var eventDes = $("<p>").html(event.eventDes);
                var eventDate = $("<p>").html(event.eventDate);
                    var eventPrice = $("<p>").html(event.eventPrice);
                        var listitem = $("<li>");
                            listitem.append(eventName);
                            listitem.append(eventLocation);
                            listitem.append(eventDes);
                            listitem.append(eventDate);
                            listitem.append(eventPrice);
                            listitem.append(updatebutton);
                            listitem.append(Deletebutton);
                            $("#newslist").append(listitem);
                            
                            });
                            $("#newslist").listview("refresh");
                            }
                            
                            });
                            })();
                            }
                            function setDeleteData(event){
                            var i = event.data.param1;
                            
                            var eventId = eventList[i].eventId;
                            $("#eventId").val(eventId);
                            }

                            function setUpdateData(event) {
                            var i = event.data.param1;
                            var eventName = eventList[i].eventName;
                            var eventId = eventList[i].eventId;
                            var eventLocation = eventList[i].eventLocation;
                            var eventDes = eventList[i].eventDes;
                            var eventDate = eventList[i].eventDate;
                            var eventPrice = eventList[i].eventPrice;
                            console.log(eventList[i]);
                            $("#eventId").val(eventId);
                            $("#eventName").val(eventName);
                            $("#eventLocation").val(eventLocation);
                            $("#eventDes").val(eventDes);
                            $("#eventDate").val(eventDate);
                            $("#eventPrice").val(eventPrice);
                            }

                            function backEvent(){
                            window.location="managerdashboard.html";
                            }
                            function Update(){
                            $('#userForm').submit(function(){
                            
                            // show that something is loading
                            $('#response').html("<b>Loading response...</b>");
                            
                            $.post('https://artist460.000webhostapp.com/api.php?module=event&task=updateAll', $(this).serialize(), function(data){
                            
                            // show the response
                            $('#response').html(data);
                            
                            }).fail(function() {
                            
                            // just in case posting your form failed
                            alert( "Posting failed." );
                            
                            });
                            
                            // to prevent refreshing the whole page page
                            return false;
                            
                            });
                            }
                            function Logout(){
                            localStorage.removeItem('user');
                            window.location= "../index.html";
                            alert("Successfully Logged out!!");
                            }