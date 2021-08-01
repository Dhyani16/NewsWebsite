//API KEY: d37a0e2b6a004c89a15c012a65b14dff
////aef9af0bdf6865202c9fd0c45595a716
console.log("this is the index.js file");
//Grabbing the news container
let newsAccordion = document.getElementById("newsAccordion");
//Creating an AJAX get request
const xhr = new XMLHttpRequest();
//d37a0e2b6a004c89a15c012a65b14dff
xhr.open(
  "GET",
  "https://gnews.io/api/v4/search?q=example&token=aef9af0bdf6865202c9fd0c45595a716",
  true
);
xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    //if any doubt occurs then visit the http request link specified in xhr.open(), you will get the idea
    console.log(json);
    let articles = json.articles; //got the array if the articles
    console.log(articles);
    let newsHtml = "";
    articles.forEach(function (element, index) {
                    // console.log(element, index)
                    let news = `<div class="card">
                    <div class="card-header" id="heading${index}">
                        <h2 class="mb-0">
                        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                            aria-expanded="false" aria-controls="collapse${index}">
                           <b>Breaking News ${index+1}:</b> ${element["title"]}
                        </button>
                        </h2>
                    </div>
                    <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                        <div class="card-body"> ${element["content"]}. <a href="${element["url"]}" target="_blank" >Read more here</a>  </div>
                    </div>
                </div>`;
      newsHtml += news;
    });
    newsAccordion.innerHTML = newsHtml;
  } else {
    console.log("Some error occured");
  }
};

xhr.send();
