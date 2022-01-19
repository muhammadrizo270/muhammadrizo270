const input = document.querySelector('#date')
    timer = document.querySelector('#time')
input.addEventListener('change', timer)

function timer() {
    if (this.value !=='') {
        const countD = new Date(input.value).getTime();


        const interval = setInterval(intervalTime)

        function intervalTime() {
            const nowDate = new Date().getTime();
            const distance = countD - nowDate;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds = Math.floor((distance % (1000 * 60)) / 1000);
            timeP.innerHTML = `${days} kun ${hours} soat ${minutes} daqiqa ${seconds} sikund`
        }


    }
}