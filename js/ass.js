

var siteNameInput=document.getElementById('SiteName');

var siteUrlInput=document.getElementById('SiteURL');
var tBody=document.getElementById("tbody");
var sitesList=JSON.parse( localStorage.getItem('siteData'));
var submit=document.getElementById('submitSite');
var mood='submit';

var empty;


if(localStorage.getItem('siteData')==null)
{
    var sitesList=[]
}
else
{
    var sitedata=JSON.parse(localStorage.getItem('sitesList'));
    retriveSite()
}


// submit site


  function submitSite(){
    // alert('yoyo')

var site={
    siteName: siteNameInput.value,
    siteUrl: siteUrlInput.value,
}
if (site.siteUrl.includes('https:' , '.com')==false){
alert("please enter corect Url ,It must begin https/")
}
else{
if (mood=='submit'){
    sitesList.push(site)

    localStorage.setItem('siteData',JSON.stringify(sitesList))
}
else{
sitesList[empty]=site;

}

    // clearData()
    retriveSite()
}};

// clear form

function clearData(){
    // alert('yoyo')
    siteNameInput.value='' 
    siteUrlInput.value=''
}


// shoooowwData

function retriveSite(){
// alert('yoyo')

var trs="";
    for(var i=0 ; i<sitesList.length; i++)
    trs +=
    ` <tr>
    <td>${sitesList[i].siteName}</td>
    <td>${sitesList[i].siteUrl}</td>
    <td><button class="btn btn-outline-success">
    
    <a href="${sitesList[i].siteUrl}"><i class="fa-solid fa-right-to-bracket"></i></a>
    </button></td>
    <td><button class="btn btn-outline-primary" onclick="updateSite(${i})"><i class="fa-solid fa-pen-to-square"></i></button></td>
    <td><button class="btn btn-outline-danger" onclick="deleteSite(${i})"><i class="fa-solid fa-trash-can"></i></button></td>
    
</tr>`


tBody.innerHTML=trs;

}

// function delete 

function deleteSite (indexOfSite){
    // alert('yoyo')
sitesList.splice(indexOfSite,1)
console.log(sitesList);
localStorage.setItem('siteData',JSON.stringify(sitesList))

retriveSite()
}



// update

function updateSite(indexOfSite){
    // alert('yoyo')


    siteNameInput.value=sitesList[indexOfSite].siteName;
    siteUrlInput.value=sitesList[indexOfSite].siteUrl;
 
    console.log(indexOfSite)

    mood='update'
    empty=indexOfSite;
    submit.innerHTML="Update"
}
