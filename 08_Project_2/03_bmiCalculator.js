const button = document.querySelector('.calculate-button')

button.addEventListener('click',function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#final-output')

    if(height<=0 || isNaN(height)){
        result.value = `Please enter a valid height`
    }else if(weight<= 0|| isNaN(weight)){
        result.value = `Please enter a valid weight`
    }else{
        const bmi = (weight/((height*height)/10000)).toFixed(2)

        if(bmi<18.6){
            result.value = `${bmi}(Under Weight)`
        }else if(bmi>=18.6&&bmi<=24.9){
            result.value = `${bmi}(Normal Weight)`
        }else{
            result.value = `${bmi}(Over Weight)`
        }
        
    }
 })