let dataGlasses = [
    { id: "G1", src: "./img/g1.jpg", virtualImg: "./img/v1.png", brand: "Armani Exchange", name: "Bamboo wood", color: "Brown", price: 150, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? " },
    { id: "G2", src: "./img/g2.jpg", virtualImg: "./img/v2.png", brand: "Arnette", name: "American flag", color: "American flag", price: 150, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G3", src: "./img/g3.jpg", virtualImg: "./img/v3.png", brand: "Burberry", name: "Belt of Hippolyte", color: "Blue", price: 100, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G4", src: "./img/g4.jpg", virtualImg: "./img/v4.png", brand: "Coarch", name: "Cretan Bull", color: "Red", price: 100, description: "In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G5", src: "./img/g5.jpg", virtualImg: "./img/v5.png", brand: "D&G", name: "JOYRIDE", color: "Gold", price: 180, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?" },
    { id: "G6", src: "./img/g6.jpg", virtualImg: "./img/v6.png", brand: "Polo", name: "NATTY ICE", color: "Blue, White", price: 120, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G7", src: "./img/g7.jpg", virtualImg: "./img/v7.png", brand: "Ralph", name: "TORTOISE", color: "Black, Yellow", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam." },
    { id: "G8", src: "./img/g8.jpg", virtualImg: "./img/v8.png", brand: "Polo", name: "NATTY ICE", color: "Red, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim." },
    { id: "G9", src: "./img/g9.jpg", virtualImg: "./img/v9.png", brand: "Coarch", name: "MIDNIGHT VIXEN REMIX", color: "Blue, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet." }
];
// h??m dom
const dom = (selector)=>{
    return document.querySelector(selector)
}
// === func hi???n th??? m???u k??nh
const displayGlass = ()=>{
    // B1 d??ng h??m reduce ????? l???y ra danh s??ch h??nh ???nh 
    let images = dataGlasses.reduce((total,glass)=>{
        return total += `<img src="${glass.src}" data-type="${glass.id}" class="col-4"/>`
    },"")

    // B2 dom l???y t???i th??? cha n??i m?? img k??nh hi???n th??? v?? hi???n th??? ra tr??nh duy???t
 dom("#vglassesList").innerHTML = images
}
displayGlass()

//==== func g???n k??nh ng?????i m???u
let addGlass = (glassId)=>{
    // d??ng h??m find ????? t??m object glass ch???a th??ng tin m?? ng?????i d??ng v???a click v??o
    let findGlass = dataGlasses.find((glass)=>{
        return glass.id === glassId
    })

    // dom t???i khu v???c h??nh ???nh ng?????i m???u ????? g???n img k??nh
    dom("#avatar").innerHTML = `<img src="${findGlass.virtualImg}"/>`

    // dom t???i khu v???c hi???n th??? th??ng tin k??nh ????? show ra th??ng tin
    dom("#glassesInfo").style.display = "block"
    dom("#glassesInfo").innerHTML = `
    <h4 class="my-2">${findGlass.name} - ${findGlass.brand} (${findGlass.color})</h4>
    <span>$${findGlass.price} </span><span class="text-success">Stocking</span>
    <p class="my-2">${findGlass.description}</p>
    `



    
}

// l???i d???ng s??? ki???n bubbling ????? l???ng nghe s??? ki???n click v??o k??nh th??? th??m img glass v??o ng?????i m???u b??n ph???i
// dom t???i th??? cha c???a s??? ki???n
dom("#vglassesList").addEventListener("click",(evt)=>{
    let chooseGlass = evt.target.getAttribute("data-type")
    if(chooseGlass === "G1"){
        // khi b???m v??o k??nh th?? s??? ch???y function g???n k??nh cho ng?????i m???u
        addGlass(chooseGlass)
    }else if(chooseGlass === "G2"){
        addGlass(chooseGlass)
    }else if(chooseGlass === "G3"){
        addGlass(chooseGlass)
    }else if(chooseGlass === "G4"){
        addGlass(chooseGlass)
    }else if(chooseGlass === "G5"){
        addGlass(chooseGlass)
    }else if(chooseGlass === "G6"){
        addGlass(chooseGlass)
    }else if(chooseGlass === "G7"){
        addGlass(chooseGlass)
    }else if(chooseGlass === "G8"){
        addGlass(chooseGlass)
    }else if(chooseGlass === "G9"){
        addGlass(chooseGlass)
    }
    
})



