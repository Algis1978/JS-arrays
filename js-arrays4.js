// Išspausdinti mokinio vardą ir pažymį, kuris turi prasčiausią pažymį.
// Išspausdinti mokinio vardą ir pažymį, kuris turi geriausią pažymį.
// Išspausdinti mokinio vardą ir pažymiu vidurkį, kuris turi prasciausią pažymių vidurkį.
// Išspausdinti mokinio vardą ir pažymiu vidurkį, kuris turi geriausią pažymių vidurkį.
// Išspausdinti mokinio vardą, jei jis turi pažymį 8.
// Išspausdinti mokinio vardą, jei jis neturi pažymio 7.
// PASTABA: jei kazkurį reikalavimą atitinka daugiau nei vienas mokinys, spausdinti visus.
document.write ("<h3>Duomenų masyvas IV (bonus masyvas):</h3>const data = [<br>{name: 'Tomas', marks: [1, 1, 1, 1]},<br>{name: 'Ieva', marks: [1, 1, 1]}<br>{name: 'Pranas', marks: [10, 10, 10]},<br>{name: 'Daiva', marks: [10, 10, 10, 10]},<br>]</p><h3>Rezultatai:</h3>");


// const data = [
//     {name: 'Tomas', marks: [10, "2a", 8, 4, 6]},
//     {name: 'Ieva', marks: [3, 7, 9, true]},
//     {name: 'Pranas', marks: [7, -7, 7]},
//     {name: 'Daiva', marks: [Infinity, 9, 8, , 6]},
//     {name: 'Aurelija', marks: [12, null, 8, 7, 6]},
// ]
const data = [
    {name: 'Tomas', marks: [1, 1, 1, 1]},
    {name: 'Ieva', marks: [1, 1, 1]},
    {name: 'Pranas', marks: [10, 10, 10]},
    {name: 'Daiva', marks: [10, 10, 10, 10]},
]
function rastiNeteisingusDuomenis (data){
    document.write ("<br>1. Duomenys teisingi, jei žemiau nenurodyta kitaip.<br><small>(Pvz.:<i>Neteisingi duomenys: </i>Vardas, pažymys;<br>Ištaisykite neteisingus duomenis, kitaip sekančios funkcijos pateiks klaidingus duomenis arba jų nepateiks).</small>")
    for (let i=0; i<data.length; i=i+1){
        for (let j=0; j<data[i].marks.length; j=j+1) {
            if (Number.isInteger(data[i].marks[j]) === false || data[i].marks[j]<1 || data[i].marks[j]>10) {
            document.write ("<br><i>Neteisingi duomenys: </i>"+data[i].name+", "+data[i].marks[j]+";");
            }
        }    
    }
}
function rastiZemiausiaPazymi (data) {
    let zemiausiasPazymys = 10;
    for (let i=0; i<data.length; i=i+1){
        for (let j=0; j<data[i].marks.length; j=j+1){
            if (data[i].marks[j]<zemiausiasPazymys) {
            zemiausiasPazymys=data[i].marks[j]
            }
        }
    }
    return zemiausiasPazymys
}

function rastiMokiniSuZemiausiuPazymiu (data){
    document.write ("<br>2. Mokinys(-iai) su mažiausiu pažymiu "+rastiZemiausiaPazymi (data)+":");
    for (let i=0; i<data.length; i=i+1){
        for (let j=0; j<data[i].marks.length; j=j+1) {
            if (data[i].marks[j] === rastiZemiausiaPazymi (data)){
                document.write ("<br><em>"+data[i].name+";</em>")
                break;
            }
        }    
    }
}
function rastiAuksciausiaPazymi (data) {
    let auksciausiasPazymys = 1;
    for (let i=0; i<data.length; i=i+1){
        for (let j=0; j<data[i].marks.length; j=j+1){
            if (data[i].marks[j]>auksciausiasPazymys) {
            auksciausiasPazymys=data[i].marks[j]
            }
        }
    }
    return auksciausiasPazymys
}

function rastiMokiniSuAuksciausiuPazymiu (data){
    document.write ("<br>3. Mokinys(-iai) su aukščiausiu pažymiu "+rastiAuksciausiaPazymi (data)+":");
    for (let i=0; i<data.length; i=i+1){
        for (let j=0; j<data[i].marks.length; j=j+1) {
            if (data[i].marks[j] === rastiAuksciausiaPazymi (data)){
                document.write ("<br><em>"+data[i].name+";</em>")
                break;
            }
        }    
    }
}
function rastiMokiniSuZemiausiuPazymiuVidurkiu (data) {
    let zemiausiasVidurkis=10;
    let suma = 0;
    let vidurkis;
    for (let i=0; i<data.length; i=i+1){
        suma = 0; 
        for (let j=0; j<data[i].marks.length; j=j+1){
            suma +=data[i].marks[j];
        }   
        vidurkis = suma/data[i].marks.length;      
        if (vidurkis<zemiausiasVidurkis){
            zemiausiasVidurkis = vidurkis;
        }
    }
    document.write ("<br>4. Mokinys(-iai) su mažiausiu pažymių vidurkiu: ");
    for (let i=0; i<data.length; i=i+1){
        suma = 0; 
        for (let j=0; j<data[i].marks.length; j=j+1){
            suma +=data[i].marks[j];
        }
        vidurkis = suma/data[i].marks.length;   
        console.log (vidurkis);
        if (vidurkis===zemiausiasVidurkis) {
            document.write ("<br><em>"+data[i].name+" (vidurkis "+zemiausiasVidurkis.toFixed (2)+");</em>")
        }
    }
    return zemiausiasVidurkis    
}
function rastiMokiniSuAuksciausiuPazymiuVidurkiu (data) {
    let auksciausiasVidurkis=1;
    let suma = 0;
    let vidurkis;
    for (let i=0; i<data.length; i=i+1){
        suma = 0; 
        for (let j=0; j<data[i].marks.length; j=j+1){
            suma +=data[i].marks[j];
        }   
        vidurkis = suma/data[i].marks.length;      
        if (vidurkis>auksciausiasVidurkis){
            auksciausiasVidurkis = vidurkis;
        }
    }
    document.write ("<br>5. Mokinys(-iai) su aukščiausiu pažymių vidurkiu: ");
    for (let i=0; i<data.length; i=i+1){
        suma = 0; 
        for (let j=0; j<data[i].marks.length; j=j+1){
            suma +=data[i].marks[j];
        }
        vidurkis = suma/data[i].marks.length;   
        console.log (vidurkis);
        if (vidurkis===auksciausiasVidurkis) {
            document.write ("<br><em>"+data[i].name+" (vidurkis "+auksciausiasVidurkis.toFixed (2)+");</em>")
        }
    }
    return auksciausiasVidurkis    
}

// console.log (rastiZemiausiaPazymiuVidurki (data1));
// function rastiMokiniSuZemiausiuPazymiuVidurkiu (data){
//     document.write ("<br>4. Mokinys(-iai) su mažiausiu pažymių vidurkiu "+rastiZemiausiaPazymiuVidurki (data)+":");
//     for (let i=0; i<data.length; i=i+1){

//     }
// }
function rastiMokiniSuPazymiu8 (data) {
    document.write ("<br>6. Mokinys(-iai) su pažymiu 8:");
    for (let i=0; i<data.length; i=i+1){
        for (let j=0; j<data[i].marks.length; j=j+1) {
            if (data[i].marks[j] === 8){
                document.write ("<br><em>"+data[i].name+";</em>")
                break;
            }
        }    
    }
}
function rastiMokiniBePazymio7 (data){
    document.write ("<br>7. Mokinys(-iai) be pažymio 7:");
    for (let i=0; i<data.length; i=i+1){
        if (data[i].marks.indexOf(7) === -1) {
            document.write ("<br><em>"+data[i].name+";</em>");
        }    
    }
}
rastiNeteisingusDuomenis (data);
rastiMokiniSuZemiausiuPazymiu (data);
rastiMokiniSuAuksciausiuPazymiu (data);
rastiMokiniSuZemiausiuPazymiuVidurkiu (data);
rastiMokiniSuAuksciausiuPazymiuVidurkiu (data);
rastiMokiniSuPazymiu8 (data);
rastiMokiniBePazymio7 (data);