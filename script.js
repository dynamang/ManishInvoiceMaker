function getDateTime(choice) {
	var now     = new Date(); 
	var year    = now.getFullYear()-2000;
	var month   = now.getMonth()+1; 
	var day     = now.getDate();
	var hour    = now.getHours();
	var minute  = now.getMinutes();
	//var second  = now.getSeconds(); 
	if(month.toString().length == 1) {
		 month = '0'+month;
	}
	if(day.toString().length == 1) {
		 day = '0'+day;
	}   
	if(hour.toString().length == 1) {
		 hour = '0'+hour;
	}
	if(minute.toString().length == 1) {
		 minute = '0'+minute;
	}
	if(choice===1){
	var dateTime = day+'/'+month+'/'+year;
	return dateTime;
    }
	else
	{
	   var dateTime = year.toString()+month+day+hour+minute;   
	   return dateTime;	
	}
}

function addRow() {
    	var emptyColumn = document.createElement('tr');
        emptyColumn.innerHTML =	'<td><a class="cut" onclick="deleteRow(this)">-</a><span contenteditable></span>'+
		'<td contenteditable></td>'+
		'<td contenteditable></td>'+
		'<td></td>'
		document.getElementById("myTable").appendChild(emptyColumn);
		myFunction();
	}

function deleteRow(r) {
	var i = r.parentNode.parentNode.rowIndex;
	document.getElementById("myTable").deleteRow(i);
	myFunction();  
}

function myFunction() {
	var total = 0;
	var cells, price;
         var num1=0;
	var table = document.getElementById("myTable");
    var size=table.rows.length;
	console.log(size);
	for (var i=1;i<size;i++) {
		let row = table.rows[i];
		var a=row.cells[1].innerText;
		if(isNaN(a))
		{
			a=Number(0);
			row.cells[1].innerText=0;
		}
		a=Number(a);
		var b=row.cells[2].innerText;
		
		if(isNaN(b))
		{
			b=Number(0);			row.cells[2].innerText=0;
		}
		b=Number(b);
		total+=a*b;
		row.cells[3].innerText=a*b;		
	 }
	 document.getElementById("finalTotal").innerHTML=total;
	 var paid=document.getElementById("finalPaid").innerHTML;
     if(isNaN(paid))
	 {
		paid=Number(0);
		document.getElementById("finalPaid").innerHTML=0;
	}	
	 	paid=Number(paid);
		console.log(paid);
		document.getElementById("finalDue").innerHTML=total-paid;
		document.getElementById("finalNum").innerHTML=size-1;
		document.getElementById("due").innerHTML=total-paid;
		document.getElementById("date").innerHTML=getDateTime(1);
               
}
function myFunction1(){ 
	 myFunction();
	 console.log("IN print funtion");
	 var name=this.document.getElementById("cusName").value;
	 var date=getDateTime(0);
     var fname="BILL-"+name+"-"+date;
	 this.document.getElementById("invoice_num").innerText =  date;
	 this.document.getElementById("date").innerText=getDateTime(1);
	console.log(name);
	console.log("Dyno");

	const invoice = this.document.getElementById("invoice");
	console.log(invoice);
	var opt = {
		margin: 1,
		filename: fname,
		image: { type: 'jpeg', quality: 1 },
		html2canvas: { scale: 4 },
		jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
	};
	html2pdf().from(invoice).set(opt).save();
}

function clickCounter()
{ 
		localStorage.setItem("lastname", this.document.getElementById("invoice").innerHTML);
}
function clickCounter1()
{
	document.getElementById("invoice").innerHTML = localStorage.getItem("lastname");	
}
