//console.log("wee woo");

// IF REQUEST IS EMPTY SAY PHOTO UNAVAILABLE

// set the current day string for the default display
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

console.log(today);
console.log(dd);
console.log(mm);
console.log(yyyy);

// GET RID OF THE -1
var default_date = `${yyyy}-${mm}-${dd}`;
var selected_date = default_date;
console.log(selected_date);

var request_string = `https://api.nasa.gov/planetary/apod?api_key=scZ5BKkgDMqOfUgjoZbu1nXEFkG8uuDCCdW9PKK5&start_date=${selected_date}&end_date=${selected_date}`;

var test_string = "https://api.nasa.gov/planetary/apod?api_key=scZ5BKkgDMqOfUgjoZbu1nXEFkG8uuDCCdW9PKK5&start_date=2017-07-08&end_date=2017-07-10";

//document.getElementById("p2").style.color = "blue";
//background-image: url();

// get the API data
async function getData(api_url){
    try {
        const response = await fetch(api_url);
        //console.log(response);
        
        const data = await response.json();
        console.log(data[0]);

        //select html where the image & description will go
        const page_img = document.getElementById("pictureOTD");
        const img_desc = document.getElementById("img_desc");
        const img_title = document.getElementById("img_title");
        const req_date = document.getElementById("img_date");

        //change src of the img
        page_img.src= data[0].url;

        // put the date in a Date object to convert to text
        var tmp_date = new Date(`${data[0].date}T00:00:00`);
        console.log(tmp_date.toDateString());

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
    console.log(input); //e.g. 2015-11-13
    request_string = `https://api.nasa.gov/planetary/apod?api_key=scZ5BKkgDMqOfUgjoZbu1nXEFkG8uuDCCdW9PKK5&start_date=${selected_date}&end_date=${selected_date}`;
    getData(request_string);
});


//getData(test_string);