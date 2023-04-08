for(let i = 1 ; i <= 100 ; i++){ // tekrarlanacak islemler icin kullanilir.
    console.log(i)
    console.log(`${i} * ${i} = ${i * i }` )
}
const names = ['Ahmet','Mehmet', 'Ertan','Seval']
names.push('Aysenur') 
const names_saved = []
for (let i = 0 ; i <= names.length ; i++){ // dizi icinde dolasmak icin ve yazdirmak icin kullanilabilir
    console.log(names[i])// tek tek yazdirdik.
    //names[i].toUpperCase()// hepsini buyuk harfe cevirdik.
    names_saved.push(names[i])// bir dizinden diger dizeye yedekledik.
    console.log('kaydedildi',names_saved[i])// kontrol ettik.  
}

 let a = 0
 do{               
    console.log (a)   // bunu kullanimi kodun en az bir kez calismasi gibi bir avantaj saglar 
    a++
 }while(a<=5)

 for (const name of names){ // simdilik anlandigim tek seferde dizi donmek icin kullaniliyor.
    console.log('Ad', name)
 }

 for (let i = 0; i < names.length; i++) {
    if (i == 3) {
        console.log(names[i],'Bulundu')
        break
        console.log('kosul salandigi icin bu satir calismayacak') // bir kosula bagli olarak donguyu durdurmaya yarar  ve 
    }
    console.log('Araniyor')
    
 }
 
 for (let i = 0; i < names.length; i++) {
    if (i == 3) {
        console.log(names[i],'es gecildi')
         continue // islem yapilmak istenmeyen bir veri icin kullanilabilir 
        
    }
    console.log('Araniyor')
    
 }