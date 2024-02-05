import mobile from './miniproject.json' assert {type:'json'};
for(var i=0;i<mobile.length;i++){
    const card = ` <div class="mobile">
    <div class="image">
    <img src= ${mobile[i].product_img} alt="mi mobile">
    </div>
<div class="mobile_name">
    <h4>Mi Mix 2 (Black, 128 GB)</h4>
</div>
    <div class="ratings">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <p>(9,303)</p>
    </div>
   
    <div class="price">
        <h3>$129.99</h3>
        <p>$149.99</p>
        <h4>30% off</h4>
    </div>

</div>
</div>`
document.getElementById("mobile2").innerHTML+=card;
}