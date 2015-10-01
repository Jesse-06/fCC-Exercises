$(document).ready(function() {
  // Load a quote when first visiting the page
  getQuote();

  // Show tooltips when hovering over the icons below the quote
  $('[data-toggle="tooltip"]').tooltip();
  $('#authorWiki').tooltip({
    title: "View the author on Wikipedia",
    placement: "top",
    delay: {
      show: 0,
      hide: 300
    },
    animation: true
  });
  $('#shareQuote').tooltip({
    title: "Tweet this quote!",
    placement: "top",
    delay: {
      show: 0,
      hide: 300
    },
    animation: true
  });

  //Send tweets in a modal dialog rather than a new _blank target page
  window.twttr = (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
      t = window.twttr || {};
    if (d.getElementById(id)) return t;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);

    t._e = [];
    t.ready = function(f) {
      t._e.push(f);
    };

    return t;
  }(document, "script", "twitter-wjs"));

  // workaround for mobile navbar issues. https://github.com/twbs/bootstrap/issues/12852
  $(document).on('click', '.navbar-collapse.in', function(e) {

    if ($(e.target).is('a') && ($(e.target).attr('class') != 'dropdown-toggle')) {
      $(this).collapse('hide');
    }
  });
});

/*
Call the Forismatic API and format quote + author text
Add context-aware links for wikipedia and twitter.
The IF statement handles unknown authors from the API.
*/
function getQuote() {
  $.ajax({
    url: "//api.forismatic.com/api/1.0/",
    jsonp: "jsonp",
    dataType: "jsonp",
    data: {
      method: "getQuote",
      lang: "en",
      format: "jsonp"
    },
    success: function(data) {
      // only accept quotes of 115 chars or less so tweets don't get truncated
      // max = 140 - 22chars for url - 2 spaces and a tilde = 115
      if ((data.quoteText.length + data.quoteAuthor.length) > 115) {
        getQuote();
        return;
      }
      //format URLs
      var authorWiki = '<a target="_blank" href="https://wikipedia.org/wiki/' + data.quoteAuthor + '"><img class="authorWiki" src="http://i.imgur.com/YFGCJRC.png"></img></a>';
      var shareUrl = encodeURIComponent(data.quoteText + "~" + data.quoteAuthor) + " http://s.codepen.io/TylerMoeller/debug/WQGjvO";
      // added \t to the url to bypass adblocker
      var shareQuote = '<a target="_blank" href="https://twitter.com/intent/twee\tt' + '?text=' + shareUrl + '"><img class="shareQuote" src="http://i.imgur.com/wDcVRws.png"></a>';

      //populate html
      document.getElementById("quote").innerHTML = data.quoteText;
      document.getElementById("shareQuote").innerHTML = shareQuote;
      //handle null authors
      if (data.quoteAuthor.length === 0) {
        document.getElementById("author").innerHTML = "~ Anyonymous";
        document.getElementById("authorWiki").innerHTML = '<a href="http://wikipedia.org/wiki/anonymous"><img class="authorWiki" src="http://i.imgur.com/YFGCJRC.png"></img></a>';
      } else {
        document.getElementById("author").innerHTML = "~ " + data.quoteAuthor;
        document.getElementById("authorWiki").innerHTML = authorWiki;
      }
    }
  });
}