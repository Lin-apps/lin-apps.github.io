var url = 'https://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from=2021-09-30&' +
          'sortBy=popularity&' +
          'apiKey=4f4388190e044f4d80e0a27e7cbaf70b';

var req = new Request(url);

fetch(req)
    .then(function(response) {
        console.log(response.json());
    })

document.getElementById('button').onclick = function() {
   alert(req);
}
