var app = {
  init: function() {
    console.log('test du dom');
    $('[data-toggle="popover"]').popover();
    $('#htmlBal').on('click', app.hideHtmlBal);
    $('#jqueryBal').on('click', app.hideJqueryBal);
    $('#phpBal').on('click', app.hidePhpBal);
    $('#phpLaravelBal').on('click', app.hidePhpLaravelBal);
    $('#sqlBal').on('click', app.hideSqlBal);
    $('#vueBal').on('click', app.hideVueBal);
    $('.memoryFE').on('click', app.toggleCarret);
    $('.echequierFE').on('click', app.toggleCarretEchequier);
    $('.boutiqueFE').on('click', app.toggleCarretBoutique);
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
  hideVueBal: function(){
    $('#connaissanceVue').fadeIn(2000);
  },
  toggleCarret: function(){
    // console.log('change moi');
    $('.memoryD').toggle();
    $('.memoryU').toggle();
  },
  toggleCarretEchequier: function(){
    // console.log('change moi');
    $('.echequierD').toggle();
    $('.echequierU').toggle();
  },
  toggleCarretBoutique: function(){
    // console.log('change moi');
    $('.boutiqueD').toggle();
    $('.boutiqueU').toggle();
  },
};
$(app.init);
