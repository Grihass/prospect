// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require rails-ujs
//= require_tree .

$(document).ready(function(){
    $('#div1').hide();

    $( '#show' ).click(function() {
        $('#div1').show();
    });

    $( '#cancel' ).click(function() {
        $('#div1').hide();
    });
  $('input').iCheck({
    checkboxClass: 'icheckbox_square-blue',
    radioClass: 'iradio_square-blue',
    increaseArea: '20%' // optional
  });


$(".chkbx").click(function(){
// назначаем обработку события onClick для каждого элемента класса "click"
   // и получаем его id
   id_click = this.attr("id");

  $( id_click ).on('ifChecked', function(event){
    
      $('#task_'+id_click).css('text-decoration','line-through')
  });
});
});

