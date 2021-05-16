function kilometerToMeter (value)
{
    return value*1000;

}
//watch price 50 tk
//phone priuce 100 tk
// laptop price 500 tk
//calculate the total budget
function budgetCalculator(watch,phone,laptop)
{
    var total = 50*watch + 100*phone + 500*laptop;
    return total;
}
//1-10 days 100 tk 
// 11-20 days  80tk 
//20+ days  50 tk 
//calculate hotel cost 
 function hotelCost ( days)
 {
     if(days <= 10)
     {
         return days * 100;
     }
     else if( days<=20 && days>10 )
     {
         return (days-10)*80 + 1000;
     }
     else if(days >20)
     {
         return (days-20)*50 + 1800;
     }
 }
 //Return the bioggest string from an array 
 function megaFriend(name)
 {
     var nam;
     var pos;
     var max= 0;
     var value;
     for (var i=0;i<name.length; i++)
     {

        nam = name[i];
        value = nam.split("").length;
        if(value> max)
        {
           max  = value;
           pos  = i;
        }

        

     }
     return name[pos];

  

 }

 

//checking 1st funtion
var meter =20 ;
var result = kilometerToMeter (meter);
console.log(result);
//checking end function with value
var watchPrice = 50, phonePrice = 100;  laptopPrice = 500;
var ans = budgetCalculator (3,2,1);
console.log(ans);
//checking 3rd function with value
var day =45;
var mn = hotelCost(day);
console.log(mn);
//checking 4th function with value
var arr =["djfa", "fsdaf", "sdfa", "jgjhfdsaf"];
var bigname = megaFriend(arr);
console.log(bigname);
