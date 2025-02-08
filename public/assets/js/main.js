//console.log("wee woo");

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

console.log(dd);
console.log(mm);
console.log(yyyy);

var default_date = `${yyyy}-${mm}-${dd}`;

var request_string = `https://api.nasa.gov/planetary/apod?api_key=scZ5BKkgDMqOfUgjoZbu1nXEFkG8uuDCCdW9PKK5&start_date=${default_date}&end_date=${default_date}`;

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

        //change src of the img
        page_img.src= data[0].url;
        img_desc.innerHTML = data[0].explanation;


    } catch (error) {
        console.log(error);
    }

}

getData(request_string);
//getData(test_string);