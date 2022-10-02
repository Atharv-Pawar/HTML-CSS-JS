(function (){ 
    var userval = confirm('Know your location?');
    var x;
    if(userval == true){
        console.log("Allowed");

        // use below commented block only when API keys are active;
/*        function getLocation(){
            if (navigator.geolocation){
                navigator.geolocation.getCurrentPosition(showPosition, showError);
            }else {
                x.innerHTML = "Geolocation is not supported by this browser.";
            }
        }
        function showPosition(position){
            let latitude = position.coords.latitude;
            let longitude = position.coords.longitude;
            fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${a596b1a425d84ef796888a15d521127c}`)
            .then(response => response.json()).then(result => {
                let allDetails = result.results[0].components;
                let{city, country} = allDetails;
                console.log(city, country);
            })
        }
        function showError(error){
            switch(error.code) {
                case error.PERMISSION_DENIED:
                    x.innerHTML = "User denied the request for Geolocation."
                    break;
                case error.POSITION_UNAVAILABLE:
                    x.innerHTML = "Location information is unavailable."
                    break;
                case error.TIMEOUT:
                    x.innerHTML = "The request to get user location timed out."
                    break;
                case error.UNKNOWN_ERROR:
                    x.innerHTML = "An unknown error occurred."
                    break;
            }
        }*/

    }else {
        console.log("Denied");
    }
})();
