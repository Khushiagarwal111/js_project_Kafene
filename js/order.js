
// Logout Function Declaration
const logout = () => {
    localStorage.clear();
    window.location.href = './index.html';
}
if (localStorage.getItem("loginStatus") !== "true") {
    location.href = "./index.html";
  }
$(document).ready(()=> {
  $.get("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders",(orderPageUrl)=>{

   if(!localStorage.getItem('login')){
    window.location.href="./index.html"
   }

class OrderTable{
    constructor(filterOrdersInTable){
        this.OrderId=filterOrdersInTable.id;
        this.OrderCustomerName=filterOrdersInTable.customerName;
        this.OrderDate=filterOrdersInTable.orderDate;
        this.OrderAmount=filterOrdersInTable.amount;
        this.OrderTime=filterOrdersInTable.orderTime;
        this.OrderStatus=filterOrdersInTable.orderStatus;
    }
    printrOrderTable(){
        return(`<tr>
        <td>${this.OrderId}</td>
        <td>${this.OrderCustomerName}</td>
        <td>${this.OrderDate}<p class="gray10">${this.OrderTime}</p></td>
        <td>$${this.OrderAmount}</td>
        <td>${this.OrderStatus}</td>
        
    </tr> `)
    }
}

let allTableContent=orderPageUrl;
let filteredTableContent=[];
const filterContentInOrderTable =()=>{  
        const newID = $("#first").prop('checked');
        const packed = $("#packed").prop('checked');
        const intransit = $("#intransit").prop('checked');
        const delivered = $("#delivered").prop('checked');
        filteredTableContent=[];
        if(allTableContent.length>0){
            filteredTableContent= allTableContent.filter((OrderTable)=>{
                if(newID && OrderTable.OrderStatus==="New")return true;
                if(packed && OrderTable.OrderStatus==="Packed")return true;
            
                if(delivered && OrderTable.OrderStatus==="Delivered")return true;
                if (intransit && OrderTable.orderStatus === 'InTransit') return true;
                return true;
            })
            renderUI(filteredTableContent);
        }
}
const renderUI= (args)=>{
    $('#tbody').html(" ");
    $(".count").html(args.length)
    let generateHTMLCode=[];
    let htmlstr=" ";
   if(args.length>0){
    for(let i=0; i<args.length; i++){
        generateHTMLCode[i]= new OrderTable(args[i]);
        htmlstr += generateHTMLCode[i].printOrderTable();
    }
    $("#tbody").html(htmlstr);
}
}
filterContentInOrderTable();
$(".checkbox").change(filterContentInOrderTable);
});
});

const currentTab = window.location.href;
if (currentTab.includes("order.html")) {
  document.querySelector(".orders-tab").classList.add("active-tab");
}

