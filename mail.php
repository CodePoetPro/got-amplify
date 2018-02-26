<?php
if($_POST){
    $company_name = $_POST['company_name'];
    $company_role = $_POST['company_role'];
    $plan = $_POST['plan'];
    $budget = $_POST['budget'];

//send email
    mail("hello@amplify.ng", "Raven from The ".$company_role." of ".$company_name, "Plan : - ".$plan." Our Budget is : - ".$budget);
}
?>
