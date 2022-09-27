const logout =document.querySelector("#logout-show")
        logout.addEventListener("click",()=>{
            location.href="./index.html";
        localStorage.clear();
        })
        if (localStorage.getItem("loginStatus") !== "true") {
            location.href = "./index.html";
        }
console.log("user page script")

const url = "https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users";
const data = async (url) => {
const res = await fetch(url)
console.log("async await api call ")
return await res.json()
};

const fillDataInTable = () => {
    console.log("filling data in the table")
const res = data(url);
res.then((response) => {
const tbody = document.querySelector('#tbody');

for (row of response) {
    const trow = document.createElement("tr");
    trow.classList.add("data-row");
    const col1 = document.createElement("td")
    const col2 = document.createElement("td")
    const col3 = document.createElement("td")
    const col4 = document.createElement("td")
    const col5 = document.createElement("td")
    const col6 = document.createElement("td")
    col1.classList.add('id')
    col1.innerHTML = row.id
    const img = document.createElement('img')
    col2.classList.add('User-Avatar')
    img.setAttribute("src", row.profilePic)
    col3.classList.add('UserName')
    col3.innerHTML = `${row.fullName}`
    col4.classList.add('DOB')
    col4.innerHTML = row.dob
    col5.classList.add('Gender')
    col5.innerHTML = row.gender
    col6.classList.add('Location')
    col6.innerHTML = `${row.currentCity}, ${row.currentCountry}`
    tbody.appendChild(trow)
    trow.appendChild(col1)
    trow.appendChild(col2)
    col2.appendChild(img)
    trow.appendChild(col3)
    trow.appendChild(col4)
    trow.appendChild(col5)
    trow.appendChild(col6)

}

const input = document.querySelector("#search-box-input");
console.log(input)
input.addEventListener("keypress", (e) => {
    console.log(e)
    if (e.key == "Enter" || e.key=="enter") {
        const tr = document.querySelectorAll(".data-row");
console.log(tr)
        
const filter = input.value.toLowerCase();
        console.log(filter)
        if (filter.length < 2) {
            alert("Please enter atleast two character");
        }
        else {
            for (let row of tr) {
                const Uname = row.querySelector(".UserName");
                console.log(".UserName")
                console.log(Uname)
                   if (Uname.textContent.toLowerCase().includes(filter)) {
                    console.log(true)
                    for (let obj of Object.entries(row.classList)) {
                        if ("hide-row" == obj[1]) {
                            console.log("hide-row")
                            row.classList.remove("hide-row");
                        }
                    }
                }
                else {
                    for (let obj of Object.entries(row.classList)) {
                        if ("hide-row"!== obj[1]) {
                            row.classList.add("hide-row");
                        }
                    }
                }
            }
        }
    }
    });

const resetBtn = document.querySelector("#reset")
resetBtn.addEventListener("click", () => {
    input.value = "";
    const hiddenrows = document.querySelectorAll(".hide-row");
    for (let row of hiddenrows) {
        row.classList.remove("hide-row");
    }
});
});
};

window.addEventListener("DOMContentLoaded", fillDataInTable);


const currentTab = window.location.href;
  if (currentTab.includes("Users.html")) {
    document.querySelector("#users-tab").classList.add("active-tab");
    document.getElementById("users-tab").style.color="#20b883";
  }




// const url = "https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/Userss"

// const data = async (url) => {
//     const res = await fetch(url)
//     console.log("async await api call ")
//     return await res.json()
// }

// const fillDataInTable = () => {
//     const res = data(url);
//     res.then((response) => {
//         const tbody = document.querySelector('tbody');
//         for (row of response) {
//             const trow = document.createElement("tr")
//             trow.classList.add("data-row");
//             const col1 = document.createElement("td")
//             const col2 = document.createElement("td")
//             const col3 = document.createElement("td")
//             const col4 = document.createElement("td")
//             const col5 = document.createElement("td")
//             const col6 = document.createElement("td")
//             col1.classList.add('column1')
//             col1.innerHTML = row.id
//             col2.classList.add('column2')
//             col2.innerHTML = 
//             col3.classList.add('column3')
//             col3.innerHTML = 
//             col4.classList.add('column4')
//             col4.innerHTML = 
//             col5.classList.add('column5')
//             console.log("col5")
//             col5.innerHTML = 
//            col6.classList.add('column6')
//             console.log("col6")
//             col6.innerHTML = 
//             tbody.appendChild(trow)
//             trow.appendChild(col1)
//             trow.appendChild(col2)
//             trow.appendChild(col3)
//             trow.appendChild(col4)
//             trow.appendChild(col5)
//             trow.appendChild(col6)
//         }
//     });
// }

// window.addEventListener("DOMContentLoaded", fillDataInTable);