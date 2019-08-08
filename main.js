 
$(function () {
    $('.selectpicker').selectpicker();
});

$('.brand-logo').css({ marginTop: '-=15px' });

// var regex = new Regex(@"^-?[0-9][0-9,\.]+$");



var userSelection  = [];
var income = 0;
var downPayment = 0; 
var interestRate = 0.0; 
var estClosingCost = 0; 
var mortgageType = 15;

var neighborhoods = [{ "Neighborhood": "Annadale" },
 { "Neighborhood": "Arden Heights" }, { "Neighborhood": "Armonk" }, { "Neighborhood": "Arrochar" }, { "Neighborhood": "Arverne" }, { "Neighborhood": "Astoria" }, { "Neighborhood": "Astoria Heights" }, { "Neighborhood": "Auburndale" }, { "Neighborhood": "Bath Beach" }, { "Neighborhood": "Battery Park" }, { "Neighborhood": "Bay Ridge" }, { "Neighborhood": "Bay Terrace" }, { "Neighborhood": "Baychester" }, { "Neighborhood": "Bayside" }, { "Neighborhood": "Bedford Park" }, { "Neighborhood": "Bedford Stuyvesant" }, { "Neighborhood": "Belle Harbor" }, { "Neighborhood": "Bellerose" }, { "Neighborhood": "Belmont" }, { "Neighborhood": "Bensonhurst" }, { "Neighborhood": "Bergen Beach" }, { "Neighborhood": "Blissville" }, { "Neighborhood": "Bloomfield" }, { "Neighborhood": "Boerum Hill" }, { "Neighborhood": "Bohemia" }, { "Neighborhood": "Borough Park" }, { "Neighborhood": "Breezy Point" }, { "Neighborhood": "Briarwood" }, { "Neighborhood": "Brighton Beach" }, { "Neighborhood": "Broad Channel" }, { "Neighborhood": "Brooklyn Heights" }, { "Neighborhood": "Brookville" }, { "Neighborhood": "Brownsville" }, { "Neighborhood": "Bulls Head" }, { "Neighborhood": "Bushwick" }, { "Neighborhood": "Butler Manor" }, { "Neighborhood": "Cambria Heights" }, { "Neighborhood": "Canarsie" }, { "Neighborhood": "Carmel Hamlet" }, { "Neighborhood": "Carnegie Hill" }, { "Neighborhood": "Carroll Gardens" }, { "Neighborhood": "Castle Hill" }, { "Neighborhood": "Castleton Corners" }, { "Neighborhood": "Central Business District" }, { "Neighborhood": "Central Islip" }, { "Neighborhood": "Central Park" }, { "Neighborhood": "Central State Street" }, { "Neighborhood": "Charleston" }, { "Neighborhood": "Chelsea" }, { "Neighborhood": "Chelsea-Travis" }, { "Neighborhood": "Chinatown" }, { "Neighborhood": "City Island" }, { "Neighborhood": "Clason Point" }, { "Neighborhood": "Clifton" }, { "Neighborhood": "Clinton" }, { "Neighborhood": "Clinton Hill" }, { "Neighborhood": "Clove Lake" }, { "Neighborhood": "Co-op City" }, { "Neighborhood": "Cobble Hill" }, { "Neighborhood": "College Point" }, { "Neighborhood": "Columbia Street Waterfront District" }, { "Neighborhood": "Columbus Circle" }, { "Neighborhood": "Concourse" }, { "Neighborhood": "Coney Island" }, { "Neighborhood": "Corona" }, { "Neighborhood": "Country Club" }, { "Neighborhood": "Crown Heights" }, { "Neighborhood": "DUMBO" }, { "Neighborhood": "Dongan Hills" }, { "Neighborhood": "Douglaston-Little Neck" }, { "Neighborhood": "Downtown" }, { "Neighborhood": "Dyker Heights" }, { "Neighborhood": "East Elmhurst" }, { "Neighborhood": "East Flatbush" }, { "Neighborhood": "East Hampton North" }, { "Neighborhood": "East Harlem" }, { "Neighborhood": "East New York" }, { "Neighborhood": "East Tremont" }, { "Neighborhood": "East Village" }, { "Neighborhood": "Eastchester" }, { "Neighborhood": "Elm Park" }, { "Neighborhood": "Elmhurst" }, { "Neighborhood": "Eltingville" }, { "Neighborhood": "Emerson Hill" }, { "Neighborhood": "Far Rockaway" }, { "Neighborhood": "Fieldston" }, { "Neighborhood": "Financial District" }, { "Neighborhood": "Firthcliffe" }, { "Neighborhood": "Flatbush" }, { "Neighborhood": "Flatiron District" }, { "Neighborhood": "Flatlands" }, { "Neighborhood": "Floral park" }, { "Neighborhood": "Flushing" }, { "Neighborhood": "Fordham" }, { "Neighborhood": "Forest Hills" }, { "Neighborhood": "Forest Hills Gardens" }, { "Neighborhood": "Fort Greene" }, { "Neighborhood": "Fort Hamilton" }, { "Neighborhood": "Fort Wadsworth" }, { "Neighborhood": "Fresh Meadows" }, { "Neighborhood": "Garment District" }, { "Neighborhood": "Georgetown" }, { "Neighborhood": "Gerritsen Beach" }, { "Neighborhood": "Glen Oaks" }, { "Neighborhood": "Glendale" }, { "Neighborhood": "Gowanus" }, { "Neighborhood": "Gramercy" }, { "Neighborhood": "Graniteville" }, { "Neighborhood": "Grant City" }, { "Neighborhood": "Grasmere - Concord" }, { "Neighborhood": "Gravesend" }, { "Neighborhood": "Great Kills" }, { "Neighborhood": "Great Neck Estates" }, { "Neighborhood": "Great Neck Gardens" }, { "Neighborhood": "Great Neck Plaza" }, { "Neighborhood": "Great Neck Village" }, { "Neighborhood": "Greenpoint" }, { "Neighborhood": "Greenridge" }, { "Neighborhood": "Greenwich Village" }, { "Neighborhood": "Greenwood" }, { "Neighborhood": "Grymes Hill" }, { "Neighborhood": "Hamilton Heights" }, { "Neighborhood": "Harbor Hills" }, { "Neighborhood": "Harlem" }, { "Neighborhood": "Heartland Village" }, { "Neighborhood": "High Bridge" }, { "Neighborhood": "Hillcrest" }, { "Neighborhood": "Hollis" }, { "Neighborhood": "Holliswood" }, { "Neighborhood": "Homecrest" }, { "Neighborhood": "Howard Beach" }, { "Neighborhood": "Huguenot" }, { "Neighborhood": "Hunters Point" }, { "Neighborhood": "Hunts Point" }, { "Neighborhood": "Inwood" }, { "Neighborhood": "Jackson Heights" }, { "Neighborhood": "Jacob Riis Park" }, { "Neighborhood": "Jamaica" }, { "Neighborhood": "Jamaica Estates" }, { "Neighborhood": "Jamaica Hills" }, { "Neighborhood": "Kensington" }, { "Neighborhood": "Kew Gardens" }, { "Neighborhood": "Kew Gardens Hills" }, { "Neighborhood": "Kings Point" }, { "Neighborhood": "Kingsbridge" }, { "Neighborhood": "Lake Mohegan" }, { "Neighborhood": "Lake Success" }, { "Neighborhood": "Laurelton" }, { "Neighborhood": "Lighthouse Hill" }, { "Neighborhood": "Little Italy" }, { "Neighborhood": "Lloyd Harbor" }, { "Neighborhood": "Longwood" }, { "Neighborhood": "Lovejoy" }, { "Neighborhood": "Lower East Side" }, { "Neighborhood": "Ludlow" }, { "Neighborhood": "Malba" }, { "Neighborhood": "Manhattan Beach" }, { "Neighborhood": "Manhattanville" }, { "Neighborhood": "Maplewood" }, { "Neighborhood": "Marble Hill" }, { "Neighborhood": "Marine Park" }, { "Neighborhood": "Mariner''s Harbor" }, { "Neighborhood": "Maspeth" }, { "Neighborhood": "Meiers Corners" }, { "Neighborhood": "Melrose" }, { "Neighborhood": "Middle Village" }, { "Neighborhood": "Midland Beach" }, { "Neighborhood": "Midtown" }, { "Neighborhood": "Midwood" }, { "Neighborhood": "Mill Basin" }, { "Neighborhood": "Morningside Heights" }, { "Neighborhood": "Morris Heights" }, { "Neighborhood": "Morris Park" }, { "Neighborhood": "Mott Haven" }, { "Neighborhood": "Munsey Park" }, { "Neighborhood": "Murray Hill" }, { "Neighborhood": "Nassau Shores" }, { "Neighborhood": "Navy Yard" }, { "Neighborhood": "Neponsit" }, { "Neighborhood": "New Brighton" }, { "Neighborhood": "New City" }, { "Neighborhood": "New Dorp" }, { "Neighborhood": "New Dorp Beach" }, { "Neighborhood": "New Springville" }, { "Neighborhood": "New Utrecht" }, { "Neighborhood": "NoHo" }, { "Neighborhood": "North Bay Shore" }, { "Neighborhood": "North Riverdale" }, { "Neighborhood": "Northwest Harbor" }, { "Neighborhood": "Norwood" }, { "Neighborhood": "Oakland Gardens" }, { "Neighborhood": "Oakwood" }, { "Neighborhood": "Ocean Hill" }, { "Neighborhood": "Ocean Parkway" }, { "Neighborhood": "Old Brookville" }, { "Neighborhood": "Old Town" }, { "Neighborhood": "Ozone Park" }, { "Neighborhood": "Park Hill" }, { "Neighborhood": "Park Slope" }, { "Neighborhood": "Parkchester" }, { "Neighborhood": "Pelham Bay" }, { "Neighborhood": "Pelham Gardens" }, { "Neighborhood": "Pleasant Plains" }, { "Neighborhood": "Pomonok" }, { "Neighborhood": "Port Ivory" }, { "Neighborhood": "Port Morris" }, { "Neighborhood": "Port Richmond" }, { "Neighborhood": "Prince''s Bay" }, { "Neighborhood": "Prospect Heights" }, { "Neighborhood": "Prospect Lefferts Gardens" }, { "Neighborhood": "Prospect Park South" }, { "Neighborhood": "Queens Village" }, { "Neighborhood": "Randall Manor" }, { "Neighborhood": "Red Hook" }, { "Neighborhood": "Rego Park" }, { "Neighborhood": "Richmond Hill" }, { "Neighborhood": "Richmond Town" }, { "Neighborhood": "Richmond Valley" }, { "Neighborhood": "Ridgewood" }, { "Neighborhood": "Riverdale" }, { "Neighborhood": "Rochdale" }, { "Neighborhood": "Rockaway Beach" }, { "Neighborhood": "Rockaway Park" }, { "Neighborhood": "Roosevelt Island" }, { "Neighborhood": "Rosebank" }, { "Neighborhood": "Rosedale" }, { "Neighborhood": "Rossville" }, { "Neighborhood": "Roxbury" }, { "Neighborhood": "Russell Gardens" }, { "Neighborhood": "Saddle Rock" }, { "Neighborhood": "Saddle Rock Estates" }, { "Neighborhood": "Sheepshead Bay" }, { "Neighborhood": "Silver Lake" }, { "Neighborhood": "SoHo" }, { "Neighborhood": "Soundview" }, { "Neighborhood": "South Beach" }, { "Neighborhood": "South Bronx" }, { "Neighborhood": "South Ozone Park" }, { "Neighborhood": "South Salem" }, { "Neighborhood": "Springfield Gardens" }, { "Neighborhood": "Springs" }, { "Neighborhood": "Spuyten Duyvil" }, { "Neighborhood": "St. Albans" }, { "Neighborhood": "St. George" }, { "Neighborhood": "Stapleton" }, { "Neighborhood": "Stuyvesant Town" }, { "Neighborhood": "Sunnyside" }, { "Neighborhood": "Sunset Park" }, { "Neighborhood": "Sutton Place" }, { "Neighborhood": "Thomaston" }, { "Neighborhood": "Throggs Neck" }, { "Neighborhood": "Todt Hill" }, { "Neighborhood": "Tompkinsville" }, { "Neighborhood": "Tottenville" }, { "Neighborhood": "Tremont" }, { "Neighborhood": "Tribeca" }, { "Neighborhood": "Tudor City" }, { "Neighborhood": "Turtle Bay" }, { "Neighborhood": "Unionport" }, { "Neighborhood": "University Gardens" }, { "Neighborhood": "University Heights" }, { "Neighborhood": "Upper East Side" }, { "Neighborhood": "Upper West Side" }, { "Neighborhood": "Utopia" }, { "Neighborhood": "Van Nest" }, { "Neighborhood": "Vinegar Hill" }, { "Neighborhood": "Wakefield" }, { "Neighborhood": "Washington Heights" }, { "Neighborhood": "West Brighton" }, { "Neighborhood": "West Farms" }, { "Neighborhood": "West Hills" }, { "Neighborhood": "West Village" }, { "Neighborhood": "Westchester Heights" }, { "Neighborhood": "Westerleigh" }, { "Neighborhood": "Westmere" }, { "Neighborhood": "Whitestone" }, { "Neighborhood": "Williamsbridge" }, { "Neighborhood": "Williamsburg" }, { "Neighborhood": "Willowbrook" }, { "Neighborhood": "Windsor Terrace" }, { "Neighborhood": "Wingate" }, { "Neighborhood": "Woodhaven" }, { "Neighborhood": "Woodlawn" }, { "Neighborhood": "Woodrow" }, { "Neighborhood": "Woodside" }];

 var nhlength = neighborhoods.length;

 var dropdown = $("#nhdd"); 

 for (var i = 0; i < nhlength; i++) {

   //  console.log(neighborhoods[i].Neighborhood);

     dropdown.append(

         "<option value=" + neighborhoods[i].Neighborhood + ">" + neighborhoods[i].Neighborhood + "</option>"

     );

     }   


$("#done").click(function (e) { 
    e.preventDefault();

    userSelection.forEach(element => {
        var button = $("<button>");
        button.addClass("btn btn-primary");
        button.append({ })
    });

    
    });

$('.selectpicker').change(function () {
    var selectedItem = $('.selectpicker').val();
    console.log( "neighborhoods are val is " + selectedItem);
    userSelection = selectedItem;


});

$('#mortgage').change(function () {
    mortgageType = $('#mortgage').val();
    console.log("mort val is " + mortgageType);
   // mortgageType = selectedItem;
});

$('#submit-btn').click(function () {
        income = $("#income").val(); 

        downPayment = $("#downpayment").val(); 
        interestRate = $("#interestrate").val(); 
        estClosingCost = $("#ecc").val(); 

        
        
        console.log (userSelection);
        console.log(income);
        console.log(downPayment);
        console.log(interestRate);
        console.log(estClosingCost);
        console.log(mortgageType);



        





    })







