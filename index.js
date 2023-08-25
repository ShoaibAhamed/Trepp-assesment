// Problem: using api endpoint :https://randomuser.me/api/?results=5


// Show first name and city in a table. 


fetch('https://randomuser.me/api/?results=5').then((data)=>{
	// console.log(data); // getting data in json format
	return data.json(); // converted to object
}).then((objectData)=>{
	let tableData="";
	objectData?.results?.map((values)=>{
		tableData+=`<tr>
      
      <td>${values.name.first}</td>
      <td>${values.location.city}</td>
      
    </tr>`;

	});
	document.getElementById("table_body").innerHTML = tableData;
})










