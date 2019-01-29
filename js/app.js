var app = {
  init: function() {
    console.log('test du dom');
    $('#htmlBal').on('click', app.hideHtmlBal);
    $('#jqueryBal').on('click', app.hideJqueryBal);
    $('#phpBal').on('click', app.hidePhpBal);
    $('#phpLaravelBal').on('click', app.hidePhpLaravelBal);
    $('#sqlBal').on('click', app.hideSqlBal);
  },

  hideHtmlBal: function(){
    $('#connaissanceHtml').fadeIn(2000);
  },
  hideJqueryBal: function(){
    $('#connaissanceJquery').fadeIn(2000);
  },
  hidePhpBal: function(){
    $('#connaissancePhp').fadeIn(2000);
  },
  hidePhpLaravelBal: function(){
    $('#connaissancePhpLaravel').fadeIn(2000);
  },
  hideSqlBal: function(){
    $('#connaissanceSql').fadeIn(2000);
  },
};
$(app.init);
