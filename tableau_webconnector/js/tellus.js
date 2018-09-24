// import { getAuthHeaders } from "./auth.js";

(function() {
  // Create the connector object
  var myConnector = tableau.makeConnector();

  // Define the schema
  myConnector.getSchema = function(schemaCallback) {
    // Tellus locations
    var tellus_cols = [{
      id: "id",
      dataType: tableau.dataTypeEnum.float
    },{
      id: "objnr_vor",
      alias: "Objectnummer V&OR",
      dataType: tableau.dataTypeEnum.string
    },{
      id: "objnr_leverancier",
      alias: "Objectnummer leverancier",
      dataType: tableau.dataTypeEnum.string
    },{
      id: "snelheids_klasse",
      alias: "Snelheidsklasse",
      dataType: tableau.dataTypeEnum.float
    },{
      id: "standplaats_id",
      alias: "id Standplaats",
      dataType: tableau.dataTypeEnum.float
    }, {
      id: "zijstraat_a",
      alias: "Zijstraat A",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "zijstraat_b",
      alias: "Zijstraat B",
      dataType: tableau.dataTypeEnum.float
    }, {
      id: "richting_1",
      alias: "Richting 1",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "richting_2",
      alias: "Richting 2",
      dataType: tableau.dataTypeEnum.string
    }, {
      id: "latitude",
      alias: "latitude",
      dataType: tableau.dataTypeEnum.float
    }, {
      id: "longitude",
      alias: "longitude",
      dataType: tableau.dataTypeEnum.float
    }];

    var tellusTable = {
      id: "tellus",
      alias: "Tellus Locaties",
      columns: tellus_cols,
      endPoint: "https://acc.api.data.amsterdam.nl/tellus/tellus/"
    };

    // Tellus Richtingen
    var tellusrichting_cols = [{
      id: "richting",
      alias: "Richting id",
      dataType: tableau.dataTypeEnum.string
    },{
      id: "naam_richting",
      alias: "Richting",
      dataType: tableau.dataTypeEnum.string
    }];

    var tellusRichtingTable = {
      id: "tellusrichting",
      alias: "Tellus Richtingen",
      columns: tellusrichting_cols,
      endPoint: "https://acc.api.data.amsterdam.nl/tellus/tellusrichting/"
      // endPoint: "http://localhost:8889/acc.api.data.amsterdam.nl/tellus/tellusrichting/"
    };

    // Tellus Totaal Uur per Dag
    var tellus_totaal_uur_dag_cols = [{
      id: "id",
      alias: "id",
      dataType: tableau.dataTypeEnum.float
    },{
      id: "tellus",
      alias: "Tellus",
      dataType: tableau.dataTypeEnum.string
    },{
      id: "richting",
      alias: "Richting",
      dataType: tableau.dataTypeEnum.string
    },{
      id: "dag_uur_gemeten",
      alias: "Dag uur gemeten",
      dataType: tableau.dataTypeEnum.string
    },{
      id: "dag_type",
      alias: "Dag type",
      dataType: tableau.dataTypeEnum.string
    },{
      id: "aantal",
      alias: "Aantal",
      dataType: tableau.dataTypeEnum.float
    }];

    var tellustotaaluurdagTable = {
      id: "tellusdata_totaal_uur_dag",
      alias: "Tellus Totaal per Uur per Dag",
      columns: tellus_totaal_uur_dag_cols,
      endPoint: "https://acc.api.data.amsterdam.nl/tellus/tellusdata_totaal_uur_dag/"
    };

    schemaCallback([
      tellustotaaluurdagTable,
      tellusTable,
      tellusRichtingTable
    ]);
  };

  // myConnector.init = function(initCallback) {
  //   tableau.authType = tableau.authTypeEnum.custom;

  //   // If we are in the auth phase we only want to show the UI needed for auth
  //   if (tableau.phase == tableau.phaseEnum.authPhase) {
  //     $("#getvenuesbutton").css("display", "none");
  //   }

  //   if (tableau.phase == tableau.phaseEnum.gatherDataPhase) {
  //     // If API that WDC is using has an enpoint that checks
  //     // the validity of an access token, that could be used here.
  //     // Then the WDC can call tableau.abortForAuth if that access token
  //     // is invalid.
  //   }

  //   var accessToken = getAuthHeaders().Authorization;
  //   var hasAuth = (accessToken && accessToken.length > 0) || tableau.password.length > 0;
  //   updateUIWithAuthState(hasAuth);

  //   initCallback();

  //   // If we are not in the data gathering phase, we want to store the token
  //   // This allows us to access the token in the data gathering phase
  //   if (tableau.phase == tableau.phaseEnum.interactivePhase || tableau.phase == tableau.phaseEnum.authPhase) {
  //     if (hasAuth) {
  //       tableau.password = accessToken;

  //       if (tableau.phase == tableau.phaseEnum.authPhase) {
  //         // Auto-submit here if we are in the auth phase
  //         tableau.submit();
  //       }

  //       return;
  //       }
  //     }
  //   };

  // Download the data
  myConnector.getData = function(table, doneCallback) {
    var params = {
      "format": "json",
      "detailed": 1,
      "page_size": 500,
      "page": 1
    };
    console.log(table);

    var page = 1;
    // var apiCall = window.auth.API_ROOT + table.endPoint;
    // var apiCall = table.tableInfo.endPoint;
    var apiCall = "https://acc.api.data.amsterdam.nl/tellus/"
    console.log(apiCall);
    var feat = [];
    var promises = [];
    var totalcount = 0;

    function getPage(page) {

      params.page = page;

      // set auth headers
     // $.ajaxSetup({
      //  headers : { "Authorization": tableau.password }
      //});

      promises.push($.getJSON(apiCall+table.tableInfo.id, params, function(resp) {
        
        totalcount = resp.count;
        feat = resp.results;
        console.log(apiCall)
        var tableData = [];
        var i = 0;
        var row = [];
        var len = 0;

        if( feat === undefined || feat.length === 0 ){
          return;
        } else {
          if (table.tableInfo.id == "tellus") {
            for (i = 0, len = feat.length; i < len; i++) {
              row = {
                "id": feat[i].id,
                "objnr_vor": feat[i].objnr_vor,
                "objnr_leverancier": feat[i].objnr_leverancier,
                "snelheids_klasse": feat[i].snelheids_klasse,
                "standplaats_id": feat[i].standplaats_id,
                "standplaats": feat[i].standplaats,
                "zijstraat_a": feat[i].zijstraat_a,
                "zijstraat_b": feat[i].zijstraat_b,
                "richting_1": feat[i].richting_1,
                "richting_2": feat[i].richting_2,
                "latitude": feat[i].latitude,
                "longitude": feat[i].longitude
              };
              tableData.push(row);
            }
          }
          if (table.tableInfo.id == "tellusrichting") {
            for (i = 0, len = feat.length; i < len; i++) {
              row = {
                "richting": feat[i].richting,
                "naam_richting": feat[i].naam_richting
              };
              tableData.push(row);
            }
          }
          if (table.tableInfo.id == "tellusdata_totaal_uur_dag") {
            for (i = 0, len = feat.length; i < len; i++) {
              row = {
                "id": feat[i].id,
                "tellus": feat[i].richting.tellus,
                "richting": feat[i].richting.richting,
                "dag_uur_gemeten": feat[i].dag_uur_gemeten,
                "dag_type": feat[i].dag_type,
                "aantal": feat[i].aantal
              };
              tableData.push(row);
            }
          }
          table.appendRows(tableData);
        }
      }));
    }
    
    function loadAPI(totalpages){
      var page = 2;
      while (page <= totalpages){
        // get the next page.
        getPage(page);
        page += 1;
      }
    }

    function slurpAPI(){
      // load the fist page
      getPage(1);
      $.when.apply($, promises).then(function(){
        loadAPI(Math.ceil(totalcount / params.page_size));
        // loadAPI(10); // Tester
      });
    }

    slurpAPI();

    // wait until all pages are loaded.
    $.when.apply($, promises).then(function(){
      // we are done loading out api
      doneCallback();
    });
  };
  
  // // This function togglels the label shown depending
  // // on whether or not the user has been authenticated
  // function updateUIWithAuthState(hasAuth) {
  //   if (hasAuth) {
  //     $(".notsignedin").css("display", "none");
  //     $(".signedin").css("display", "block");
  //   } else {
  //     $(".notsignedin").css("display", "block");
  //     $(".signedin").css("display", "none");
  //   }
  // }

  // Create event listeners for when the user submits the form
  $(document).ready(function() {
    $("#submitButton").click(function() {
      tableau.connectionName = "Tellus"; // This will be the data source name in Tableau
      tableau.submit(); // This sends the connector object to Tableau
    });

    // window.auth.initAuth();

    // var hasauth = window.auth.isAuthenticated();
    // updateUIWithAuthState(hasauth);

    // $("#loginButton").click(function() {
    //   window.auth.login();
    // });
  });

  tableau.registerConnector(myConnector);

})();
