
var Name = prompt("اسم شما چیست ؟")

Name_web = `
اغاز یک همکاری دیجیتال با شما اقای ${Name} 
اغاز یک همکاری ابدی
`
if(Name == Number) {
    alert("لطفا اسم را به صورت متن وارد کنید")
    window.close()
} else if(Name.length > 10) {
    alert("لطفا نام خود را کمتر از 7 کلمه بنویسید")
    window.close()
}else {
    alert(Name + " خوش امدید")
}



const h1caption = document.getElementById("h1-caption-id")

h1caption.innerHTML = Name_web

const text_rope = document.getElementById("text-rope-id")

const call = document.getElementById("call")

call.addEventListener('mousedown', mousecall)

const box = document.getElementById("box-id")

box.addEventListener('click', box_function)

function box_function() {
    var desgine_web = Number(prompt("چند تا سایت میخواهی اضافه کنی"))
    alert("تعداد وبسایت شما : " + desgine_web)
    text_rope.innerHTML = desgine_web + 48
}

function mousecall() {
    call.innerHTML = document.write(`اقای ${Name}  لطفا با این شماره تماس بگیرید 09104411236`)
}