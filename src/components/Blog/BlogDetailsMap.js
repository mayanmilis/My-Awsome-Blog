import React, { Component } from 'react'
import classes from './Blog.css'

class Map extends Component{
    componentDidMount(){
        this.loadMap()
    }
    
    loadMap = () =>{
        loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyDBTvWO8iUhCE98FL6M29FNfLeN6KtDHiE&callback=initMap")
        window.initMap = this.initMap
    }
    
    initMap = () => {
            // The location of Uluru
            var uluru = {
                lat: -25.344, 
                lng: 131.036
            };
            // The map, centered at Uluru
            var map = new window.google.maps.Map(
                document.getElementById('map'), 
                {
                    zoom: 4,
                     center: uluru
                    });
            // The marker, positioned at Uluru
            var marker = new window.google.maps.Marker({
                position: uluru,
                map: map
            });
          }

          
    render(){

        return(
            
             <main >
                 <div id="map" className={classes.map}></div>
              </main>
            
        )
    }
}

{/* <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap">
    </script> */}

    function loadScript(url) {
        //select the first script tag
        let index = window.document.getElementsByTagName("script")[0]
        //create the script tag --> <script></script>
        let script = window.document.createElement("script") 
        script.src = url
        //insert the script to index [0]
        index.parentNode.insertBefore(script, index)
    }

export default Map