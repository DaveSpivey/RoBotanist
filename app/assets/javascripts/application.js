// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

// $(function(){

//   $('body').on('click', function(e){
//     $('#popover').popover("hide");
//   });

//   var glossary = new Bloodhound({
//     datumTokenizer: Bloodhound.tokenizers.whitespace,
//     queryTokenizer: Bloodhound.tokenizers.whitespace,
//     // url points to a json file that contains an array of country names, see
//     prefetch: {
//       url: '/assets/glossary.json'
//     }
//   });

//   // passing in `null` for the `options` arguments will result in the default
//   // options being used
//   $('#prefetch #typeahead').typeahead(null, {
//     name: 'glossary',
//     source: glossary
//   });

//   //Capture Typeahead Form Submit
//   // Intercept Write Post Form Submit
//   $('#typeahead-form').on('submit', function(e){
//     var $data = $(this).serializeArray();
//     var q = $data[0]['value']

//     // ajax request starts
//     $.ajax({
//       method: "get",
//       url: "/glossary/" + $data[0]['value']
//     })
//     .done(function(data) {
//       $("#popover").attr('data-content', data);
//       $("#popover").attr('data-original-title', q);
//       $('#popover').popover("toggle");
//     })
//     .fail(function() {
//       console.log("fail")
//     })
//   // ajax request ends










//   });




//     // typeahead ends here



// $('#div-search').show();
// $('#div-tabs').hide();
// $('#wikipediaDiv').hide();
// $('#flickrDiv').hide();
// $('#twitterDiv').hide();

//   // Capture tooltip click
//   $('[data-toggle=tooltip], #tab-wikipedia').on('click', function(e){
//       $('#div-search').hide();
//       $('#div-tabs').show();
//       $('#wikipediaDiv').show();
//       $('#flickrDiv').hide();
//       $('#tab-flickr').removeClass('alert');
//       $('#tab-twitter').removeClass('alert');
//       $('#tab-wikipedia').addClass('alert');


//       var $wikipediaKeyword = $(this).attr('data-keyword');
//       $('#tab-wikipedia').attr("data-keyword", $wikipediaKeyword)
//       $('#tab-flickr').attr("data-keyword", $wikipediaKeyword)
//       $('#tab-twitter').attr("data-keyword", $wikipediaKeyword)


//       $wikipediaKeyword = $wikipediaKeyword.toLocaleLowerCase().replace(/ /g,"_");
//       // API Request to Wikipedia
//       $.ajax({
//         type: "GET",
//         url: "http://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=" + $wikipediaKeyword + "&callback=?&redirects",
//         contentType: "application/json; charset=utf-8",
//         async: false,
//         dataType: "json",

//         success: function (data, textStatus, jqXHR) {
//           try {
//             var markup = data.parse.text["*"];
//             var blurb = $('<div></div>').html(markup);

//             // remove links as they will not work
//             blurb.find('a').each(function() { $(this).replaceWith($(this).html()); });

//             // remove any references
//             blurb.find('sup').remove();

//             // remove cite error
//             blurb.find('.mw-ext-cite-error').remove();
//             blurb = ($(blurb).find('p'));

//             // Handlebars Template Starts Here
//             var wikipediaInfo = document.getElementById("wikipedia-template").innerHTML;
//             var template = Handlebars.compile(wikipediaInfo)
//             var wikipediaData = template({
//               title: $wikipediaKeyword,
//               info: blurb
//             });
//             document.getElementById("div#wikipediaDiv").innerHTML = wikipediaData;
//             // Handlebars Template Ends Here
//           }

//           catch(err) {
//             document.getElementById("wikipediaDiv").innerHTML = '<h4>Sorry, Wikipedia does not have an entry for this keyword...</h4>';
//           }
//         },

//         error: function (errorMessage) {
//         }
//       });
//       // API Request to Wikipedia


//   });
//   // Capture tooltip click

//   // Capture flickr click
//   $('#tab-flickr').on('click', function(e){
//     $('#wikipediaDiv').hide();
//     $('#twitterDiv').hide();
//     $('#flickrDiv').show();
//     $('#tab-flickr').addClass('alert');
//     $('#tab-wikipedia').removeClass('alert');
//     $('#tab-twitter').removeClass('alert');
//     var $flickrKeyword = $(this).attr('data-keyword');
//     //data.photos.photo[2].id
//     //data.photos.photo[2].server
//     //data.photos.photo[2].farm
//     //data.photos.photo[2].secret
//     //data.photos.photo[2].owner


//    $.ajax({
//         type: "GET",
//         url: "https://api.flickr.com/services/rest/?&method=flickr.photos.search&tags=" + $flickrKeyword + "&safe_search=1&per_page=20&api_key=79ea624274bb06e96bf9e06fd2a00c74&format=json&jsoncallback=?",
//         async: false,
//         dataType: "json",
//         success: function (data, textStatus, jqXHR) {
//           var flickrInfo = document.getElementById("flickr-template").innerHTML;
//           var template = Handlebars.compile(flickrInfo)
//           var flickrData = template({
//             title: $flickrKeyword,
//             photos: data.photos.photo
//           });

//           document.getElementById("flickr_photos").innerHTML = flickrData;
//         },
//         error: function (errorMessage) {
//         }
//     });
//   });

//   // Capture twitter click
//   $('#tab-twitter').on('click', function(e){
//     $('#wikipediaDiv').hide();
//     $('#flickrDiv').hide();
//     $('#twitterDiv').show();
//     $('#tab-flickr').removeClass('alert');
//     $('#tab-wikipedia').removeClass('alert');
//     $('#tab-twitter').addClass('alert');
//     var $twitterKeyword = $(this).attr('data-keyword');
//     // ajax request starts
//     $.ajax({
//       method: "get",
//       url: "/options/twitter/" + $twitterKeyword
//     })
//     .done(function(data) {
//       document.getElementById("twitterDiv").innerHTML = data;
//     })
//     .fail(function() {
//       console.log("fail")
//     })
//   // ajax request ends
//   });


//   $('#dataCarousel').on('click', '#arrowParent, #arrowLeft, #arrowStepLeft', function(e){
//     e.preventDefault();
//     var optionID = $(this).attr('data-id')
//     var url = '';

//     if ($(this).attr('id') == 'arrowParent') {
//       url = "/options/"
//     } else {
//       url = "/options/" + optionID
//     }


//     //Fade out once complete run ajax
//     $('#panel-left').css('border', '4px dotted #1ABC9C');
//     $("#dataCarousel").animate({opacity: '0'}, function(){
//       // ajax request starts
//       $.ajax({
//         method: "get",
//         url: "/options/" + optionID
//       })
//       .done(function(data) {
//         console.log(data)
//         $("#dataCarousel").html(data).animate({opacity: '1'});
//       })
//       .fail(function(response) {
//         console.log("fail")
//         console.log(response)
//       })
//       // ajax request ends
//     });
//     //Fade outAnimation Complete
//   });

//   $('#dataCarousel').on('click', '#arrowParent, #arrowRight, #arrowStepRight' , function(e){
//     e.preventDefault();
//     var optionID = $(this).attr('data-id')
//     var url = '';

//     if ($(this).attr('id') == 'arrowParent') {
//       url = "/options/"
//     } else {
//       url = "/options/" + optionID
//     }

//     //Fade out once complete run ajax
//     $('#panel-right').css('border', '4px dotted #1ABC9C');
//     $("#dataCarousel").animate({opacity: '0'}, function(){
//       // ajax request starts
//       $.ajax({
//         method: "get",
//         url: url
//       })
//       .done(function(data) {
//         $("#dataCarousel").html(data).animate({opacity: '1'});
//       })
//       .fail(function(response) {
//         console.log("fail")
//         console.log(response)
//       })
//       // ajax request ends
//     });
//     //Fade outAnimation Complete
//   });
// });

