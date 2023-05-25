let myLeads=[];
const inputel=document.getElementById('input-el');
const save= document.getElementById('savebtn');
const ulel=document.getElementById('ul-el');
const leadsfromlocalstorage= JSON.parse(localStorage.getItem("myLeads"))
const deletebt=document.getElementById('deletebtn');
const tabs=document.getElementById('tabbtn');

tabs.addEventListener('click', function(){
  chrome.tabs.query({ currentWindow: true, active: true}, function(tabs){
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  })
  

})

if(leadsfromlocalstorage){
  myLeads=leadsfromlocalstorage;
  render(myLeads);
}

function render(leads){
  let listitems='';
  for (let i=0;i<leads.length;i++){
    //ulel.innerHTML +="<li>" + myLeads[i] + "</li> ";

    //const li = document.createElement('li');
    //li.textContent=myLeads[i];
    //ulel.append(li);

listitems+=`<li>
<a target='_blank' href='${leads[i]}'> 
${leads[i]} 
</a>
</li> `;
}
ulel.innerHTML=listitems;
}

deletebt.addEventListener('dblclick', function(){
  localStorage.clear();
  myLeads=[];
  render(myLeads);
})

save.addEventListener('click', function(){
  myLeads.push(inputel.value);
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
render(myLeads);
inputel.value="";
});

