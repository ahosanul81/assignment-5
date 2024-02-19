const tickets = document.querySelectorAll('.selected-ticket')
let ticketCount = 0
let ticketLeft = 40
const maxTicketCount = []
for(const selectedTicket of tickets){
    
    selectedTicket.addEventListener('click', function selectedTicketByClass() {
        if(ticketCount === 4){
            alert('you have reached maximum')
            return
        }
        const seatNumber = selectedTicket.querySelector('h5').innerText
        const removeBgToSeatNumber = selectedTicket.classList.remove("bg-white")
        const addBgToSeatNumber = selectedTicket.classList.add("bg-green-400")
     
        // count ticket number
        ticketCount+= 1
        ticketLeft-= 1
        
        console.log(maxTicketCount);
        let maxTicket = []
 
        maxTicketCount.push(seatNumber)
        
        setInnerText('seat-count', ticketCount)
        setInnerText('ticket-left', ticketLeft)
        
       
        
        // calculation ticket price
        const PerTicketPrice = document.getElementById('per-ticket-price').innerText
        console.log(PerTicketPrice ,'ticket price');
        const ticketTable = document.getElementById('ticket-cart-table-row')
      
        const tr = document.createElement('tr')
        ticketTable.appendChild(tr)
        const td1 = document.createElement('td')
        tr.appendChild(td1)
        td1.innerText = seatNumber

        const td2 = document.createElement('td')
        tr.appendChild(td2)
        td2.innerText = 'Economy'

        const td3 = document.createElement('td')
        tr.appendChild(td3)
        td3.innerText = PerTicketPrice

        const totalTicketPrice = parseInt(PerTicketPrice) * ticketCount 
        setInnerText('grand-total', totalTicketPrice)

        // total price 
        setInnerText('total-cost', totalTicketPrice)
        

        // discount by coupon
        // discount 15%
        const applyBtn = document.getElementById('apply-btn')
        
        applyBtn.addEventListener('click', function getDiscountById() {
            let countApply = 0
            const couponInput = document.getElementById('apply-input').value
            if (couponInput === 'NEW15') {
                const Discount = (15 * totalTicketPrice) / 100
                const remainingPrice = totalTicketPrice - Discount
                setInnerText('grand-total', remainingPrice)
                countApply ++
                console.log(countApply);
                // apply section hidden after get discount
                if(countApply = 1){
                    applyBtn.classList.add("hidden")
                    const couponInputHide = document.getElementById('apply-input')
                    couponInputHide.classList.add("hidden")
                    
                }
            }

            // discount 20%
            else if (couponInput === 'Couple 20') {
                const Discount = (20 * totalTicketPrice) / 100
                const remainingPrice = totalTicketPrice - Discount
                setInnerText('grand-total', remainingPrice)
                countApply ++
                console.log(countApply);
                // apply section hidden after get discount
                if(countApply = 1){
                    applyBtn.classList.add("hidden")
                    const couponInputHide = document.getElementById('apply-input')
                    couponInputHide.classList.add("hidden")
                    
                }
            }
            else{
                alert('Please input valid coupon code')
            }
            
        })
 
        // next section 

        const nextBtn = document.getElementById('next-btn')
        nextBtn.addEventListener('click', function goToNext() {
            const modal = document.getElementById('modal')
            modal.classList.remove('hidden')

            const continueBtn = document.getElementById('Continue-btn')
            continueBtn.addEventListener('click', function returnPage() {
                modal.classList.add('hidden')
            })
            
            

        })
    })
}




// function getNextButton() {
//     const nameInput = document.getElementById('name-input').value
//     const phoneInput = document.getElementById('phone-input').value
//     const emailInput = document.getElementById('email-input').value
//     console.log(nameInput, phoneInput, emailInput);
//     if(typeof nameInput === 'string' && typeof phoneInput === 'number'){
//         const nextBtn = document.getElementById('next-btn')
//         nextBtn.attributes.remove('disabled')
//     }
// }

// common function
function setInnerText(id, value) {
    document.getElementById(id).innerText = value
}