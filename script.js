let temuco=document.getElementById("temuco")
temuco.addEventListener("click", function(){
    document.getElementById("temucoo").style.display="block";
    document.getElementById("puco").style.display="none";
    document.getElementById("mede").style.display="none";
    document.getElementById("brasil").style.display="none";
    document.getElementById("puertom").style.display="none";
});

let pucon=document.getElementById("Pucón")
pucon.addEventListener("click", function(){
    document.getElementById("temucoo").style.display="none";
    document.getElementById("puco").style.display="block";
    document.getElementById("mede").style.display="none";
    document.getElementById("brasil").style.display="none";
    document.getElementById("puertom").style.display="none";
});

let medel=document.getElementById("medellin")
medel.addEventListener("click", function(){
    document.getElementById("temucoo").style.display="none";
    document.getElementById("puco").style.display="none";
    document.getElementById("mede").style.display="block";
    document.getElementById("brasil").style.display="none";
    document.getElementById("puertom").style.display="none";
});

let bra=document.getElementById("brasilia")
bra.addEventListener("click", function(){
    document.getElementById("temucoo").style.display="none";
    document.getElementById("puco").style.display="none";
    document.getElementById("mede").style.display="none";
    document.getElementById("brasil").style.display="block";
    document.getElementById("puertom").style.display="none";
});

let puelto=document.getElementById("Puerto")
puelto.addEventListener("click", function(){
    document.getElementById("temucoo").style.display="none";
    document.getElementById("puco").style.display="none";
    document.getElementById("mede").style.display="none";
    document.getElementById("brasil").style.display="none";
    document.getElementById("puertom").style.display="block";
});

let boton = document.getElementById("btncok")
boton.addEventListener("click", function(){
    document.getElementById("footer").remove();
});