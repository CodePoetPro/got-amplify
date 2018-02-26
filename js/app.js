var budget = "below 5M";

$('.menu').click(()=>{
  $('.close-area').addClass('show');
  $('side').addClass('show');
});
$('.close-area').click(()=>{
  $('.close-area').removeClass('show');
  $('side').removeClass('show');
});

$('.throw-bird').click((e)=>{
  sendARaven(e);
});

$('#budget').change(()=>{
  let value = $('#budget').val();
  if(value == 1){

    budget = "below 500K";
  }else if (value == 2) {
    budget = "below 2.5M";
  }else if (value == 3) {
    budget = "below 5M";
  }else if (value == 4) {
    budget = "below 15M";
  }else if (value == 5) {
    budget = "below 30M";
  }
  console.log(budget);
});

function sendARaven(e) {
  if($("#company_name").val()!== "" || $("#plan").val()!== ""){
    e.preventDefault();
    var data = {
      company_name: $("#company_name").val(),
      company_role:$("#company_role").val(),
      plan: $("#plan").val(),
      budget: budget
    };

  console.log(data);

  $.ajax({
      type: "POST",
      url: "mail.php",
      data: data,
      dataType: 'json',
      success: alert ("Raven sent successfully")
  });

}else {
  alert ("Please complete the form.");
}

}
