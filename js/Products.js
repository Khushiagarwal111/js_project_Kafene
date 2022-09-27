if (localStorage.getItem("loginStatus") !== "true") {
    location.href = "./index.html";
  }

const logout = () => {
    localStorage.clear();
    window.location.href = './index.html';
}
$(document).ready(() => {

    $.get("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products", (productPageData) => {
         class Product {
            constructor(filterProduct) {
                this.pid = filterProduct.id;
                this.Name = filterProduct.medicineName;
                this.Brand = filterProduct.medicineBrand;
                this.expiryData = filterProduct.expiryDate;
                console.log(this.expiryData)
                this.UnitPrice = filterProduct.unitPrice;
                this.stock = filterProduct.stock;
                      }
            printProduct() {
                return (`<tr>
                            <td class="gray10">${this.pid}</td>
                            <td class="black20">${this.Name}</td>
                            <td class="gray20">${this.Brand}</td>
                            <td class="black">${this.expiryData}</td>
                            <td class="gray">${this.UnitPrice}</td>
                            <td class="gray">${this.stock}</td>
                        </tr>`
                        )
            }
        }

        let allContent = productPageData;
        let filteredContent = [];

        const filterProdContent = () => {
            const expired = $('#expired').prop('checked');
            const lowStock = $('#low-stock').prop('checked');
            filteredContent = [];
                const Today= new  Date();
                const today = new Date()
    console.log(today.toLocaleString('default', { month: 'long' }))

    const TodayDate= `${Today.getDate()}-${Today.toLocaleString("default", {month:'short'})}-${Today.getFullYear()}`;
    console.log(TodayDate);

            if (allContent.length > 0) {
                filteredContent = allContent.filter((Product) => {
                    if (expired) return new Date(TodayDate)<new Date(Product.expiryDate);
                    console.log("expiry date"+Product.expiryDate)
                    return true;
                });
                filteredContent = filteredContent.filter((Product) => {
                    if (lowStock) return (Product.stock < 100);
                    return true;
                });
                renderUI(filteredContent);
            }
        }
        const renderUI = (args) => {
            $('.tbody').html(" ");
            $("#count").html(args.length)
            let generatetable = [];
            let htmlstr = " ";
            if (args.length > 0) {
                for (let i = 0; i < args.length; i++) {
                    generatetable[i] = new Product(args[i]);
                    htmlstr += generatetable[i].printProduct();
                }

                $("#tbody").html(htmlstr);
            }
        }

        filterProdContent();
        $('.checkbox').change(filterProdContent)
    });
});

const currentTab = window.location.href;
  if (currentTab.includes("Products.html")) {
    document.querySelector("#products-tab").classList.add("active-tab");
    document.getElementById("products-tab").style.color="#20b883";
  }

