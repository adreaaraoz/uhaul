$(document).ready(function() {
  $('#go-btn').click(function(){
    var zipcode = $('#zipcode').val ();
    $('#smallZip').val (zipcode);
  });


$('#quote_submit').click(function(e) {
    console.log("submitted");

  });

  });
  $("#quote_submit").click(function(e){
    e.preventDefault();

    formSubmit('smallFrom');
  });

});

  function formSubmit(name) {
  var serializedData = $(document.forms[name]) .serializeObject( );
  var url = 'https://script.google.com/macros/s/AKfycbwRvZnrx0RrDaHgRp-bJ-Q5uECNwIKTx9GTR4xaBXSE2ZvDWpc/exec'; // get this url

  var jqxhr = $.ajax({
    url,
    method: "GET",
    dataType: "json",
    data: serializedData,
    success: function(data){
      console.log('success', data);
    }
  });
}
