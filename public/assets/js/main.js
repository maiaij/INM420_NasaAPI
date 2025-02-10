/** 
 *  Maia Johnson
 *  February 10, 2025
*/

// set the current day string for the default display
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

// format the date for the request
var default_date = `${yyyy}-${mm}-${dd}`;
var selected_date = default_date;

//set the max date as today
document.getElementById("date_picker").max = default_date;

var request_string = `https://api.nasa.gov/planetary/apod?api_key=scZ5BKkgDMqOfUgjoZbu1nXEFkG8uuDCCdW9PKK5&start_date=${selected_date}&end_date=${selected_date}`;
var test_string = "https://api.nasa.gov/planetary/apod?api_key=scZ5BKkgDMqOfUgjoZbu1nXEFkG8uuDCCdW9PKK5&start_date=2017-07-08&end_date=2017-07-10";


// get the API data
async function getData(api_url){
    try {
        // make a request to the api
        const response = await fetch(api_url);
        
        // convert the response to a json
        const data = await response.json();
        //console.log(data[0]);

        //pull the information you want from the request
        //select html where the image & description will go
        const page_img = document.getElementById("pictureOTD");
        const img_desc = document.getElementById("img_desc");
        const img_title = document.getElementById("img_title");
        const req_date = document.getElementById("img_date");

        //change src of the img
        page_img.src= data[0].url;

        // put the date in a Date object to convert to text
        var tmp_date = new Date(`${data[0].date}T00:00:00`);
        //console.log(tmp_date.toDateString());

        //add the text items
        img_desc.innerHTML = data[0].explanation;
        img_title.innerHTML = data[0].title;
        req_date.innerHTML = tmp_date.toDateString();


    } catch (error) {
        console.log(error);
    }

}

getData(request_string);

document.getElementById("date_picker").addEventListener("change", function() {
    var input = this.value;
    selected_date = input;
    request_string = `https://api.nasa.gov/planetary/apod?api_key=scZ5BKkgDMqOfUgjoZbu1nXEFkG8uuDCCdW9PKK5&start_date=${selected_date}&end_date=${selected_date}`;
    getData(request_string);
});