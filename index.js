//problem-1

// place functions and supporting code here.  Uncomment line below and place answer the to right of = sign
$(function init() {
  showName();
  updateBreedLinks();
  makeButton();
  bindEvents();
});
// document.getElementById("problem-1").innerHTML = "The DOM is now loaded and can be manipulated."


//problem-2

// place functions and supporting code here.  Uncomment line below and place answer the to right of = sign
function showName() {
  $("#user").text("Erik Hoy");
}
// document.getElementById("problem-2").innerHTML =

//problem-3

// place functions and supporting code here.  Uncomment line below and place answer the to right of = sign
function updateBreedLinks() {
  $("#breedList li a").each(function() {
    var breed = $(this).text();
    $(this).attr("href","https://www.google.com/search?q="+breed);
  });
}

//problem-4

// place functions and supporting code here.  Uncomment line below and place answer the to right of = sign
function makeButton() {
  $("#myFixPageButton").append('<button id="fixPage">Fix The Page</button>')
}
// document.getElementById("problem-4").innerHTML =

function bindEvents() {
  $("#dogBreedSubmitButton").click(function(event) {
    event.preventDefault();
    addBreed();
  });

}

function addBreed() {
  breed = $('input[name="breed"]').val();
  link = $('input[name="link"]').val();
  $("#breedList").append("<li><a href='"+link+"'>"+breed+"</a></li>");
}

//challenge-1

// place functions and supporting code here.  Uncomment line below and place answer the to right of = sign
function makeCards(stringArr, pathArr) {
  $(stringArr).each(function (i) {
    var newCard = '<div class="box box-lit">';
    newCard += '<h3>0'+(i+2)+'</h3>';
    newCard += '<img src="images/'+pathArr[i]+'" class="gallery-img" alt="'+pathArr[i+2]+'" />';
    newCard += '<p>'+stringArr[i]+'.</p>';
    newCard += '</div>';
    $("#gallery").append(newCard);
  });
}
// document.getElementById("challenge-1").innerHTML =


//challenge-2

// place functions and supporting code here.  Uncomment line below and place answer the to right of = sign
function fixThePage() {
  makeCards(['String 2','String 3','String 4','String 5'],['pic_2.jpg','pic_3.jpg','pic_4.jpg','pic_5.jpg']);
  $("#later-b3 h2").text("Dog's Food");
}
//
$(function () {
  $("#myFixPageButton").click(function() {
    fixThePage();
  });
});
// document.getElementById("challenge-2").innerHTML =
