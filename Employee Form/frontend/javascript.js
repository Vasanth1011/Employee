function onFormSubmit(){
  var formData=readFormData();
  insertNewRecord(formData);
  resetform();
}

function readFormData(){
  var formData={};
  formData["fullname"]=document.getElementById("fullname").value;
  formData["empid"]=document.getElementById("empid").value;
  formData["dob"]=document.getElementById("dob").value;
  formData["doj"]=document.getElementById("doj").value;
  formData["desg"]=document.getElementById("desg").value;
  formData["branch"]=document.getElementById("branch").value;
  formData["mblno"]=document.getElementById("mblno").value;
  formData["address"]=document.getElementById("address").value;
  return formData;
}

function insertNewRecord(data){
  var table=document.getElementById("employeelist").getElementsByTagName('tbody')[0];
  var newrow=table.insertRow(table.length);
  cell1=newrow.insertCell(0);
  cell1.innerHTML=data.fullname;
  cell2=newrow.insertCell(1);
  cell2.innerHTML=data.empid;
  cell3=newrow.insertCell(2);
  cell3.innerHTML=data.dob;
  cell4=newrow.insertCell(3);
  cell4.innerHTML=data.doj;
  cell5=newrow.insertCell(4);
  cell5.innerHTML=data.desg;
  cell6=newrow.insertCell(5);
  cell6.innerHTML=data.branch;
  cell7=newrow.insertCell(6);
  cell7.innerHTML=data.mblno;
  cell8=newrow.insertCell(7);
  cell8.innerHTML=data.address;
}

function resetform(){
  document.getElementById("fullname").value="";
  document.getElementById("empid").value="";
  document.getElementById("dob").value="";
  document.getElementById("doj").value="";
  document.getElementById("desg").value="";
  document.getElementById("branch").value="";
  document.getElementById("mblno").value="";
  document.getElementById("address").value="";
  selectedRow=null;
}