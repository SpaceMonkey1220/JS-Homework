const vehicul = prompt("Te rog introdu tipul de vehicul").toLowerCase()
const capacitate =  parseInt(prompt("Te rog adauga capacitatea cilindrinca"))

const cm3Division = capacitate / 200

if(!capacitate){
  alert("aceasta capacitate nu exista")
  console.log("ha")
}

switch (vehicul) {
  case "motocicleta":
  case "cvadriclu":
  case "triciclu": {
    if (capacitate <= 1600) {
      alert(`${Math.floor(cm3Division * 8)} lei`)
      console.log("sub 1600")
    }
    else if (capacitate > 1600) {
      alert(`${Math.floor(cm3Division * 9)} lei`)
      console.log("Peste 1600")
    } 
    break
  }
  case "autoturism": {
    if (capacitate <= 1600) {
      alert(`${Math.floor(cm3Division * 8)} lei`)
      console.log("sub 1600 auto")
    }
    else if (capacitate > 1600 && capacitate <= 2000) {
      alert(`${Math.floor(cm3Division * 22)} lei`)
      console.log("intre 1601 si 2000 auto")
    }
    else if (capacitate > 2001 && capacitate <= 2600) {
      alert(`${Math.floor(cm3Division * 85)} lei`)
      console.log("intre 2001 si 2601 auto")
    }
    else if (capacitate > 2601 && capacitate <= 3000) {
      alert(`${Math.floor(cm3Division * 171)} lei`)
      console.log("intre 2601 si 3000 auto")
    }
    else if (capacitate > 3001) {
      alert(`${Math.floor(cm3Division * 345)} lei`)
      console.log("peste 3001 auto")
    }
    break
  }
  case "autobuz":
  case "autocar":
  case "microbuz": {
    alert(
      capacitate
        ? `${Math.floor(cm3Division * 28)} lei`
        : "Aceasta capacitate nu exista"
    )
    console.log("transport in comun")
    break
  }
  case "tractor": {
    alert(`${Math.floor(cm3Division * 22)} lei`)
    console.log("tractor")
    break
  }
  // Aici am decis sa prescurtez denumirea
  case "camion": {
    alert(`${Math.floor(cm3Division * 34)} lei`)
    console.log("camion")
    break
  }
  default: {
    alert(`${vehicul} Acest vehicul nu exista`)
  }
}