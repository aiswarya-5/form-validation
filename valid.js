function validatef()
{
	var username=document.validateform.uname.value;
	var password=document.validateform.pass.value;	
	var email=document.validateform.email.value;		
	var phone=document.validateform.phone.value;						
	if(username=="" || password=="" || email=="" ||phone=="")
	{
		alert("Blank space is not allowed");
		return false;
	}
	else
	{
		return true;
	}
}
function blurfuction(x)
{					
	if(x.value=='')
	{
		alert("Empty input is not allowed. Please Enter your data");	
		return false;				
	}	
}
function EmailValidation(email)
{
	var emailformat =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(email.value.match(emailformat))
	{
		return true;
	}
	else
	{
		alert("You have entered an invalid email address!");
		return false;
	}
}
function PasswordValidation(pass)
{
	var passwordformat= /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*-]).{8,}$/;
	if(pass.value=='')
	{
		alert("Please Enter your Password");	
		return false;				
	}
	if(pass.value.match(passwordformat))
	{
		return true;
	}
	else
	{
		alert("Not Strong Enough..Try another Password!");
		return false;
	}
}
function PhonenoValidation(phone)
{
	var phoneformat= /^(\d){10}$/;
	if(phone.value=='')
	{
		alert("Please Enter your Mobile Number");	
		return false;				
	}
	if(phone.value.match(phoneformat))
	{
		return true;
	}
	else
	{
		alert("Invalid Phone Number!");
		return false;
	}
}