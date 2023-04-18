  // CLOSUER (IC ICE FONKSIYON KULLANMANIN TERIMSEL ADI )
  // ARASTIRMA YAPARKEN ISMINI BILMEK ITI OLUR.
  
  
  function counter() {
    let count = 0 
    function setCount() {
        count++
        return count
    }
    return setCount
  }

  let count = counter()

  console.log(count())
  console.log(count())
  console.log(count())