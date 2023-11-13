const currencyEL_one = document.getElementById('currency-one')
const amount_one = document.getElementById('amount-one')
const currencyEL_two = document.getElementById('currency-two')
const amount_two = document.getElementById('amount-two')

const rateEl = document.getElementById('rate')
const swap = document.getElementById('swap')

const API = 'https://v6.exchangerate-api.com/v6/42a6802c4f3b0f035f426be1/pair'


function calulate(){
    const currrency_ONE = currencyEL_one.value
    const currency_TWO = currencyEL_two.value
    const default_currency = amount_one.value
   fetch(`${API}/${currrency_ONE}/${currency_TWO}/${default_currency}`)
   .then(result => result.json())
   .then(value => {
    // console.log(value)
    conversion_RATE = value.conversion_rate
    conversion_RESULT = value.conversion_result
    console.log({conversion_RESULT})
    rateEl.innerText = `1 ${currrency_ONE} = ${conversion_RATE} ${currency_TWO}`
    amount_two.value = conversion_RESULT
}
)

}


currencyEL_one.addEventListener('change',calulate);
amount_one.addEventListener('input', calulate);
currencyEL_two.addEventListener('change', calulate);
amount_two.addEventListener('input', calulate);

swap.addEventListener('click', () => {
    const temp = currencyEL_one.value
    currencyEL_one.value = currencyEL_two.value
    currencyEL_two.value = temp
    calulate()
})

// calulate()


