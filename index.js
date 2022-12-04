let result=0;
// Branch subject Visibility
let sel=document.getElementById("dep");
let array=[0];
sel.addEventListener('change',()=>{
    let grad=document.getElementById('grades');
    let gradeee=document.getElementById('gradesee')
    let grademe=document.getElementById('gradesme')
    let gradece=document.getElementById('gradesce')
    let grademse=document.getElementById('gradesmse')
    let gradecse=document.getElementById('gradescse')
    let gradeche=document.getElementById('gradesche')
    let gradebse=document.getElementById('gradesbse')
    let gradesds=document.getElementById('gradessds')
    let grademnc=document.getElementById('gradesmnc')
    let gradephy=document.getElementById('gradesphy')
    console.log(sel.value);
    array[0]=parseInt(sel.value);
    console.log(array[0]);
    if (array[0]==10){
        grad.style.display='flex';
        gradeee.style.display='none';
        grademe.style.display='none';
        gradece.style.display='none';
        grademse.style.display='none';
        gradecse.style.display='none';
        gradeche.style.display='none';
        gradebse.style.display='none';
        gradesds.style.display='none';
        grademnc.style.display='none';
        gradephy.style.display='none';
    }
    else if (array[0]==9){
        grad.style.display='none';
        gradeee.style.display='flex';
        grademe.style.display='none';
        gradece.style.display='none';
        grademse.style.display='none';
        gradecse.style.display='none';
        gradeche.style.display='none';
        gradebse.style.display='none';
        gradesds.style.display='none';
        grademnc.style.display='none';
        gradephy.style.display='none';
    }
    else if (array[0]==8){
        grad.style.display='none';
        gradeee.style.display='none';
        grademe.style.display='flex';
        gradece.style.display='none';
        grademse.style.display='none';
        gradecse.style.display='none';
        gradeche.style.display='none';
        gradebse.style.display='none';
        gradesds.style.display='none';
        grademnc.style.display='none';
        gradephy.style.display='none';
    }
    else if (array[0]==7){
        gradece.style.display='flex';
        grad.style.display='none';
        gradeee.style.display='none';
        grademe.style.display='none';
        grademse.style.display='none';
        gradecse.style.display='none';
        gradeche.style.display='none';
        gradebse.style.display='none';
        gradesds.style.display='none';
        grademnc.style.display='none';
        gradephy.style.display='none';
    }
    else if (array[0]==6){
        gradece.style.display='none';
        grad.style.display='none';
        gradeee.style.display='none';
        grademe.style.display='none';
        grademse.style.display='flex';
        gradecse.style.display='none';
        gradeche.style.display='none';
        gradebse.style.display='none';
        gradesds.style.display='none';
        grademnc.style.display='none';
        gradephy.style.display='none';
    }
    else if (array[0]==5){
        gradece.style.display='none';
        grad.style.display='none';
        gradeee.style.display='none';
        grademe.style.display='none';
        grademse.style.display='none';
        gradecse.style.display='flex';
        gradeche.style.display='none';
        gradebse.style.display='none';
        gradesds.style.display='none';
        grademnc.style.display='none';
        gradephy.style.display='none';
    }
    else if (array[0]==4){
        gradece.style.display='none';
        grad.style.display='none';
        gradeee.style.display='none';
        grademe.style.display='none';
        grademse.style.display='none';
        gradecse.style.display='none';
        gradeche.style.display='flex';
        gradebse.style.display='none';
        gradesds.style.display='none';
        grademnc.style.display='none';
        gradephy.style.display='none';
    }
    else if (array[0]==3){
        gradece.style.display='none';
        grad.style.display='none';
        gradeee.style.display='none';
        grademe.style.display='none';
        grademse.style.display='none';
        gradecse.style.display='none';
        gradeche.style.display='none';
        gradebse.style.display='flex';
        gradesds.style.display='none';
        grademnc.style.display='none';
        gradephy.style.display='none';
    }
    else if (array[0]==2){
        gradece.style.display='none';
        grad.style.display='none';
        gradeee.style.display='none';
        grademe.style.display='none';
        grademse.style.display='none';
        gradecse.style.display='none';
        gradeche.style.display='none';
        gradebse.style.display='none';
        gradesds.style.display='flex';
        grademnc.style.display='none';
        gradephy.style.display='none';
    }
    else if (array[0]==1){
        gradece.style.display='none';
        grad.style.display='none';
        gradeee.style.display='none';
        grademe.style.display='none';
        grademse.style.display='none';
        gradecse.style.display='none';
        gradeche.style.display='none';
        gradebse.style.display='none';
        gradesds.style.display='none';
        grademnc.style.display='flex';
        gradephy.style.display='none';
    }
    else if (array[0]==11){
        gradece.style.display='none';
        grad.style.display='none';
        gradeee.style.display='none';
        grademe.style.display='none';
        grademse.style.display='none';
        gradecse.style.display='none';
        gradeche.style.display='none';
        gradebse.style.display='none';
        gradesds.style.display='none';
        grademnc.style.display='none';
        gradephy.style.display='flex';
    }
    else{
        grad.style.display='none';
        gradeee.style.display='none';
        grademe.style.display='none';
        gradece.style.display='none';
        grademse.style.display='none';
        gradecse.style.display='none';
        gradeche.style.display='none';
        gradebse.style.display='none';
        gradesds.style.display='none';
        grademnc.style.display='none';
        gradephy.style.display='none';
    }
})
let s = 0;
let arr = [0, 0, 0, 0, 0, 0, 0];
// AE
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
// EE
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
// ME
let aME=document.getElementById('ESC201ME')
aME.addEventListener('change', () => {
    let pme = parseInt(aME.value) * 14;
    arr[0] = pme
});
let bME = document.getElementById('MSO202ME')
bME.addEventListener('change', () => {
    let qme = parseInt(bME.value) * 6;
    arr[1] = qme;
});
let cME = document.getElementById('MSO203ME')
cME.addEventListener('change', () => {
    let rme = parseInt(cME.value) * 6;
    arr[2] = rme;
});
let dME = document.getElementById('ESO201ME')
dME.addEventListener('change', () => {
    let tme = parseInt(dME.value) * 11;
    arr[3] = tme;
});
let eME = document.getElementById('ESO209ME')
eME.addEventListener('change', () => {
    let ume = parseInt(eME.value) * 8;
    arr[4] = ume;
});
let fME = document.getElementById('TA201ME')
fME.addEventListener('change', () => {
    let vme = parseInt(fME.value) * 6;
    arr[5] = vme;
});
let gME = document.getElementById('ME251ME')
gME.addEventListener('change', () => {
    let wme = parseInt(gME.value) * 5;
    arr[6] = wme;
});
// CE
let aCE=document.getElementById('ESO204CE')
aCE.addEventListener('change', () => {
    let pce = parseInt(aCE.value) * 11;
    arr[0] = pce
});
let bCE = document.getElementById('CE241CE')
bCE.addEventListener('change', () => {
    let qce = parseInt(bCE.value) * 9;
    arr[1] = qce;
});
let cCE = document.getElementById('MSO203CE')
cCE.addEventListener('change', () => {
    let rce = parseInt(cCE.value) * 6;
    arr[2] = rce;
});
let dCE = document.getElementById('ESO202CE')
dCE.addEventListener('change', () => {
    let tce = parseInt(dCE.value) * 11;
    arr[3] = tce;
});
let fCE = document.getElementById('TA202CE')
fCE.addEventListener('change', () => {
    let vce = parseInt(fCE.value) * 6;
    arr[5] = vce;
});
let gCE = document.getElementById('HSSCE')
gCE.addEventListener('change', () => {
    let wce = parseInt(gCE.value) * 11;
    arr[6] = wce;
});
// MSE
let aMSE=document.getElementById('ESO205MSE')
aMSE.addEventListener('change', () => {
    let pmse = parseInt(aMSE.value) * 14;
    arr[0] = pmse
});
let bMSE = document.getElementById('MSE201MSE')
bMSE.addEventListener('change', () => {
    let qmse = parseInt(bMSE.value) * 11;
    arr[1] = qmse;
});
let cMSE = document.getElementById('MSO203MSE')
cMSE.addEventListener('change', () => {
    let rmse = parseInt(cMSE.value) * 6;
    arr[2] = rmse;
});
let dMSE = document.getElementById('ESO202MSE')
dMSE.addEventListener('change', () => {
    let tmse = parseInt(dMSE.value) * 11;
    arr[3] = tmse;
});
let fMSE = document.getElementById('TA202MSE')
fMSE.addEventListener('change', () => {
    let vmse = parseInt(fMSE.value) * 6;
    arr[5] = vmse;
});
let gMSE = document.getElementById('HSSMSE')
gMSE.addEventListener('change', () => {
    let wmse = parseInt(gMSE.value) * 11;
    arr[6] = wmse;
});
// CSE
let credcs;
let aCSE= document.getElementById('ESOCSE')
aCSE.addEventListener('change', () => {
    credcs = parseInt(aCSE.value);
});
let aCSEg = document.getElementById('ESO grade CSE')
aCSEg.addEventListener('change', () => {
    let esocse = parseInt(aCSEg.value) * credcs;
    arr[0] = esocse;
});
let bCSE = document.getElementById('ESO207CSE')
bCSE.addEventListener('change', () => {
    let eso207cse = parseInt(bCSE.value) * 12;
    arr[1] = eso207cse;
});
let cCSE = document.getElementById('CS201CSE')
cCSE.addEventListener('change', () => {
    let cs201cse = parseInt(cCSE.value) * 9;
    arr[2] = cs201cse;
});
let eCSE = document.getElementById('ESC201CSE')
eCSE.addEventListener('change', () => {
    let esccse = parseInt(eCSE.value) * 14;
    arr[4] = esccse;
});
let fCSE = document.getElementById('TA201CSE')
fCSE.addEventListener('change', () => {
    let tcse = parseInt(fCSE.value) * 6;
    arr[5] = tcse;
});
// CHE
let aCHE=document.getElementById('ESO201CHE')
aCHE.addEventListener('change', () => {
    let pche = parseInt(aCHE.value) * 11;
    arr[0] = pche
});
let bCHE = document.getElementById('CHE251CHE')
bCHE.addEventListener('change', () => {
    let qche = parseInt(bCHE.value) * 9;
    arr[1] = qche;
});
let dCHE = document.getElementById('ESO208CHE')
dCHE.addEventListener('change', () => {
    let tche = parseInt(dCHE.value) * 11;
    arr[3] = tche;
});
let fCHE = document.getElementById('TA202CHE')
fCHE.addEventListener('change', () => {
    let vche = parseInt(fCHE.value) * 6;
    arr[5] = vche;
});
let gCHE = document.getElementById('HSSCHE')
gCHE.addEventListener('change', () => {
    let wche = parseInt(gCHE.value) * 11;
    arr[6] = wche;
});
// BSE
let credbs;
let aBSE= document.getElementById('ESOBSE')
aBSE.addEventListener('change', () => {
    credbs = parseInt(aBSE.value);
});
let aBSEg = document.getElementById('ESO grade BSE')
aBSEg.addEventListener('change', () => {
    let esobse = parseInt(aBSEg.value) * credbs;
    arr[0] = esobse;
});
let bBSE = document.getElementById('ESO206BSE')
bBSE.addEventListener('change', () => {
    let eso206bse = parseInt(bBSE.value) * 9;
    arr[1] = eso206bse;
});
let cBSE = document.getElementById('BSE211BSE')
cBSE.addEventListener('change', () => {
    let bs211bse = parseInt(cBSE.value) * 9;
    arr[2] = bs211bse;
});
let eBSE = document.getElementById('ESC201BSE')
eBSE.addEventListener('change', () => {
    let escbse = parseInt(eBSE.value) * 14;
    arr[4] = escbse;
});
let fBSE = document.getElementById('TA201BSE')
fBSE.addEventListener('change', () => {
    let tbse = parseInt(fBSE.value) * 6;
    arr[5] = tbse;
});
// SDS
let aSDS = document.getElementById('MTH301SDS')
aSDS.addEventListener('change', () => {
    let psds = parseInt(aSDS.value) * 11;
    arr[0] = psds
});
let bSDS = document.getElementById('MSO202SDS')
bSDS.addEventListener('change', () => {
    let qsds = parseInt(bSDS.value) * 6;
    arr[1] = qsds
});
let cSDS = document.getElementById('MSO205SDS')
cSDS.addEventListener('change', () => {
    let rsds = parseInt(cSDS.value) * 11;
    arr[2] = rsds;
});
let dSDS = document.getElementById('MTH207SDS')
dSDS.addEventListener('change', () => {
    let tsds = parseInt(dSDS.value) * 6;
    arr[3] = tsds;
});
let eSDS = document.getElementById('MTH208SDS')
eSDS.addEventListener('change', () => {
    let usds = parseInt(eSDS.value) * 5;
    arr[4] = usds;
});
let fSDS = document.getElementById('TA201SDS')
fSDS.addEventListener('change', () => {
    let vsds = parseInt(fSDS.value) * 6;
    arr[5] = vsds;
});
let gSDS = document.getElementById('ESC201SDS')
gSDS.addEventListener('change', () => {
    let wsds = parseInt(gSDS.value) * 14;
    arr[6] = wsds;
});
// MNC
let credmnc;
let aMNC = document.getElementById('ESOMNC')
aMNC.addEventListener('change', () => {
    credmnc = parseInt(aMNC.value);
});
let aMNCg = document.getElementById('ESO grade MNC')
aMNCg.addEventListener('change', () => {
    let esomnc = parseInt(aMNCg.value) * credmnc;
    arr[0] = esomnc;
});
let bMNC = document.getElementById('MTH201MNC')
bMNC.addEventListener('change', () => {
    let mth201mnc = parseInt(bMNC.value) * 11;
    arr[1] = mth201mnc;
});
let cMNC = document.getElementById('MTH302MNC')
cMNC.addEventListener('change', () => {
    let mth302mnc = parseInt(cMNC.value) * 11;
    arr[2] = mth302mnc;
});
let eMNC = document.getElementById('ESC201MNC')
eMNC.addEventListener('change', () => {
    let escmnc = parseInt(eMNC.value) * 14;
    arr[4] = escmnc;
});
let fMNC = document.getElementById('TA201MNC')
fMNC.addEventListener('change', () => {
    let tamnc = parseInt(fMNC.value) * 6;
    arr[5] = tamnc;
});
// PHY
let credphy;
let aPHY = document.getElementById('ESO-1')
aPHY.addEventListener('change', () => {
    credphy = parseInt(aPHY.value);
});
let aPH = document.getElementById('ESO grade-1')
aPH.addEventListener('change', () => {
    let esoph = parseInt(aPH.value) * credphy;
    arr[0] = esoph;
});
let credphy2;
let aPHY2 = document.getElementById('ESO-2')
aPHY2.addEventListener('change', () => {
    credphy2 = parseInt(aPHY2.value);
});
let aPH2 = document.getElementById('ESO grade-2')
aPH2.addEventListener('change', () => {
    let esoph2 = parseInt(aPH2.value) * credphy2;
    arr[1] = esoph2;
});
let dPH = document.getElementById('PHY224PHY')
dPH.addEventListener('change', () => {
    let phy224ph = parseInt(dPH.value) * 12;
    arr[3] = phy224ph;
});
let ePH = document.getElementById('HSSPHY')
ePH.addEventListener('change', () => {
    let hssph = parseInt(ePH.value) * 11;
    arr[4] = hssph;
});
let fPH = document.getElementById('TA202PHY')
fPH.addEventListener('change', () => {
    let taph = parseInt(fPH.value) * 6;
    arr[5] = taph;
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
    if (array[0]==8){
        res=s/56;
    }
    if (array[0]==7){
        res=s/54;
    }
    if (array[0]==6){
        res=s/59;
    }
    if (array[0]==5){
        res=s/(credcs+41);
    }
    if (array[0]==4){
        res=s/48;
    }
    if (array[0]==3){
        res=s/(credbs+38);
    }
    if (array[0]==2){
        res=s/59;
    }
    if (array[0]==1){
        res=s/(credmnc+42);
    }
    if (array[0]==11){
        res=s/(credphy+credphy2+29);
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
    if (array[0]==8){
        console.log(prevcpi);
        fincpi=((prevcpi*98)+(parseFloat(result)*56))/154;
    }
    if (array[0]==7){
        console.log(prevcpi);
        fincpi=((prevcpi*98)+(parseFloat(result)*54))/152;
    }
    if (array[0]==6){
        console.log(prevcpi);
        fincpi=((prevcpi*98)+(parseFloat(result)*59))/157;
    }
    if (array[0]==5){
        fincpi=(prevcpi*98+(parseFloat(result)*(credcs+41)))/(98+credcs+41);
    }
    if (array[0]==4){
        console.log(prevcpi);
        fincpi=((prevcpi*98)+(parseFloat(result)*48))/146;
    }
    if (array[0]==3){
        fincpi=(prevcpi*98+(parseFloat(result)*(credbs+38)))/(98+credbs+38);
    }
    if (array[0]==2){
        console.log(prevcpi);
        fincpi=((prevcpi*98)+(parseFloat(result)*59))/157;
    }
    if (array[0]==1){
        fincpi=(prevcpi*98+(parseFloat(result)*(credmnc+42)))/(98+credmnc+42);
    }
    if (array[0]==11){
        fincpi=(prevcpi*98+(parseFloat(result)*(credphy+credphy2+29)))/(98+credphy+credphy2+29);
    }
    if (array[0]==0){
        alert("Please select your Department");
        result=0;
    }
    let final=fincpi.toFixed(2);
    document.querySelector(".cpi").innerHTML="Your's CPI is:- "+final;
})
