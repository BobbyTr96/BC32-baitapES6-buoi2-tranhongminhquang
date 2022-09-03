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
// hàm dom
const dom = (selector)=>{
    return document.querySelector(selector)
}
// === func hiển thị mẫu kính
const displayGlass = ()=>{
    // B1 dùng hàm reduce để lấy ra danh sách hình ảnh 
    let images = dataGlasses.reduce((total,glass)=>{
        return total += `<img src="${glass.src}" data-type="${glass.id}" class="col-4"/>`
    },"")

    // B2 dom lấy tới thẻ cha nơi mà img kính hiển thị và hiển thị ra trình duyệt
 dom("#vglassesList").innerHTML = images
}
displayGlass()

//==== func gắn kính người mẫu
let addGlass = (glassId)=>{
    // dùng hàm find để tìm object glass chứa thông tin mà người dùng vừa click vào
    let findGlass = dataGlasses.find((glass)=>{
        return glass.id === glassId
    })

    // dom tới khu vực hình ảnh người mẫu để gắn img kính
    dom("#avatar").innerHTML = `<img src="${findGlass.virtualImg}"/>`

    // dom tới khu vực hiển thị thông tin kính để show ra thông tin
    dom("#glassesInfo").style.display = "block"
    dom("#glassesInfo").innerHTML = `
    <h4 class="my-2">${findGlass.name} - ${findGlass.brand} (${findGlass.color})</h4>
    <span>$${findGlass.price} </span><span class="text-success">Stocking</span>
    <p class="my-2">${findGlass.description}</p>
    `



    
}

// lợi dụng sự kiện bubbling để lắng nghe sự kiện click vào kính thể thêm img glass vào người mẫu bên phải
// dom tới thẻ cha của sự kiện
dom("#vglassesList").addEventListener("click",(evt)=>{
    let chooseGlass = evt.target.getAttribute("data-type")
    if(chooseGlass === "G1"){
        // khi bấm vào kính thì sẽ chạy function gắn kính cho người mẫu
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



