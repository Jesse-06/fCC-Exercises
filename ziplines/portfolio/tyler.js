$(document).ready(function() {
  /* Add Scrollspy plugin to pencode <body>*/
  $('body').attr('data-spy', 'scroll');
  $('body').attr('data-target', '.navbar');
  $('body').attr('data-offset', '50');
  // workaround for mobile navbar issues. https://github.com/twbs/bootstrap/issues/12852
  $(document).on('click','.navbar-collapse.in',function(e) {

    if( $(e.target).is('a') && ( $(e.target).attr('class') != 'dropdown-toggle' ) ) {
        $(this).collapse('hide');
    }
  });
});
