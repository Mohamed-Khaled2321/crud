
var productName= document.getElementById('productName')
var Categoray= document.getElementById('productCategoray')
var Price= document.getElementById('productPrice')
var desc= document.getElementById('desc')
var searchprod=document.getElementById('searchInput')
var addClick=document.getElementById('addClick')
var updateData=document.getElementById('updateData')
var alertInputs=document.getElementById('alertInputs')
var alertName=document.getElementById('alertName')
var indexUpdate=0


if(localStorage.getItem('All product')==null){
var productcontainer=[]
}else{
productcontainer=JSON.parse(localStorage.getItem('All product'))
display()
}

addClick.onclick=function(){
    if(validationInputs()==true){
        createProduct()
    }

}

function validationInputs(){
    if(productName.value !=''&& Categoray.value !=''&& Price.value !=''&& desc.value !=''){
        alertInputs.classList.replace('d-block','d-none')
        //addClick.setAttribute('disabled','false')
        return true;
    }else{
        alertInputs.classList.replace('d-none','d-block')
        addClick.setAttribute('disabled','true')
        return false;
    }
}





function validationName(){
   var regex=/^[A-Z][a-z]{3,9}$/
   if(regex.test(productName.value)==true){
    productName.classList.add('is-valid')
    productName.classList.remove('is-invalid')
    addClick.removeAttribute('disabled','true')
    alertInputs.classList.add('d-none')
    alertName.classList.add('d-none')

    return true;
   }else{
    productName.classList.remove('is-valid')
    productName.classList.add('is-invalid')
    addClick.setAttribute('disabled','true')
    alertInputs.classList.remove('d-none')
    alertName.classList.remove('d-none')
    return false;
   }
}

function validationCategory(){
    var regex=/^[a-z]{3,15}$/
    if(regex.test( Categoray.value)==true){
     Categoray.classList.add('is-valid')
     Categoray.classList.remove('is-invalid')
     addClick.removeAttribute('disabled','true')
     alertInputs.classList.add('d-none')
 
     return true;
    }else{
     Categoray.classList.remove('is-valid')
     Categoray.classList.add('is-invalid')
     addClick.setAttribute('disabled','true')
     alertInputs.classList.remove('d-none')
     return false;
    }
 }



function createProduct(){
   
  
   var product={
     productName: productName.value,
     proCategoray: productCategoray.value,
     proPrice: productPrice.value,
     prodesc: desc.value

   }
   productcontainer.push(product)
   console.log(productcontainer)
   localStorage.setItem('All product',JSON.stringify(productcontainer))
   display()
   reset()

   //console.log(productcontainer)
  
    
}


function display(){
    var trs= ``;
    for(i=0;i<productcontainer.length;i++){
            trs+= `
        <tr class="">
          <td scope="row">${i}</td>
          <td>${productcontainer[i].productName}</td>
          <td>${productcontainer[i].proCategoray}</td>
          <td>${productcontainer[i].proPrice}</td>
          <td>${productcontainer[i].prodesc}</td>
          <td><button class="btn btn-outline-primary" onclick="setupdata(${i})"><i class="fa-regular fa-pen-to-square"></i></button></td>
          <td><button class="btn btn-outline-danger" onclick="delet(${i})" ><i class=" fa-solid fa-trash"></i></button></td>
        </tr>
         `

    document.getElementById('tableBody').innerHTML=trs

        }

        
}

function delet(index){
    productcontainer.splice(index,1)
    localStorage.setItem('All product',JSON.stringify(productcontainer))
     display()
    
}

function searchproduct(){

    var trs=``;
    for(i=0;i<productcontainer.length;i++){
        if(productcontainer[i].productName.includes(searchprod.value)){
             trs+= `
        <tr class="">
          <td scope="row">${i}</td>
          <td>${productcontainer[i].productName}</td>
          <td>${productcontainer[i].proCategoray}</td>
          <td>${productcontainer[i].proPrice}</td>
          <td>${productcontainer[i].prodesc}</td>
          <td><button class="btn btn-outline-primary" onclick="setupdata(${i})"><i class="fa-regular fa-pen-to-square"></i></button></td>
          <td><button class="btn btn-outline-danger" onclick="delet(${i})" ><i class=" fa-solid fa-trash"></i></button></td>
        </tr>
        
        
        
        `

        }
    } 
    
    document.getElementById('tableBody').innerHTML=trs
    

}


function reset(){
    productName.value=''
    productCategoray.value=''
    productPrice.value=''
    desc.value=''

}



function setupdata(index){
    indexUpdate=index
    var product={
        productName: productName.value,
        proCategoray: productCategoray.value,
        proPrice: productPrice.value,
        prodesc: desc.value
   
    }
      console.log(productcontainer[index])
      productName.value= productcontainer[index].productName;
      productCategoray.value= productcontainer[index]. proCategoray;
      productPrice.value= productcontainer[index].proPrice;
      desc.value= productcontainer[index].prodesc;

      addClick.classList.add('d-none')
      updateData.classList.remove('d-none')
      
}




function updatedata(){

    var product={
        productName: productName.value,
        proCategoray: productCategoray.value,
        proPrice: productPrice.value,
        prodesc: desc.value
   
    }
productcontainer.splice(indexUpdate,1,product)
localStorage.setItem('All product',JSON.stringify(productcontainer))
display()
reset()
addClick.classList.remove('d-none')
updateData.classList.add('d-none')

console.log(product)


}

