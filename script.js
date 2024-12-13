const calBtn = document.getElementById('calculate')
calBtn.addEventListener('click', function() {
    const weight = parseFloat(document.getElementById('weight').value)
    const planet = parseFloat(document.getElementById('planet').value)
    const result = document.getElementById('result')

    if(isNaN(weight)) {
        result.innerHTML = "Please Enter Correct Weight !!!";
        return result
    }

    if(weight === 0) {
        result.innerHTML = "0 !!! Eat Something ... ";
        return result
    }

   const planetaryWeight =  (weight * planet).toFixed(2)
   return result.innerHTML = `Your Weight Selected Planet is ${planetaryWeight} kg`
})