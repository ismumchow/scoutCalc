
$('.brand-logo').css({ marginTop: '-=15px' });
$('#results').hide();

$('#results-table').hide();

let package = new Object ();
let userChoice = [{
    neighborhood : "", 
    type_ : "", 
    bed : "", 
}];
var newnh = [];
var refarr = [];
var income = 100000;
var downPayment = .2; 
var interestRate = 0.03; 
var estClosingCost = 0.035; 
var mortgageType = 15;
var queryURL = ""; 
var resultsDiv = $("#results-table");
var tbody = $("#table-body");

var briteration = 0;
var homeiteration = 0;
var nhiteration = 0;

var br = "br0";
var type = "type0";
var newnhdd = "newnhdd0"; 

var brval;
var typeval;
var nndhdval; 


var numberOfRows = 0;


var userSelection;

var tr = ("<tr>"); 
var td = ("<td>"); 

var neighborhoods = [{ "Neighborhood": "Annadale" },
 { "Neighborhood": "Arden Heights" }, { "Neighborhood": "Armonk" }, { "Neighborhood": "Arrochar" }, { "Neighborhood": "Arverne" }, { "Neighborhood": "Astoria" }, { "Neighborhood": "Astoria Heights" }, { "Neighborhood": "Auburndale" }, { "Neighborhood": "Bath Beach" }, { "Neighborhood": "Battery Park" }, { "Neighborhood": "Bay Ridge" }, { "Neighborhood": "Bay Terrace" }, { "Neighborhood": "Baychester" }, { "Neighborhood": "Bayside" }, { "Neighborhood": "Bedford Park" }, { "Neighborhood": "Bedford Stuyvesant" }, { "Neighborhood": "Belle Harbor" }, { "Neighborhood": "Bellerose" }, { "Neighborhood": "Belmont" }, { "Neighborhood": "Bensonhurst" }, { "Neighborhood": "Bergen Beach" }, { "Neighborhood": "Blissville" }, { "Neighborhood": "Bloomfield" }, { "Neighborhood": "Boerum Hill" }, { "Neighborhood": "Bohemia" }, { "Neighborhood": "Borough Park" }, { "Neighborhood": "Breezy Point" }, { "Neighborhood": "Briarwood" }, { "Neighborhood": "Brighton Beach" }, { "Neighborhood": "Broad Channel" }, { "Neighborhood": "Brooklyn Heights" }, { "Neighborhood": "Brookville" }, { "Neighborhood": "Brownsville" }, { "Neighborhood": "Bulls Head" }, { "Neighborhood": "Bushwick" }, { "Neighborhood": "Butler Manor" }, { "Neighborhood": "Cambria Heights" }, { "Neighborhood": "Canarsie" }, { "Neighborhood": "Carmel Hamlet" }, { "Neighborhood": "Carnegie Hill" }, { "Neighborhood": "Carroll Gardens" }, { "Neighborhood": "Castle Hill" }, { "Neighborhood": "Castleton Corners" }, { "Neighborhood": "Central Business District" }, { "Neighborhood": "Central Islip" }, { "Neighborhood": "Central Park" }, { "Neighborhood": "Central State Street" }, { "Neighborhood": "Charleston" }, { "Neighborhood": "Chelsea" }, { "Neighborhood": "Chelsea-Travis" }, { "Neighborhood": "Chinatown" }, { "Neighborhood": "City Island" }, { "Neighborhood": "Clason Point" }, { "Neighborhood": "Clifton" }, { "Neighborhood": "Clinton" }, { "Neighborhood": "Clinton Hill" }, { "Neighborhood": "Clove Lake" }, { "Neighborhood": "Co-op City" }, { "Neighborhood": "Cobble Hill" }, { "Neighborhood": "College Point" }, { "Neighborhood": "Columbia Street Waterfront District" }, { "Neighborhood": "Columbus Circle" }, { "Neighborhood": "Concourse" }, { "Neighborhood": "Coney Island" }, { "Neighborhood": "Corona" }, { "Neighborhood": "Country Club" }, { "Neighborhood": "Crown Heights" }, { "Neighborhood": "DUMBO" }, { "Neighborhood": "Dongan Hills" }, { "Neighborhood": "Douglaston-Little Neck" }, { "Neighborhood": "Downtown" }, { "Neighborhood": "Dyker Heights" }, { "Neighborhood": "East Elmhurst" }, { "Neighborhood": "East Flatbush" }, { "Neighborhood": "East Hampton North" }, { "Neighborhood": "East Harlem" }, { "Neighborhood": "East New York" }, { "Neighborhood": "East Tremont" }, { "Neighborhood": "East Village" }, { "Neighborhood": "Eastchester" }, { "Neighborhood": "Elm Park" }, { "Neighborhood": "Elmhurst" }, { "Neighborhood": "Eltingville" }, { "Neighborhood": "Emerson Hill" }, { "Neighborhood": "Far Rockaway" }, { "Neighborhood": "Fieldston" }, { "Neighborhood": "Financial District" }, { "Neighborhood": "Firthcliffe" }, { "Neighborhood": "Flatbush" }, { "Neighborhood": "Flatiron District" }, { "Neighborhood": "Flatlands" }, { "Neighborhood": "Floral park" }, { "Neighborhood": "Flushing" }, { "Neighborhood": "Fordham" }, { "Neighborhood": "Forest Hills" }, { "Neighborhood": "Forest Hills Gardens" }, { "Neighborhood": "Fort Greene" }, { "Neighborhood": "Fort Hamilton" }, { "Neighborhood": "Fort Wadsworth" }, { "Neighborhood": "Fresh Meadows" }, { "Neighborhood": "Garment District" }, { "Neighborhood": "Georgetown" }, { "Neighborhood": "Gerritsen Beach" }, { "Neighborhood": "Glen Oaks" }, { "Neighborhood": "Glendale" }, { "Neighborhood": "Gowanus" }, { "Neighborhood": "Gramercy" }, { "Neighborhood": "Graniteville" }, { "Neighborhood": "Grant City" }, { "Neighborhood": "Grasmere - Concord" }, { "Neighborhood": "Gravesend" }, { "Neighborhood": "Great Kills" }, { "Neighborhood": "Great Neck Estates" }, { "Neighborhood": "Great Neck Gardens" }, { "Neighborhood": "Great Neck Plaza" }, { "Neighborhood": "Great Neck Village" }, { "Neighborhood": "Greenpoint" }, { "Neighborhood": "Greenridge" }, { "Neighborhood": "Greenwich Village" }, { "Neighborhood": "Greenwood" }, { "Neighborhood": "Grymes Hill" }, { "Neighborhood": "Hamilton Heights" }, { "Neighborhood": "Harbor Hills" }, { "Neighborhood": "Harlem" }, { "Neighborhood": "Heartland Village" }, { "Neighborhood": "High Bridge" }, { "Neighborhood": "Hillcrest" }, { "Neighborhood": "Hollis" }, { "Neighborhood": "Holliswood" }, { "Neighborhood": "Homecrest" }, { "Neighborhood": "Howard Beach" }, { "Neighborhood": "Huguenot" }, { "Neighborhood": "Hunters Point" }, { "Neighborhood": "Hunts Point" }, { "Neighborhood": "Inwood" }, { "Neighborhood": "Jackson Heights" }, { "Neighborhood": "Jacob Riis Park" }, { "Neighborhood": "Jamaica" }, { "Neighborhood": "Jamaica Estates" }, { "Neighborhood": "Jamaica Hills" }, { "Neighborhood": "Kensington" }, { "Neighborhood": "Kew Gardens" }, { "Neighborhood": "Kew Gardens Hills" }, { "Neighborhood": "Kings Point" }, { "Neighborhood": "Kingsbridge" }, { "Neighborhood": "Lake Mohegan" }, { "Neighborhood": "Lake Success" }, { "Neighborhood": "Laurelton" }, { "Neighborhood": "Lighthouse Hill" }, { "Neighborhood": "Little Italy" }, { "Neighborhood": "Lloyd Harbor" }, { "Neighborhood": "Longwood" }, { "Neighborhood": "Lovejoy" }, { "Neighborhood": "Lower East Side" }, { "Neighborhood": "Ludlow" }, { "Neighborhood": "Malba" }, { "Neighborhood": "Manhattan Beach" }, { "Neighborhood": "Manhattanville" }, { "Neighborhood": "Maplewood" }, { "Neighborhood": "Marble Hill" }, { "Neighborhood": "Marine Park" }, { "Neighborhood": "Mariner''s Harbor" }, { "Neighborhood": "Maspeth" }, { "Neighborhood": "Meiers Corners" }, { "Neighborhood": "Melrose" }, { "Neighborhood": "Middle Village" }, { "Neighborhood": "Midland Beach" }, { "Neighborhood": "Midtown" }, { "Neighborhood": "Midwood" }, { "Neighborhood": "Mill Basin" }, { "Neighborhood": "Morningside Heights" }, { "Neighborhood": "Morris Heights" }, { "Neighborhood": "Morris Park" }, { "Neighborhood": "Mott Haven" }, { "Neighborhood": "Munsey Park" }, { "Neighborhood": "Murray Hill" }, { "Neighborhood": "Nassau Shores" }, { "Neighborhood": "Navy Yard" }, { "Neighborhood": "Neponsit" }, { "Neighborhood": "New Brighton" }, { "Neighborhood": "New City" }, { "Neighborhood": "New Dorp" }, { "Neighborhood": "New Dorp Beach" }, { "Neighborhood": "New Springville" }, { "Neighborhood": "New Utrecht" }, { "Neighborhood": "NoHo" }, { "Neighborhood": "North Bay Shore" }, { "Neighborhood": "North Riverdale" }, { "Neighborhood": "Northwest Harbor" }, { "Neighborhood": "Norwood" }, { "Neighborhood": "Oakland Gardens" }, { "Neighborhood": "Oakwood" }, { "Neighborhood": "Ocean Hill" }, { "Neighborhood": "Ocean Parkway" }, { "Neighborhood": "Old Brookville" }, { "Neighborhood": "Old Town" }, { "Neighborhood": "Ozone Park" }, { "Neighborhood": "Park Hill" }, { "Neighborhood": "Park Slope" }, { "Neighborhood": "Parkchester" }, { "Neighborhood": "Pelham Bay" }, { "Neighborhood": "Pelham Gardens" }, { "Neighborhood": "Pleasant Plains" }, { "Neighborhood": "Pomonok" }, { "Neighborhood": "Port Ivory" }, { "Neighborhood": "Port Morris" }, { "Neighborhood": "Port Richmond" }, { "Neighborhood": "Prince''s Bay" }, { "Neighborhood": "Prospect Heights" }, { "Neighborhood": "Prospect Lefferts Gardens" }, { "Neighborhood": "Prospect Park South" }, { "Neighborhood": "Queens Village" }, { "Neighborhood": "Randall Manor" }, { "Neighborhood": "Red Hook" }, { "Neighborhood": "Rego Park" }, { "Neighborhood": "Richmond Hill" }, { "Neighborhood": "Richmond Town" }, { "Neighborhood": "Richmond Valley" }, { "Neighborhood": "Ridgewood" }, { "Neighborhood": "Riverdale" }, { "Neighborhood": "Rochdale" }, { "Neighborhood": "Rockaway Beach" }, { "Neighborhood": "Rockaway Park" }, { "Neighborhood": "Roosevelt Island" }, { "Neighborhood": "Rosebank" }, { "Neighborhood": "Rosedale" }, { "Neighborhood": "Rossville" }, { "Neighborhood": "Roxbury" }, { "Neighborhood": "Russell Gardens" }, { "Neighborhood": "Saddle Rock" }, { "Neighborhood": "Saddle Rock Estates" }, { "Neighborhood": "Sheepshead Bay" }, { "Neighborhood": "Silver Lake" }, { "Neighborhood": "SoHo" }, { "Neighborhood": "Soundview" }, { "Neighborhood": "South Beach" }, { "Neighborhood": "South Bronx" }, { "Neighborhood": "South Ozone Park" }, { "Neighborhood": "South Salem" }, { "Neighborhood": "Springfield Gardens" }, { "Neighborhood": "Springs" }, { "Neighborhood": "Spuyten Duyvil" }, { "Neighborhood": "St. Albans" }, { "Neighborhood": "St. George" }, { "Neighborhood": "Stapleton" }, { "Neighborhood": "Stuyvesant Town" }, { "Neighborhood": "Sunnyside" }, { "Neighborhood": "Sunset Park" }, { "Neighborhood": "Sutton Place" }, { "Neighborhood": "Thomaston" }, { "Neighborhood": "Throggs Neck" }, { "Neighborhood": "Todt Hill" }, { "Neighborhood": "Tompkinsville" }, { "Neighborhood": "Tottenville" }, { "Neighborhood": "Tremont" }, { "Neighborhood": "Tribeca" }, { "Neighborhood": "Tudor City" }, { "Neighborhood": "Turtle Bay" }, { "Neighborhood": "Unionport" }, { "Neighborhood": "University Gardens" }, { "Neighborhood": "University Heights" }, { "Neighborhood": "Upper East Side" }, { "Neighborhood": "Upper West Side" }, { "Neighborhood": "Utopia" }, { "Neighborhood": "Van Nest" }, { "Neighborhood": "Vinegar Hill" }, { "Neighborhood": "Wakefield" }, { "Neighborhood": "Washington Heights" }, { "Neighborhood": "West Brighton" }, { "Neighborhood": "West Farms" }, { "Neighborhood": "West Hills" }, { "Neighborhood": "West Village" }, { "Neighborhood": "Westchester Heights" }, { "Neighborhood": "Westerleigh" }, { "Neighborhood": "Westmere" }, { "Neighborhood": "Whitestone" }, { "Neighborhood": "Williamsbridge" }, { "Neighborhood": "Williamsburg" }, { "Neighborhood": "Willowbrook" }, { "Neighborhood": "Windsor Terrace" }, { "Neighborhood": "Wingate" }, { "Neighborhood": "Woodhaven" }, { "Neighborhood": "Woodlawn" }, { "Neighborhood": "Woodrow" }, { "Neighborhood": "Woodside" }];

 var nhlength = neighborhoods.length;

 var dropdown = $("#nhdd"); 

    for (var i = 0; i < nhlength; i++) {
        // console.log(neighborhoods[i].Neighborhood);
        dropdown.append(
        "<option value='" + neighborhoods[i].Neighborhood + "'>" + neighborhoods[i].Neighborhood + "</option>" );
         }
         
    $('.selectpicker').change(function () {
        var selectedItem = $('#nhdd').val();
        console.log( selectedItem);
        userSelection = selectedItem;
    });


    $('#mortgage').change(function () {
        mortgageType = $('#mortgage').val();
    });

    $('#submit-btn').click(function (e) {

        
        $("#form").slideToggle("slow");
        $("#results").removeClass("s8").addClass("s12");
        // $("#results").css("margin-left", "2%");
        $("#filter").css("padding", "2%");
        $("#filter").css("margin-top", "-1%");
        $("#result-card").css("height", "87vh");

        e.preventDefault();
        
        income = $("#income").val(); 

        downPayment = $("#downpayment").val() * .01; 
        interestRate = $("#interestrate").val() * .01 ; 
        estClosingCost = $("#ecc").val() * .01; 


        console.log("user selection is" + userSelection);
  
        var arrayString = userSelection.join("&"); 

        
        console.log(arrayString)

        var inc = Number(income); 
        var dp = Number(downPayment); 
        var ir = Number(interestRate); 
        var est = Number(estClosingCost);
        var mort = Number(mortgageType); 

        var queryURL = "https://s2-dot-scout-243315.appspot.com/prototype/" + arrayString + "/" + "coop&condo&townhouse&multi family/1&2&3&4&5" + "/" + inc + "/" + dp + "/" + ir + "/" + est + "/" + mort; 

        console.log(queryURL);       
        

            $.ajax({
                url: queryURL,
                type: 'GET',
                dataType: 'json', // added data type
                success: function (res) {
                    $('#results').show();
                    $('#results-table').show();
                    $('#result-card').css ("height", "auto");

                    package = res; 

                    // New code ----------------------

                    for(let i = 0; i< package.length; i++){
                        refarr.push(package[i].neighborhood);
                    }
                    refarr = arrayUnique(refarr);
                    let temp = '';
                    for(let i=0;i<refarr.length;i++){
                        temp += '<option value="'+ refarr[i] +'">'+ refarr[i] +'</option>';
                    }
                    $('#newnhdd0').append(temp);
                    $('select').selectpicker('refresh');
                    

                    for (var i  = 0; i < package.length; i ++) {
                        
                        var tabRow =  $('<tr>'); 
                        tabRow
                        .append($('<td class="align" val ="neighborhood">').append(package[i].neighborhood))
                        .append($('<td class="align" val ="type_">').append(package[i].type_))
                        .append($('<td class="align" val ="bed">').append(package[i].bed)) 
                        .append($('<td class="align" val ="price">').append(package[i].price))
                        .append($('<td class="align" val ="down">').append(package[i].down))
                        .append($('<td class="align" val ="closing_costs">').append(package[i].closing_costs))
                        .append($('<td class="align" val ="dollar_to_cost">').append(package[i].dollar_to_cost))
                        .append($('<td class="align" val ="mortgage">').append(package[i].mortgage)) 
                        .append($('<td class="align" val ="maintenance">').append(package[i].maintenance))
                        .append($('<td class="align" val ="tax">').append(package[i].tax))
                        .append($('<td class="align" val ="insurance">').append(package[i].insurance))
                        .append($('<td class="align" val ="mortgage_pmt">').append(package[i].mortgage_pmt)) 
                        .append($('<td class="align" val ="monthly_cost">').append(package[i].monthly_cost))
                        .append($('<td class="align" val ="tax_saving">').append(package[i].tax_saving))
                        .append($('<td class="align" val ="yearly_cost">').append(package[i].yearly_cost))
                        .append($('<td class="align" val ="expense_ratio">').append(package[i].expense_ratio));

                        tbody.append(tabRow);
                    
                        }

                        $('#nsubmit-btn').click(function (e) {


                            $(tbody).empty();

                            console.log("new button worked")

                                        let bedRoomId = "br0";
                                        let neighborId = "newnhdd0"; 
                                        let typeId = "type0";

                            

                                    
                                        itlength = numberOfRows +1; 

                                    for (var i = 0; i < itlength; i++) {

                                        if (!(bedRoomId.slice(-1) === "r")) {
                                            bedRoomId = bedRoomId.slice(0, -1);
                                        }
                                        if (!(neighborId.slice(-1) === "d")) {
                                            neighborId = neighborId.slice(0, -1);
                                        }
                                        if (!(type.slice(-1) === "e")) {
                                            typeId = typeId.slice(0, -1);

                                        }
                                     
                                        bedRoomId += i;
                                        neighborId += i;
                                        typeId += i;

                                        console.log(bedRoomId);
                                        console.log(neighborId);
                                        console.log(typeId);

                                       let brRef = "#" + bedRoomId; 
                                       let ngbhdRef = "#" + neighborId; 
                                       let typeRef  = "#" + typeId;

                          
                                        let userBrVal = $(brRef).val(); 
                                        let userTypeVal = $(typeRef).val(); 
                                        let userNhVal = $(ngbhdRef).val();  

                                        console.log (userBrVal); 
                                        console.log(userTypeVal); 
                                        console.log(userNhVal); 

                                        for (var j = 0; j <package.length; j++) {

                                            if (userBrVal == package[j].bed && userTypeVal == package[j].type_ && userNhVal == package[j].neighborhood) {

                                                console.log("value is in the package");

                                                var tabRow = $('<tr>');
                                                tabRow
                                                    .append($('<td class="align" val ="neighborhood">').append(package[j].neighborhood))
                                                    .append($('<td class="align" val ="type_">').append(package[j].type_))
                                                    .append($('<td class="align" val ="bed">').append(package[j].bed))
                                                    .append($('<td class="align" val ="price">').append(package[j].price))
                                                    .append($('<td class="align" val ="down">').append(package[j].down))
                                                    .append($('<td class="align" val ="closing_costs">').append(package[j].closing_costs))
                                                    .append($('<td class="align" val ="dollar_to_cost">').append(package[j].dollar_to_cost))
                                                    .append($('<td class="align" val ="mortgage">').append(package[j].mortgage))
                                                    .append($('<td class="align" val ="maintenance">').append(package[j].maintenance))
                                                    .append($('<td class="align" val ="tax">').append(package[j].tax))
                                                    .append($('<td class="align" val ="insurance">').append(package[i].insurance))
                                                    .append($('<td class="align" val ="mortgage_pmt">').append(package[j].mortgage_pmt))
                                                    .append($('<td class="align" val ="monthly_cost">').append(package[j].monthly_cost))
                                                    .append($('<td class="align" val ="tax_saving">').append(package[j].tax_saving))
                                                    .append($('<td class="align" val ="yearly_cost">').append(package[j].yearly_cost))
                                                    .append($('<td class="align" val ="expense_ratio">').append(package[j].expense_ratio));

                                                tbody.append(tabRow);

                                             }
                                        }
                                        

                                       

                                    }
                           
                        })

                        return package;
                    
                    }

            })

    });


$('#addbtn').click(function (e) { 

    numberOfRows++; 

    if (!(br.slice(-1) === "r")) {
        br = br.slice(0, -1);
    }
    if (!(newnhdd.slice(-1) === "d")) {
        newnhdd = newnhdd.slice(0, -1);
    }

     if (!(type.slice(-1)==="e")) {
         type = type.slice(0, -1);
     }

    br += ++briteration;
    type += ++homeiteration;
    newnhdd += ++nhiteration;

     console.log(br); 
     console.log(type); 
     console.log(newnhdd); 


     console.log("button clicked");

     let br_clone = $('#br0').clone();
     br_clone.attr("id", br)
     let home_clone = $('#type0').clone();
     home_clone.attr("id", type)
     let nh_clone = $('#newnhdd0').clone();
     nh_clone.attr("id",newnhdd);
     

     $("#brcolumn").append(br_clone);
     $("#homecolumn").append(home_clone);
     $("#nhcolumn").append(nh_clone);
     $('select').selectpicker('refresh');

})

$('#minusbtn').click(function(e){

    numberOfRows--; 

    if($('#brcolumn div.btn-group').length > 1){
        $('#brcolumn div.btn-group:last-child').remove();
    }
    if($('#homecolumn div.btn-group').length > 1){
        $('#homecolumn div.btn-group:last-child').remove();
    }
    if($('#nhcolumn div.btn-group').length > 1){
        $('#nhcolumn div.btn-group:last-child').remove();
    }
    })

    var arrayUnique = function (arr) {
        return arr.filter(function(item, index){
            return arr.indexOf(item) >= index;
        });
    };

function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode != 46) {
        return false;
    }
    return true;
}



