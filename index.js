let result=0;
let sel=document.getElementById("dep");
let array=[0];
sel.addEventListener('change',()=>{
    let grad=document.getElementById('grades');
    let gradeee=document.getElementById('gradesee')
    console.log(sel.value);
    array[0]=parseInt(sel.value);
    console.log(array[0]);
    if (array[0]==10){
        grad.style.display='flex';
        gradeee.style.display='none';
    }
    else if (array[0]==9){
        grad.style.display='none';
        gradeee.style.display='flex';
    }
    else{
        grad.style.display='none';
        gradeee.style.display='none';
    }
})
let s = 0;
let arr = [0, 0, 0, 0, 0, 0, 0];
let a = document.getElementById('ESO204')
a.addEventListener('change', () => {
    let p = parseInt(a.value) * 11;
    arr[0] = p
});
let b = document.getElementById('MSO202A')
b.addEventListener('change', () => {
    let q = parseInt(b.value) * 6;
    arr[1] = q
});
let c = document.getElementById('MSO203B')
c.addEventListener('change', () => {
    let r = parseInt(c.value) * 6;
    arr[2] = r;
});
let d = document.getElementById('AE201')
d.addEventListener('change', () => {
    let t = parseInt(d.value) * 5;
    arr[3] = t;
});
let e = document.getElementById('ESO209')
e.addEventListener('change', () => {
    let u = parseInt(e.value) * 8;
    arr[4] = u;
});
let f = document.getElementById('TA202')
f.addEventListener('change', () => {
    let v = parseInt(f.value) * 6;
    arr[5] = v;
});
let g = document.getElementById('HSS')
g.addEventListener('change', () => {
    let w = parseInt(g.value) * 11;
    arr[6] = w;
});
let cred;
let ae = document.getElementById('ESO')
ae.addEventListener('change', () => {
    cred = parseInt(ae.value);
});
let aee = document.getElementById('ESO grade')
aee.addEventListener('change', () => {
    let eso = parseInt(aee.value) * cred;
    arr[0] = eso;
});
let be = document.getElementById('MSO202')
be.addEventListener('change', () => {
    let mso202 = parseInt(be.value) * 6;
    arr[1] = mso202;
});
let ce = document.getElementById('MSO203')
ce.addEventListener('change', () => {
    let mso203 = parseInt(ce.value) * 6;
    arr[2] = mso203;
});
let de = document.getElementById('EE200')
de.addEventListener('change', () => {
    let ee200 = parseInt(de.value) * 11;
    arr[3] = ee200;
});
let eee = document.getElementById('ESC201')
eee.addEventListener('change', () => {
    let esc = parseInt(eee.value) * 14;
    arr[4] = esc;
});
let fe = document.getElementById('TA201')
fe.addEventListener('change', () => {
    let ta = parseInt(fe.value) * 6;
    arr[5] = ta;
});
let btn=document.getElementById("btn");
btn.addEventListener('click',function(){
    let i = 0;
    for (i = 0; i < 7; i++) {
        s = s + arr[i];
    }
    let res;
    if (array[0]==10){
        res=s/53;
    }
    if (array[0]==9){
        res=s/(cred+43);
    }
    result=res.toFixed(2);
    document.querySelector(".spi").innerHTML="Your's SPI is:- "+result;
    s=0;
})
let fincpi=0;
let bn=document.getElementById('btn1');
bn.addEventListener('click',function(){
    let prv = prompt("Please enter your previous CPI!")
    let prevcpi=parseFloat(prv);
    if(parseFloat(result)==0){
        result=prompt("Please enter your 3rd semester SPI!");
    }
    if (array[0]==10){
        console.log(prevcpi);
        fincpi=((prevcpi*98)+(parseFloat(result)*53))/151;
    }
    if (array[0]==9){
        fincpi=(prevcpi*98+(parseFloat(result)*(cred+43)))/(98+cred+43);
    }
    if (array[0]==0){
        alert("Please select your Department");
        result=0;
    }
    let final=fincpi.toFixed(2);
    document.querySelector(".cpi").innerHTML="Your's CPI is:- "+final;
})
