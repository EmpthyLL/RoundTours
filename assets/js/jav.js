const shopingIndex = []
const reviews = document.querySelectorAll('.reviews')
reviews.forEach(rev => {
    $($($(rev).prev()).prev()).removeClass('bg-info')
    $($($(rev).prev()).prev()).removeClass('bg-danger')
    $($($(rev).prev()).prev()).removeClass('bg-success')
    $($($(rev).prev()).prev()).removeClass('bg-warning')
    const randi = Math.floor((Math.random() * 30) + 0)
    $(rev).html(`${randi} reviews`)
    const re = ((Math.random() * 4) + 1).toFixed(1)
    if(randi >= 1){
        $($($(rev).prev()).prev()).html(re)
    }
    else{
        $($($(rev).prev()).prev()).html(0)
    }
    const avg = $($($(rev).prev()).prev()).html()
    statChecker(avg,rev)
})
function statChecker(avg,rev=''){
    if(avg == 0){
        $($(rev).prev()).html('No Reviews')
        $($($(rev).prev()).prev()).addClass('bg-secondary')
        return ['secondary','No Reviews']
    }
    else if(avg >= 1 && avg <= 2){
        $($(rev).prev()).html('Garbage')
        $($($(rev).prev()).prev()).addClass('bg-danger')
        return ['danger','Garbage']
    }
    else if(avg > 2 && avg <= 3){
        $($(rev).prev()).html('Bad')
        $($($(rev).prev()).prev()).addClass('bg-danger')
        return ['danger','Bad']
    }
    else if(avg > 3 && avg <= 4){
        $($(rev).prev()).html('Mediocre')
        $($($(rev).prev()).prev()).addClass('bg-warning')
        return ['warning','Mediocre']
    }
    else if(avg > 4 && avg <= 4.5){
        $($(rev).prev()).html('Good')
        $($($(rev).prev()).prev()).addClass('bg-success')
        return ['success','Good']
    }
    else if(avg > 4.5 && avg <= 5){
        $($(rev).prev()).html('Exceptional')
        $($($(rev).prev()).prev()).addClass('bg-info')
        return ['info','Exceptional']
    }
}
function changeCurrent(prev,current){
    const price = document.querySelectorAll('.price')
    if(prev =='USD' && current == 'EUR'){
        price.forEach(prc =>{
            const harga = ($(prc).html()).slice(3)
            $(prc).html(`EUR€${Math.ceil(harga*0.93).toLocaleString()}`)
        })
    }
    else if(prev =='USD' && current == 'IDR'){
        price.forEach(prc =>{
            const harga = ($(prc).html()).slice(3)
            $(prc).html(`IDR${Math.ceil(harga*16322.50).toLocaleString()}`)
        })
    }
    else if(prev =='EUR' && current == 'USD'){
        price.forEach(prc =>{
            const harga = ($(prc).html()).slice(4)
            $(prc).html(`US$${Math.ceil(harga*1.08).toLocaleString()}`)
        })
    }
    else if(prev =='EUR' && current == 'IDR'){
        price.forEach(prc =>{
            const harga = ($(prc).html()).slice(4)
            $(prc).html(`IDR${Math.ceil(harga*17554.80).toLocaleString()}`)
        })
    }
    else if(prev =='IDR' && current == 'USD'){
        price.forEach(prc =>{
            const harga = (($(prc).html()).slice(3)).split(',').join('')
            $(prc).html(`US$${Math.ceil(harga*0.000061).toLocaleString()}`)
        })
    }
    else if(prev =='IDR' && current == 'EUR'){
        price.forEach(prc =>{
            const harga = (($(prc).html()).slice(3)).split(',').join('')
            $(prc).html(`EUR€${Math.ceil(harga*0.00005696).toLocaleString()}`)
        })
    }
}
function changeCurrentOnly(prev,current,value){
    if(prev =='USD' && current == 'EUR'){
        return Math.ceil(value*0.93)
    }
    else if(prev =='USD' && current == 'IDR'){
        return Math.ceil(value*16322.50)
    }
    else if(prev =='EUR' && current == 'USD'){
        return Math.ceil(value*1.08)
    }
    else if(prev =='EUR' && current == 'IDR'){
        return Math.ceil(value*17554.80)
    }
    else if(prev =='IDR' && current == 'USD'){
        return Math.ceil(value*0.000061)
    }
    else if(prev =='IDR' && current == 'EUR'){
        return Math.ceil(value*0.00005696)
    }
}
function filterByCate(category){
    const all = document.querySelectorAll('.shopCard')
    if(category == 'show all'){    
        all.forEach(card =>{
            $(card).removeClass('unselected')
        })
    }
    else{
        all.forEach(card =>{
            $(card).removeClass('unselected')
        })
        all.forEach(card =>{
            if($(card).data('category') != category){
                $(card).addClass('unselected')
            }
        })
    }
}
function filterByRate(Rate){
    const all = document.querySelectorAll('.shopCard')
    if(Rate == 'all'){    
        all.forEach(card =>{
            $(card).removeClass('unselected-rate')
        })
    }
    else{
        all.forEach(card =>{
            $(card).removeClass('unselected-rate')
        })
        all.forEach(card =>{
            const theRate = ($($($($($($(card).children()).children()[1]).children()[2]).children()[0]).children()[0]).html())
            if(theRate < Rate){
                $(card).addClass('unselected-rate')
            }
        })
    }
}
function addToChart(){
    let sideChart = ''
    shopingIndex.forEach((key,index) => {
        const children = $($(granny[key]).children()[1]).children()
        sideChart += `
        <div class="bookcard ${darkModeOn ? 'dark-mode' : ''}">
                <img src="assets/images/recommended/offers${key+1 >= 10 ? key+1 : "0" + (key+1)}.png" data-index="${key}" data-key="${index}" data-bs-dismiss="offcanvas" class="img-fluid mx-auto d-block ${darkModeOn ? 'dark-mode' : ''} productim" alt="product picture" data-starting='${$(children[3]).html()}' data-currentin='${currentCurrency}'/>
                <div class="bookdec ${darkModeOn ? 'dark-mode' : ''}">
                    <div class="prodprof ${darkModeOn ? 'dark-mode' : ''}">
                        <h2 class="fs-6 mt-4 fw-bold ${darkModeOn ? 'dark-mode' : ''}">${$(children[0]).html()}</h2>
                        <p class="mb-0 theme-text-accent-one ${darkModeOn ? 'dark-mode' : ''}">Starting from ${$(children[3]).html()}</p>
                    </div>
                    <a href="#" class='linkremove ${darkModeOn ? 'dark-mode' : ''}' data-key=${index}><i class="bi bi-trash bookremove ${darkModeOn ? 'dark-mode' : ''}"></i></a>
                </div>
            </div>`
    })
    $('.shoping-cart').html(sideChart)
    $('.notif').removeClass('aktif')
}
function ratingHandler(rateData){
    let rate = ''
    if(rateData == 0){
        rate = `
            <i class="bi bi-star bintang" data-rateVal=1></i>
            <i class="bi bi-star bintang" data-rateVal=2></i>
            <i class="bi bi-star bintang" data-rateVal=3></i>
            <i class="bi bi-star bintang" data-rateVal=4></i>
            <i class="bi bi-star bintang" data-rateVal=5></i>
        `
        $('.rating').html(rate)
    }
    else if(rateData == 1){
        rate = `
            <i class="bi bi-star-fill bintang" data-rateVal=1></i>
            <i class="bi bi-star bintang" data-rateVal=2></i>
            <i class="bi bi-star bintang" data-rateVal=3></i>
            <i class="bi bi-star bintang" data-rateVal=4></i>
            <i class="bi bi-star bintang" data-rateVal=5></i>
        `
        $('.rating').html(rate)
    }
    else if(rateData == 2){
        rate = `
            <i class="bi bi-star-fill bintang" data-rateVal=1></i>
            <i class="bi bi-star-fill bintang" data-rateVal=2></i>
            <i class="bi bi-star bintang" data-rateVal=3></i>
            <i class="bi bi-star bintang" data-rateVal=4></i>
            <i class="bi bi-star bintang" data-rateVal=5></i>
        `
        $('.rating').html(rate)
    }
    else if(rateData == 3){
        rate = `
            <i class="bi bi-star-fill bintang" data-rateVal=1></i>
            <i class="bi bi-star-fill bintang" data-rateVal=2></i>
            <i class="bi bi-star-fill bintang" data-rateVal=3></i>
            <i class="bi bi-star bintang" data-rateVal=4></i>
            <i class="bi bi-star bintang" data-rateVal=5></i>
        `
        $('.rating').html(rate)
    }
    else if(rateData == 4){
        rate = `
            <i class="bi bi-star-fill bintang" data-rateVal=1></i>
            <i class="bi bi-star-fill bintang" data-rateVal=2></i>
            <i class="bi bi-star-fill bintang" data-rateVal=3></i>
            <i class="bi bi-star-fill bintang" data-rateVal=4></i>
            <i class="bi bi-star bintang" data-rateVal=5></i>
        `
        $('.rating').html(rate)
    }
    else if(rateData == 5){
        rate = `
            <i class="bi bi-star-fill bintang" data-rateVal=1></i>
            <i class="bi bi-star-fill bintang" data-rateVal=2></i>
            <i class="bi bi-star-fill bintang" data-rateVal=3></i>
            <i class="bi bi-star-fill bintang" data-rateVal=4></i>
            <i class="bi bi-star-fill bintang" data-rateVal=5></i>
        `
        $('.rating').html(rate)
    }
    return rate
}
function addRating(index,currentRate){
    const children = $($($(granny[index]).children()[1]).children()[2]).children()
    const revioli = $($('.reviosa')).children()
    const reviews = (($($($('.reviosa')).children()[2]).html()).split(' '))[0]
    const rate = Math.round(($(revioli[0]).html() * reviews + currentRate) / (parseInt(reviews) + 1) * 10) / 10
    let [bgcolor,status] = statChecker(rate)
    const updateRateModal = `
        <span class="p-1 rounded-1 bg-${bgcolor} theme-text-white">${(rate).toFixed(1)}</span>
        <span class="me-2 theme-text-accent-one">${status}</span>
        <span>${(parseInt(reviews) + 1)} reviews</span>
    `
    $('.reviosa').html(updateRateModal)
    const updateRate = `
        <span class="p-1 small rounded-1 bg-${bgcolor} theme-text-white">${(rate).toFixed(1)}</span>
        <span class="me-2 small theme-text-accent-one">${status}</span>
        <span class="small reviews">${(parseInt(reviews) + 1)} reviews</span>
    `
    $(children).html(updateRate)
    console.log(children)
}
function sortFunction(a, b) {
    if (a[0] === b[0]) {
        return 0;
    }
    else {
        return (a[0] < b[0]) ? -1 : 1;
    }
}
function removeRating(index,currentRate){
    const children = $($($(granny[index]).children()[1]).children()[2]).children()
    const revioli = $($('.reviosa')).children()
    const reviews = (($($($('.reviosa')).children()[2]).html()).split(' '))[0]
    const rate = Math.round(($(revioli[0]).html() * reviews - currentRate) / (parseInt(reviews) - 1) * 10) / 10
    let [bgcolor,status] = statChecker(rate)
    const updateRateModal = `
        <span class="p-1 rounded-1 bg-${bgcolor} theme-text-white">${(rate).toFixed(1)}</span>
        <span class="me-2 theme-text-accent-one">${status}</span>
        <span>${parseInt(reviews) - 1} reviews</span>
    `
    $('.reviosa').html(updateRateModal)
    const updateRate = `
        <span class="p-1 small rounded-1 bg-${bgcolor} theme-text-white">${(rate).toFixed(1)}</span>
        <span class="me-2 small theme-text-accent-one">${status}</span>
        <span class="small reviews">${parseInt(reviews) - 1} reviews</span>
    `
    $(children).html(updateRate)
}
function totalin(cate){
    const total = document.querySelectorAll('.total')
    let simbol = ''
    if(currentCurrency == 'IDR'){
        simbol = 'IDR'
    }
    else if(currentCurrency == 'USD'){
        simbol = 'US$'
    }
    else{
        simbol = 'EUR€'
    }
    let totalaja = 0
    if(currentCurrency == 'IDR'){
        total.forEach(tot => {
            price = $(tot).html().slice(3)
            if((cate == 'holidays' || cate == 'hotels') && ($('.totalDay').html().slice(1)) != 0){
                totalaja += parseFloat(price) * $('.totalDay').html().slice(1)
            }
            else{
                totalaja += parseFloat(price)
            }
        })
        $('.totalaja').html(simbol+Math.ceil(totalaja))
    }
    else if(currentCurrency == "EUR"){
        total.forEach(tot => {
            price = $(tot).html().slice(4)
            if((cate == 'holidays' || cate == 'hotels') && ($('.totalDay').html().slice(1)) != 0){
                totalaja += parseFloat(price) * $('.totalDay').html().slice(1)
            }
            else{
                totalaja += parseFloat(price)
            }
        })
        $('.totalaja').html(simbol+Math.ceil(totalaja))
    }
    else{
        total.forEach((tot) => {
            price = $(tot).html().slice(3)
            if((cate == 'holidays' || cate == 'hotels') && ($('.totalDay').html().slice(1)) != 0){
                totalaja += parseFloat(price) * $('.totalDay').html().slice(1)
            }
            else{
                totalaja += parseFloat(price)
            }
        })
        $('.totalaja').html(simbol+Math.ceil(totalaja))
    }
    const taxes = totalaja * 0.11
    $('.taxes').html(simbol+Math.ceil(taxes))
    const subtotal = totalaja + taxes
    $('.subtotal').html(Math.ceil(subtotal))
}
function day(from, to){
    let tanggal1 = new Date(from); 
    let tanggal2 = new Date(to);
    
    tanggal1.setHours(0, 0, 0, 0);
    tanggal2.setHours(0, 0, 0, 0);
    
    let selisih = tanggal2 - tanggal1;
    let hariDalamMillisecond = 1000 * 60 * 60 * 24; 
    
    let selisihTanggal = Math.round(selisih / hariDalamMillisecond);
    return selisihTanggal
}
function hour(from, to) {
    let [tglberang, jamberang] = from.split('T');
    let [tglsamp, jamsamp] = to.split('T');
    let selisihhari = day(tglberang, tglsamp);

    let [jamberangHour, jamberangMinute] = jamberang.split(':').map(Number);
    let [jamsampHour, jamsampMinute] = jamsamp.split(':').map(Number);
    
    let totalHoursBerang = jamberangHour + jamberangMinute / 60;
    let totalHoursSamp = jamsampHour + jamsampMinute / 60;

    let selisihjam = 0;

    if (selisihhari > 0) {
        selisihjam = (totalHoursSamp + selisihhari * 24) - totalHoursBerang;
    } else if (selisihhari == 0) {
        selisihjam = totalHoursSamp - totalHoursBerang;
    }
    return selisihjam;
}
const currency = document.querySelectorAll('.currency')
const opsi = document.querySelectorAll('.opsi')
const opsibintang = document.querySelectorAll('.opsibintang')
const sortisorti = document.querySelectorAll('.sortisorti')
const upDown = document.querySelectorAll('.upDown')
const color = ['warning','danger','success','info']
const modalTitles = ['Go For A Holiday?','Need A Flight?','Booking A Hotel?']
const textInBut = ['Start a Holiday','Get a Flight','Make a Booking']
const productsRate = [0,0,0,0,0,0,0,0,0,0,0,0]
const rated = [0,0,0,0,0,0,0,0,0,0,0,0]
let asdes = 'ascending'
let darkModeOn = false
let currentCurrency = 'USD'
const granny = document.querySelectorAll('.granny')
$(document).on('input',function(e){
    if($(e.target).hasClass('CheckIn') || $(e.target).hasClass('CheckOut')){
        e.preventDefault()
        if($('.CheckIn').val() != undefined && $('.CheckIn').val() != '' && ($('.CheckOut').val()) != '' && ($('.CheckOut').val()) != undefined){
            let selisih = day($('.CheckIn').val(),$('.CheckOut').val())
            if(selisih >= 0){
                $('.totalDay').html('x'+selisih)
            }
        }
        totalin('holidays')
    }
    if($(e.target).hasClass('departure') || $(e.target).hasClass('arrival')){
        e.preventDefault()
        if($('.departure').val() != undefined && $('.departure').val() != '' && ($('.arrival').val()) != '' && ($('.arrival').val()) != undefined){
            let selisih = hour($('.departure').val(),$('.arrival').val()).toFixed(1)
            $('.LamaTerbang').html(selisih+`${selisih == 1 ? ' Hour' : ' Hours'}`)
        }
        else{
            $('.LamaTerbang').html(0+' Hour')
        }
    }    
    if($(e.target).hasClass('Rooom')){
        e.preventDefault()
        let startingPrice = $(e.target).data('price')
        if($(e.target).val() == 'sgl-bed'){
            let harga = startingPrice
            let simbol = ''
            if(currentCurrency == 'IDR'){
                simbol = 'IDR'
            }
            else if(currentCurrency == 'USD'){
                simbol = 'US$'
            }
            else{
                simbol = 'EUR€'
            }
            $($($(e.target).parent()).next()).html(simbol + harga.toLocaleString())
            totalin('hotels')
        }
        else if($(e.target).val() == 'dbl-bed'){
            let harga = startingPrice * 1.5
            let simbol = ''
            if(currentCurrency == 'IDR'){
                simbol = 'IDR'
            }
            else if(currentCurrency == 'USD'){
                simbol = 'US$'
            }
            else{
                simbol = 'EUR€'
            }
            $($($(e.target).parent()).next()).html(simbol + harga.toLocaleString())
            totalin('hotels')
        }
        else if($(e.target).val() == 'eco'){
            let harga = startingPrice
            let simbol = ''
            if(currentCurrency == 'IDR'){
                simbol = 'IDR'
            }
            else if(currentCurrency == 'USD'){
                simbol = 'US$'
            }
            else{
                simbol = 'EUR€'
            }
            $($($(e.target).parent()).next()).html(simbol + harga.toLocaleString())
            totalin('flights')
        }
        else if($(e.target).val() == 'bisnis'){
            let harga = startingPrice * 8
            let simbol = ''
            if(currentCurrency == 'IDR'){
                simbol = 'IDR'
            }
            else if(currentCurrency == 'USD'){
                simbol = 'US$'
            }
            else{
                simbol = 'EUR€'
            }
            $($($(e.target).parent()).next()).html(simbol + harga.toLocaleString())
            totalin('flights')
        }
        else if($(e.target).val() == 'first'){
            let harga = startingPrice * 12
            let simbol = ''
            if(currentCurrency == 'IDR'){
                simbol = 'IDR'
            }
            else if(currentCurrency == 'USD'){
                simbol = 'US$'
            }
            else{
                simbol = 'EUR€'
            }
            $($($(e.target).parent()).next()).html(simbol + harga.toLocaleString())
            totalin('flights')
        }
        else if($(e.target).val() == 'vila'){
            let harga = startingPrice
            let simbol = ''
            if(currentCurrency == 'IDR'){
                simbol = 'IDR'
            }
            else if(currentCurrency == 'USD'){
                simbol = 'US$'
            }
            else{
                simbol = 'EUR€'
            }
            $($($(e.target).parent()).next()).html(simbol + harga.toLocaleString())
            totalin('holidays')
        }
        else if($(e.target).val() == 'translate'){
            let harga = startingPrice * 0.6
            let simbol = ''
            if(currentCurrency == 'IDR'){
                simbol = 'IDR'
            }
            else if(currentCurrency == 'USD'){
                simbol = 'US$'
            }
            else{
                simbol = 'EUR€'
            }
            $($($(e.target).parent()).next()).html(simbol + harga.toLocaleString())
            totalin('holidays')
        }
        else{
            let harga = startingPrice * 0.8
            let simbol = ''
            if(currentCurrency == 'IDR'){
                simbol = 'IDR'
            }
            else if(currentCurrency == 'USD'){
                simbol = 'US$'
            }
            else{
                simbol = 'EUR€'
            }
            $($($(e.target).parent()).next()).html(simbol + harga.toLocaleString())
            totalin('holidays')
        }
    }
})
$(document).click(function(e){
    if($(e.target).hasClass('booking')){
        e.preventDefault()
    }
    if($(e.target).hasClass('theCart')){
        e.preventDefault()
    }
    if($(e.target).hasClass('rating')){
        e.preventDefault()
    }
    if($(e.target).hasClass('menuIcon')){
        e.preventDefault()
    }
    if($(e.target).hasClass('linkremove')){
        e.preventDefault()
    }
    if($(e.target).hasClass('back')){
        e.preventDefault()
        $('.notCash').removeClass('vanish')
        $('.cashier').addClass('vanish')
        $('.homemenu').removeClass('vanish')
        $('.back').addClass('vanish')
        window.scrollTo(0,0)
    }
    if($(e.target).hasClass('okBut')){
        e.preventDefault()
        $('.notCash').removeClass('vanish')
        $('.cashier').addClass('vanish')
        $('.homemenu').removeClass('vanish')
        $('.back').addClass('vanish')
        window.scrollTo(0,0)
    }
    if($(e.target).hasClass('payIt')){
        e.preventDefault()
        const index = $(e.target).data('cartindex')
        shopingIndex.splice(index,1)
        console.log(shopingIndex)
        addToChart()
        if(shopingIndex.length == 0){
            $('.notif').addClass('aktif')
        }
    }
    if($(e.target).hasClass('notif')){
        e.preventDefault()
    }
    if($(e.target).hasClass('switchMode')){
        e.preventDefault()
        $('*').toggleClass("dark-mode")
        $('.table').toggleClass('table-dark')
        darkModeOn = !darkModeOn
    }
    if($(e.target).hasClass('bi-heart-fill')){
        e.preventDefault()
        $(e.target).addClass('bi-heart')
        $(e.target).removeClass('bi-heart-fill')
    }
    else if($(e.target).hasClass('bi-heart')){
        e.preventDefault()
        $(e.target).addClass('bi-heart-fill')
        $(e.target).removeClass('bi-heart')
    }
    if($(e.target).hasClass('currency')){
        e.preventDefault()
        const used = $('.used').html()
        $('.used').html($(e.target).html())
        currency.forEach(curr => {
            $(curr).removeClass('aktif')
        });
        currency.forEach(curr => {
            if($(curr).html() === $(e.target).html()){
                $(curr).addClass('aktif')
            }
        });
        const newUsed = $('.used').html()
        currentCurrency = newUsed
        changeCurrent(used,newUsed)
    }
    if($(e.target).hasClass('opsi')){
        e.preventDefault()
        $('.picked').html($(e.target).html())
        opsi.forEach(op => {
            $(op).removeClass('filter')
        });
        opsi.forEach(op => {
            if($(op).html() === $(e.target).html()){
                $(op).addClass('filter')
            }
        });
        const newPicked = $('.picked').html()
        filterByCate(newPicked.toLowerCase())
    }
    if($(e.target).hasClass('sortisorti')){
        e.preventDefault()
        $('.urute').html($(e.target).html())
        sortisorti.forEach(op => {
            $(op).removeClass('filter')
        });
        sortisorti.forEach(op => {
            if($(op).html() === $(e.target).html()){
                $(op).addClass('filter')
            }
        });
        const newPicked = $('.urute').html()
        sortIt(newPicked == 'No Sort' ? newPicked.toLowerCase() : newPicked.split(' ')[2].toLowerCase(),asdes)
    }
    if($(e.target).hasClass('upDown')){
        e.preventDefault()
        const Picked = ($('.urute').html()) == 'No Sort' ? ($('.urute').html()).toLowerCase() : ($('.urute').html()).split(' ')[2].toLowerCase()
        upDown.forEach(op => {
            $(op).removeClass('filter')
        });
        upDown.forEach(op => {
            if($(op).html() === $(e.target).html()){
                $(op).addClass('filter')
            }
        });
        asdes = ($(e.target).html()).toLowerCase()
        sortIt(Picked,asdes)
    }
    if($(e.target).hasClass('opsibintang')){
        e.preventDefault()
        $('.curry').html($(e.target).html())
        opsibintang.forEach(op => {
            $(op).removeClass('filter')
        });
        opsibintang.forEach(op => {
            if($(op).html() == $(e.target).html()){
                $(op).addClass('filter')
            }
        })
        const newPicked = $(e.target).data('rate')
        filterByRate(newPicked)
    }
    if($(e.target).hasClass('addtocart')){
        e.preventDefault()
        shopingIndex.push($(e.target).data('productkey'))
        addToChart()
    }
    if($(e.target).hasClass('bookremove')){
        e.preventDefault()
        $($($($(e.target).parent()).parent()).parent()).addClass('erase')
        shopingIndex.splice($(e.target).data('key'),1)
        setTimeout(function(){
            addToChart()
            if(shopingIndex.length == 0){
                $('.notif').addClass('aktif')
            }
        },500)
    }
    if($(e.target).hasClass('productim')){
        $('.notCash').addClass('vanish')
        $('.cashier').removeClass('vanish')
        $('.homemenu').addClass('vanish')
        $('.back').removeClass('vanish')
        window.scrollTo(0,0)
        const key = $(e.target).data('index')
        const index = $(e.target).data('key')
        const children = $($(granny[key]).children()[1]).children()
        const theCurent = $(e.target).data('currentin')
        let price = $(e.target).data('starting').split(' ')[3].split('>')[1].split('<')[0]
        if(theCurent == 'IDR'){
            price = price.slice(3)
        }
        else if(theCurent == "EUR"){
            price = price.slice(4)
        }
        else{
            price = price.slice(3)
        }
        let category = ''
        if([0,1,2,3].includes(key)){
            category = 'holidays'
        }
        else if([4,5,6,7].includes(key)){
            category = 'flights'
        }
        else{
            category = 'hotels'
        }
        let simbol = ''
        if(currentCurrency == 'IDR'){
            simbol = 'IDR'
        }
        else if(currentCurrency == 'USD'){
            simbol = 'US$'
        }
        else{
            simbol = 'EUR€'
        }
        let cashier = ''
        if(category == 'hotels'){
            cashier = `
            <h1 class="titleCash ${darkModeOn ? 'dark-mode' : ''}">${$(children[0]).html()}</h1>
            <h3 class="mb-2 ${darkModeOn ? 'dark-mode' : ''} theme-text-accent-two">${$(children[1]).html()}</h3>
            <div class="detailProd ${darkModeOn ? 'dark-mode' : ''}">
                <img src="assets/images/recommended/offers${key+1 >= 10 ? key+1 : "0" + (key+1)}.png" alt="Product Image" class="${darkModeOn ? 'dark-mode' : ''} prodimg">
                <p class="${darkModeOn ? 'dark-mode' : ''} desProd">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, non! Voluptatibus eos quaerat magnam alias aut repudiandae, qui ullam accusantium quis optio animi fugit perferendis tenetur eius recusandae aspernatur, consequuntur laborum. Voluptates cupiditate tempore voluptatibus necessitatibus nesciunt asperiores aperiam delectus veniam accusantium, officia, voluptas corporis in? Dolore voluptatibus doloremque quod iste animi pariatur aliquid necessitatibus ex nobis veniam deleniti iusto reprehenderit voluptatum, quam porro esse assumenda ipsum aliquam ab delectus quo! Soluta necessitatibus delectus optio error aliquid! Quos quo ipsa deserunt inventore voluptatum neque facere fugiat distinctio? Veniam aperiam modi aspernatur dolores praesentium provident quam facilis, rem recusandae sequi, perferendis harum dignissimos quae consectetur dolore necessitatibus odio a nesciunt aliquid deleniti nemo, tempore rerum? Corporis nostrum eos vitae vel. Ut.</p>
            </div>
            <div class="table  ${darkModeOn ? 'table-dark' : ''} tabel-payment">
                <form>
                    <table class="table ${darkModeOn ? 'table-dark' : ''} ">
                        <thead>
                            <tr>
                            <th scope="col">Check In Date</th>
                            <th scope="col">Check Out Date</th>
                            <th scope="col">Adults</th>
                            <th scope="col">Children</th>
                            <th scope="col">Infants</th>
                            <th scope="col">Total People</th>
                            <th scope="col">Rooms</th>
                            <th scope="col">Price</th>
                            <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input type="date" name="in" id="in" class="CheckIn"></td>
                                <td><input type="date" name="out" id="out" class="CheckOut"></td>
                                <td><div class="howmany"><button type="button" class="btn btn-outline-primary minus">-</button><span class="jumlah jumlahDewasa">0</span><button type="button" class="btn btn-outline-primary plus">+</button></div></td>
                                <td><div class="howmany"><button type="button" class="btn btn-outline-primary minus">-</button><span class="jumlah jumlahAnak">0</span><button type="button" class="btn btn-outline-primary plus">+</button></div></td>
                                <td><div class="howmany"><button type="button" class="btn btn-outline-primary minus">-</button><span class="jumlah jumlahBayi">0</span><button type="button" class="btn btn-outline-primary plus">+</button></div></td>
                                <td class="totOrg">0</td>
                                <td><div class="howmany"><button type="button" class="btn btn-outline-primary kmrmin" data-price="${price}" data-cur="${theCurent}">-</button><span class="jumlah">0</span><button type="button" class="btn btn-outline-primary kmrplus" data-price="${price}" data-cur="${theCurent}">+</button></div></td>
                                <td class="PrcPers price white total">${simbol}0</td>
                                <th>Days</th>
                            </tr>
                            <tbody class="rooms"></tbody>
                            <tr>
                                <td colspan="6"></td>
                                <th>Total</th>
                                <th class='price totalaja white'>${simbol}0</th>
                                <td></td>
                            </tr>
                            <tr>
                                <td colspan="6"></td>
                                <th>Taxes</th>
                                <td class='price taxes white'>${simbol}0</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td colspan="6"></td>
                                <th>Subtotal</th>
                                <th class='price subtotal white'>${simbol}0</th>
                            </tr>
                        </tbody>
                    </table>
                </form>
                <div class="payBut">
                    <button class="btn btn-lg btn-secondary mt-3 payIt ${darkModeOn ? 'dark-mode' : ''}" data-bs-toggle="modal" data-bs-target="#PaymentModal" data-cartindex=${index}>Proceed to The Payment</button>
                </div>
            </div>
            `
        }
        else if(category == 'flights'){
            cashier = `
            <h1 class="titleCash ${darkModeOn ? 'dark-mode' : ''}">${$(children[0]).html()}</h1>
            <h3 class="mb-2 ${darkModeOn ? 'dark-mode' : ''} theme-text-accent-two">${$(children[1]).html()}</h3>
            <div class="detailProd ${darkModeOn ? 'dark-mode' : ''}">
                <img src="assets/images/recommended/offers${key+1 >= 10 ? key+1 : "0" + (key+1)}.png" alt="Product Image" class="${darkModeOn ? 'dark-mode' : ''} prodimg">
                <p class="${darkModeOn ? 'dark-mode' : ''} desProd">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, non! Voluptatibus eos quaerat magnam alias aut repudiandae, qui ullam accusantium quis optio animi fugit perferendis tenetur eius recusandae aspernatur, consequuntur laborum. Voluptates cupiditate tempore voluptatibus necessitatibus nesciunt asperiores aperiam delectus veniam accusantium, officia, voluptas corporis in? Dolore voluptatibus doloremque quod iste animi pariatur aliquid necessitatibus ex nobis veniam deleniti iusto reprehenderit voluptatum, quam porro esse assumenda ipsum aliquam ab delectus quo! Soluta necessitatibus delectus optio error aliquid! Quos quo ipsa deserunt inventore voluptatum neque facere fugiat distinctio? Veniam aperiam modi aspernatur dolores praesentium provident quam facilis, rem recusandae sequi, perferendis harum dignissimos quae consectetur dolore necessitatibus odio a nesciunt aliquid deleniti nemo, tempore rerum? Corporis nostrum eos vitae vel. Ut.</p>
            </div>
            <div class="table ${darkModeOn ? 'table-dark' : ''} tabel-payment">
                <form>
                    <table class="table  ${darkModeOn ? 'table-dark' : ''}">
                        <thead>
                            <tr>
                            <th scope="col">Departure</th>
                            <th scope="col">Arrival</th>
                            <th scope="col">Filght Long</th>
                            <th scope="col">Adults</th>
                            <th scope="col">Children</th>
                            <th scope="col">Infants</th>
                            <th scope="col">Total People</th>
                            <th scope="col">Seats</th>
                            <th scope="col">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input type="datetime-local" name="in" id="in" class="departure"></td>
                                <td><input type="datetime-local" name="out" id="out" class="arrival"></td>
                                <td class='LamaTerbang'>0 Hour</td>
                                <td><div class="howmany"><button type="button" class="btn btn-outline-primary minus">-</button><span class="jumlah jumlahDewasa">0</span><button type="button" class="btn btn-outline-primary plus">+</button></div></td>
                                <td><div class="howmany"><button type="button" class="btn btn-outline-primary minus">-</button><span class="jumlah jumlahAnak">0</span><button type="button" class="btn btn-outline-primary plus">+</button></div></td>
                                <td><div class="howmany"><button type="button" class="btn btn-outline-primary minus">-</button><span class="jumlah jumlahBayi">0</span><button type="button" class="btn btn-outline-primary plus">+</button></div></td>
                                <td class="totOrg">0</td>
                                <td><div class="howmany"><button type="button"  data-price="${price}" data-cur="${theCurent}" class="btn btn-outline-primary seatmin">-</button><span class="jumlah">0</span><button type="button" data-price="${price}" data-cur="${theCurent}" class="btn btn-outline-primary seatplus">+</button></div></td>
                                <td class="PrcPers price white total">${simbol}0</td>
                            </tr>
                            <tbody class="rooms"></tbody>
                            <tr>
                                <td colspan="6"></td>
                                <th>Total</th>
                                <th class='price totalaja white'>${simbol}0</th>
                                <td></td>
                            </tr>
                            <tr>
                                <td colspan="6"></td>
                                <th>Taxes</th>
                                <td class='price taxes white'>${simbol}0</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td colspan="6"></td>
                                <th>Subtotal</th>
                                <th class='price subtotal white'>${simbol}0</th>
                            </tr>
                        </tbody>
                    </table>
                </form>
                <div class="payBut">
                    <button class="btn btn-lg btn-secondary mt-3 payIt ${darkModeOn ? 'dark-mode' : ''}" data-bs-toggle="modal" data-bs-target="#PaymentModal" data-cartindex=${index}>Proceed to The Payment</button>
                </div>
            </div>
            `
        }
        else{
            cashier = `
            <h1 class="titleCash ${darkModeOn ? 'dark-mode' : ''}">${$(children[0]).html()}</h1>
            <h3 class="mb-2 ${darkModeOn ? 'dark-mode' : ''} theme-text-accent-two">${$(children[1]).html()}</h3>
            <div class="detailProd ${darkModeOn ? 'dark-mode' : ''}">
                <img src="assets/images/recommended/offers${key+1 >= 10 ? key+1 : "0" + (key+1)}.png" alt="Product Image" class="${darkModeOn ? 'dark-mode' : ''} prodimg">
                <p class="${darkModeOn ? 'dark-mode' : ''} desProd">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, non! Voluptatibus eos quaerat magnam alias aut repudiandae, qui ullam accusantium quis optio animi fugit perferendis tenetur eius recusandae aspernatur, consequuntur laborum. Voluptates cupiditate tempore voluptatibus necessitatibus nesciunt asperiores aperiam delectus veniam accusantium, officia, voluptas corporis in? Dolore voluptatibus doloremque quod iste animi pariatur aliquid necessitatibus ex nobis veniam deleniti iusto reprehenderit voluptatum, quam porro esse assumenda ipsum aliquam ab delectus quo! Soluta necessitatibus delectus optio error aliquid! Quos quo ipsa deserunt inventore voluptatum neque facere fugiat distinctio? Veniam aperiam modi aspernatur dolores praesentium provident quam facilis, rem recusandae sequi, perferendis harum dignissimos quae consectetur dolore necessitatibus odio a nesciunt aliquid deleniti nemo, tempore rerum? Corporis nostrum eos vitae vel. Ut.</p>
            </div>
            <div class="table  ${darkModeOn ? 'table-dark' : ''} tabel-payment">
                <form>
                    <table class="table ${darkModeOn ? 'table-dark' : ''} ">
                        <thead>
                            <tr>
                            <th scope="col">Date Start</th>
                            <th scope="col">Date End</th>
                            <th scope="col">Adults</th>
                            <th scope="col">Children</th>
                            <th scope="col">Infants</th>
                            <th scope="col">Total People</th>
                            <th scope="col">Facilities</th>
                            <th scope="col">Price</th>
                            <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input type="date" name="in" id="in" class="CheckIn"></td>
                                <td><input type="date" name="out" id="out" class="CheckOut"></td>
                                <td><div class="howmany"><button type="button" class="btn btn-outline-primary minus">-</button><span class="jumlah jumlahDewasa">0</span><button type="button" class="btn btn-outline-primary plus">+</button></div></td>
                                <td><div class="howmany"><button type="button" class="btn btn-outline-primary minus">-</button><span class="jumlah jumlahAnak">0</span><button type="button" class="btn btn-outline-primary plus">+</button></div></td>
                                <td><div class="howmany"><button type="button" class="btn btn-outline-primary minus">-</button><span class="jumlah jumlahBayi">0</span><button type="button" class="btn btn-outline-primary plus">+</button></div></td>
                                <td class="totOrg">0</td>
                                <td><div class="howmany"><button type="button"  data-price="${price}" data-cur="${theCurent}" class="btn btn-outline-primary facmin">-</button><span class="jumlah">0</span><button type="button" data-price="${price}" data-cur="${theCurent}" class="btn btn-outline-primary facplus">+</button></div></td>
                                <td class="PrcPers price white total">${simbol}0</td>
                                <th>Days</th>
                            </tr>
                            <tbody class="rooms"></tbody>
                            <tr>
                                <td colspan="6"></td>
                                <th>Total</th>
                                <th class='price totalaja white'>${simbol}0</th>
                                <td></td>
                            </tr>
                            <tr>
                                <td colspan="6"></td>
                                <th>Taxes</th>
                                <td class='price taxes white'>${simbol}0</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td colspan="6"></td>
                                <th>Subtotal</th>
                                <th class='price subtotal white'>${simbol}0</th>
                            </tr>
                        </tbody>
                    </table>
                </form>
                <div class="payBut">
                    <button class="btn btn-lg btn-secondary mt-3 payIt ${darkModeOn ? 'dark-mode' : ''}" data-bs-toggle="modal" data-bs-target="#PaymentModal" data-cartindex=${index}>Proceed to The Payment</button>
                </div>
            </div>
            `
        }
        $('.cashierCon').html(cashier)
    }
    if($(e.target).hasClass('minus')){
        e.preventDefault()
        const dewasa400 = currentCurrency == 'IDR' ? changeCurrentOnly('USD',currentCurrency,changeCurrentOnly('IDR','USD',400000)) : changeCurrentOnly('IDR',currentCurrency,400000)
        const anak250 = currentCurrency == 'IDR' ? changeCurrentOnly('USD',currentCurrency,changeCurrentOnly('IDR','USD',250000)) : changeCurrentOnly('IDR',currentCurrency,250000)
        const bayi120 = currentCurrency == 'IDR' ? changeCurrentOnly('USD',currentCurrency,changeCurrentOnly('IDR','USD',120000)) : changeCurrentOnly('IDR',currentCurrency,120000)
        if($($(e.target).next()).html() != 0){
            $($(e.target).next()).html(parseInt($($(e.target).next()).html())-1)
        }
        $('.totOrg').html(parseInt($('.jumlahDewasa').html()) + parseInt($('.jumlahAnak').html()) + parseInt($('.jumlahBayi').html()))
        let simbol = ''
        if(currentCurrency == 'IDR'){
            simbol = 'IDR'
        }
        else if(currentCurrency == 'USD'){
            simbol = 'US$'
        }
        else{
            simbol = 'EUR€'
        }
        $('.PrcPers').html(simbol + ((($('.jumlahDewasa').html()) * dewasa400) + (parseInt($('.jumlahAnak').html()) * anak250) + (parseInt($('.jumlahBayi').html() * bayi120))).toLocaleString())
        totalin()
    }
    if($(e.target).hasClass('plus')){
        e.preventDefault()
        const dewasa400 = currentCurrency == 'IDR' ? changeCurrentOnly('USD',currentCurrency,changeCurrentOnly('IDR','USD',400000)) : changeCurrentOnly('IDR',currentCurrency,400000)
        const anak250 = currentCurrency == 'IDR' ? changeCurrentOnly('USD',currentCurrency,changeCurrentOnly('IDR','USD',250000)) : changeCurrentOnly('IDR',currentCurrency,250000)
        const bayi120 = currentCurrency == 'IDR' ? changeCurrentOnly('USD',currentCurrency,changeCurrentOnly('IDR','USD',120000)) : changeCurrentOnly('IDR',currentCurrency,120000)
        $($(e.target).prev()).html(parseInt($($(e.target).prev()).html())+1)
        $('.totOrg').html(parseInt($('.jumlahDewasa').html()) + parseInt($('.jumlahAnak').html()) + parseInt($('.jumlahBayi').html()))
        let simbol = ''
        if(currentCurrency == 'IDR'){
            simbol = 'IDR'
        }
        else if(currentCurrency == 'USD'){
            simbol = 'US$'
        }
        else{
            simbol = 'EUR€'
        }
        $('.PrcPers').html(simbol + ((($('.jumlahDewasa').html()) * dewasa400) + (parseInt($('.jumlahAnak').html()) * anak250) + (parseInt($('.jumlahBayi').html() * bayi120))).toLocaleString())
        totalin()
    }
    if($(e.target).hasClass('kmrmin')){
        e.preventDefault()
        if($($(e.target).next()).html() != 0){
            $($(e.target).next()).html(parseInt($($(e.target).next()).html())-1)
        }
        let startingPrice = $(e.target).data('price')
        let curr = $(e.target).data('cur')
        let harga = currentCurrency == curr ? startingPrice : changeCurrentOnly(curr,currentCurrency,parseInt(startingPrice))
        let simbol = ''
        if(currentCurrency == 'IDR'){
            simbol = 'IDR'
        }
        else if(currentCurrency == 'USD'){
            simbol = 'US$'
        }
        else{
            simbol = 'EUR€'
        }
        let selisih = 0
        if(($('.CheckIn').val()).split('-')[0] != undefined || ($('.CheckOut').val()).split('-')[0] != undefined){
            selisih = day($('.CheckIn').val(),$('.CheckOut').val())
            if(selisih > 0){
                $('.totalDay').html('x'+selisih)
            }
        }
        let roomse = ''
        for(let i = 0; i < $($(e.target).next()).html();i++){
            roomse += `
            <tr>
                <td colspan="5"></td>
                <th>Room ${i+1}</th>
                <td><select name="type" id="" data-price='${harga}' class="Rooom ${darkModeOn ? 'dark-mode' : ''}">
                    <option value="sgl-bed" class="${darkModeOn ? 'dark-mode' : ''}">Single Bed</option>
                    <option value="dbl-bed" class="${darkModeOn ? 'dark-mode' : ''}">Double Bed</option>
                </select></td>
                <td class="total price white ${darkModeOn ? 'dark-mode' : ''}">${simbol}${harga.toLocaleString()}</td>
                <td class="totalDay ${darkModeOn ? 'dark-mode' : ''}">x${selisih>0?selisih:0}</td>
            </tr>
            `
        }
        $('.rooms').html(roomse)
        totalin('hotels')
    }
    if($(e.target).hasClass('kmrplus')){
        e.preventDefault()
        $($(e.target).prev()).html(parseInt($($(e.target).prev()).html())+1)
        let simbol = ''
        if(currentCurrency == 'IDR'){
            simbol = 'IDR'
        }
        else if(currentCurrency == 'USD'){
            simbol = 'US$'
        }
        else{
            simbol = 'EUR€'
        }
        let selisih = 0
        if(($('.CheckIn').val()).split('-')[0] != undefined || ($('.CheckOut').val()).split('-')[0] != undefined){
            selisih = day($('.CheckIn').val(),$('.CheckOut').val())
            if(selisih > 0){
                $('.totalDay').html('x'+selisih)
            }
        }
        let startingPrice = $(e.target).data('price')
        let curr = $(e.target).data('cur')
        let harga = currentCurrency == curr ? startingPrice : changeCurrentOnly(curr,currentCurrency,parseInt(startingPrice))
        let roomse = ''
        for(let i = 0; i < $($(e.target).prev()).html();i++){
            roomse += `
            <tr>
                <td colspan="5"></td>
                <th>Room ${i+1}</th>
                <td><select name="type" id=""  data-price='${harga}' class="Rooom ${darkModeOn ? 'dark-mode' : ''}">
                    <option value="sgl-bed" class="${darkModeOn ? 'dark-mode' : ''}">Single Bed</option>
                    <option value="dbl-bed" class="${darkModeOn ? 'dark-mode' : ''}">Double Bed</option>
                </select></td>
                <td class="total price white ${darkModeOn ? 'dark-mode' : ''}">${simbol}${harga.toLocaleString()}</td>
                <td class="totalDay ${darkModeOn ? 'dark-mode' : ''}">x${selisih>0?selisih:0}</td>
            </tr>
            `
        }
        $('.rooms').html(roomse)
        totalin('hotels')
    }
    if($(e.target).hasClass('facmin')){
        e.preventDefault()
        if($($(e.target).next()).html() != 0){
            $($(e.target).next()).html(parseInt($($(e.target).next()).html())-1)
        }
        let startingPrice = $(e.target).data('price')
        let curr = $(e.target).data('cur')
        let harga = currentCurrency == curr ? startingPrice : changeCurrentOnly(curr,currentCurrency,parseInt(startingPrice))
        let simbol = ''
        if(currentCurrency == 'IDR'){
            simbol = 'IDR'
        }
        else if(currentCurrency == 'USD'){
            simbol = 'US$'
        }
        else{
            simbol = 'EUR€'
        }
        let selisih = 0
        if(($('.CheckIn').val()).split('-')[0] != undefined || ($('.CheckOut').val()).split('-')[0] != undefined){
            selisih = day($('.CheckIn').val(),$('.CheckOut').val())
            if(selisih > 0){
                $('.totalDay').html('x'+selisih)
            }
        }
        let roomse = ''
        for(let i = 0; i < $($(e.target).next()).html();i++){
            roomse += `
            <tr>
                <td colspan="5"></td>
                <th>Room ${i+1}</th>
                <td><select name="type" id="" data-price='${harga}' class="Rooom ${darkModeOn ? 'dark-mode' : ''}">
                    <option value="vila" class="${darkModeOn ? 'dark-mode' : ''}">Vila</option>
                    <option value="translate" class="${darkModeOn ? 'dark-mode' : ''}">Translator</option>
                    <option value="guide" class="${darkModeOn ? 'dark-mode' : ''}">Tour Guide</option>
                </select></td>
                <td class="total price white ${darkModeOn ? 'dark-mode' : ''}">${simbol}${harga.toLocaleString()}</td>
                <td class="totalDay ${darkModeOn ? 'dark-mode' : ''}">x${selisih>0?selisih:0}</td>
            </tr>
            `
        }
        $('.rooms').html(roomse)
        totalin('holidays')
    }
    if($(e.target).hasClass('facplus')){
        e.preventDefault()
        $($(e.target).prev()).html(parseInt($($(e.target).prev()).html())+1)
        let simbol = ''
        if(currentCurrency == 'IDR'){
            simbol = 'IDR'
        }
        else if(currentCurrency == 'USD'){
            simbol = 'US$'
        }
        else{
            simbol = 'EUR€'
        }
        let selisih = 0
        if(($('.CheckIn').val()).split('-')[0] != undefined || ($('.CheckOut').val()).split('-')[0] != undefined){
            selisih = day($('.CheckIn').val(),$('.CheckOut').val())
            if(selisih > 0){
                $('.totalDay').html('x'+selisih)
            }
        }
        let startingPrice = $(e.target).data('price')
        let curr = $(e.target).data('cur')
        let harga = currentCurrency == curr ? startingPrice : changeCurrentOnly(curr,currentCurrency,parseInt(startingPrice))
        let roomse = ''
        for(let i = 0; i < $($(e.target).prev()).html();i++){
            roomse += `
            <tr>
                <td colspan="5"></td>
                <th>Room ${i+1}</th>
                <td><select name="type" id="" data-price='${harga}' class="Rooom ${darkModeOn ? 'dark-mode' : ''}">
                    <option value="vila" class="${darkModeOn ? 'dark-mode' : ''}">Vila</option>
                    <option value="translate" class="${darkModeOn ? 'dark-mode' : ''}">Translator</option>
                    <option value="guide" class="${darkModeOn ? 'dark-mode' : ''}">Tour Guide</option>
                </select></td>
                <td class="total price white ${darkModeOn ? 'dark-mode' : ''}">${simbol}${harga.toLocaleString()}</td>
                <td class="totalDay ${darkModeOn ? 'dark-mode' : ''}">x${selisih>0?selisih:0}</td>
            </tr>
            `
        }
        $('.rooms').html(roomse)
        totalin('holidays')
    }
    if($(e.target).hasClass('seatmin')){
        e.preventDefault()
        if($($(e.target).next()).html() != 0){
            $($(e.target).next()).html(parseInt($($(e.target).next()).html())-1)
        }
        let startingPrice = $(e.target).data('price')
        let curr = $(e.target).data('cur')
        let harga = currentCurrency == curr ? startingPrice : changeCurrentOnly(curr,currentCurrency,parseInt(startingPrice))
        let simbol = ''
        if(currentCurrency == 'IDR'){
            simbol = 'IDR'
        }
        else if(currentCurrency == 'USD'){
            simbol = 'US$'
        }
        else{
            simbol = 'EUR€'
        }
        let roomse = ''
        for(let i = 0; i < $($(e.target).next()).html();i++){
            roomse += `
            <tr>
                <td colspan="6"></td>
                <th>Seat ${i+1}</th>
                <td><select name="type" id="" data-price='${harga}' class="Rooom ${darkModeOn ? 'dark-mode' : ''}">
                    <option value="eco" class="${darkModeOn ? 'dark-mode' : ''}">Economy</option>
                    <option value="bisnis" class="${darkModeOn ? 'dark-mode' : ''}">Business</option>
                    <option value="first" class="${darkModeOn ? 'dark-mode' : ''}">First Class</option>
                </select></td>
                <td class="total price white ${darkModeOn ? 'dark-mode' : ''}">${simbol}${harga.toLocaleString()}</td>
            </tr>
            `
        }
        $('.rooms').html(roomse)
        totalin('flights')
    }
    if($(e.target).hasClass('seatplus')){
        e.preventDefault()
        $($(e.target).prev()).html(parseInt($($(e.target).prev()).html())+1)
        let simbol = ''
        if(currentCurrency == 'IDR'){
            simbol = 'IDR'
        }
        else if(currentCurrency == 'USD'){
            simbol = 'US$'
        }
        else{
            simbol = 'EUR€'
        }
        let startingPrice = $(e.target).data('price')
        let curr = $(e.target).data('cur')
        let harga = currentCurrency == curr ? startingPrice : changeCurrentOnly(curr,currentCurrency,parseInt(startingPrice))
        let roomse = ''
        for(let i = 0; i < $($(e.target).prev()).html();i++){
            roomse += `
            <tr>
                <td colspan="6"></td>
                <th>Seat ${i+1}</th>
                <td><select name="type" id="" data-price='${harga}' class="Rooom ${darkModeOn ? 'dark-mode' : ''}">
                    <option value="eco" class="${darkModeOn ? 'dark-mode' : ''}">Economy</option>
                    <option value="bisnis" class="${darkModeOn ? 'dark-mode' : ''}">Business</option>
                    <option value="first" class="${darkModeOn ? 'dark-mode' : ''}">First Class</option>
                </select></td>
                <td class="total price white ${darkModeOn ? 'dark-mode' : ''}">${simbol}${harga.toLocaleString()}</td>
            </tr>
            `
        }
        $('.rooms').html(roomse)
        totalin('flights')
    }
    if($(e.target).hasClass('addRate') && $($(e.target).next()).data('rating') != 0){
        e.preventDefault()
        $(e.target).removeClass('btn-primary')
        $(e.target).removeClass('addRate')
        $(e.target).addClass('btn-danger')
        $(e.target).addClass('removeRate')
        addRating($(e.target).data('rate'),$($(e.target).next()).data('rating'))
        $(e.target).html('Remove Rating')
        rated[$(e.target).data('rate')] = 1
    }
    else if($(e.target).hasClass('removeRate')){
        e.preventDefault()
        $(e.target).addClass('btn-primary')
        $(e.target).addClass('addRate')
        $(e.target).removeClass('btn-danger')
        $(e.target).removeClass('removeRate')
        const rate = `
            <i class="bi bi-star bintang" data-rateVal=1></i>
            <i class="bi bi-star bintang" data-rateVal=2></i>
            <i class="bi bi-star bintang" data-rateVal=3></i>
            <i class="bi bi-star bintang" data-rateVal=4></i>
            <i class="bi bi-star bintang" data-rateVal=5></i>
        `
        const index = $(e.target).data('rate');
        productsRate[index] = 0
        $(e.target).html('Add Rating')
        $('.rating').html(rate)
        removeRating(index,$($(e.target).next()).data('rating'))
        rated[$(e.target).data('rate')] = 0
    }
    if($(e.target).hasClass('bintang') && !$('.tombolRate').hasClass('removeRate')) {
        const parentElement = $(e.target).parent();
        const index = parentElement.data('index');
        const rateVal = $(e.target).data('rateval');
        parentElement.data('rating', rateVal);
        productsRate[index] = rateVal;
        ratingHandler(productsRate[index]);
    }
})
const img = document.querySelectorAll('.activity');
const menu = document.querySelectorAll('.menu');
$('.parrent').mouseenter(function() {
    const index = $(this).data('index'); 
    $(img[index]).addClass('zoom');
    $(menu[index]).addClass('hoverIt');
});

$('.parrent').mouseleave(function() {
    const index = $(this).data('index');
    $(img[index]).removeClass('zoom');;
    $(menu[index]).removeClass('hoverIt');
});

$('.cart').click(function(e){
    e.preventDefault()
    const key = $(this).data('offerkey')
    shopingIndex.push(key)
    addToChart()
})
$('.detail').click(function(e){
    e.preventDefault()
    const key = $(this).data('offerkey')
    const children = $($(granny[key]).children()[1]).children()
    const stat = $($(children[2]).children()).children()
    let title = ''
    let buttonText = ''
    if([0,1,2,3].includes(key)){
        title = modalTitles[0]
        buttonText = textInBut[0]
    }
    else if([4,5,6,7].includes(key)){
        title = modalTitles[1]
        buttonText = textInBut[1]
    }
    else{
        title = modalTitles[2]
        buttonText = textInBut[2]
    }
    $('.ShopTitle').html(title)
    let rateColor = ''
    if([0,4,8].includes(key)){
        rateColor = color[0]
    }
    else if([1,5,9].includes(key)){
        rateColor = color[1]
    }
    else if([2,6,10].includes(key)){
        rateColor = color[2]
    }
    else{
        rateColor = color[3]
    }
    let [bgcolor,status] = statChecker($(stat[0]).html())
    const modal = `
            <div class="modal-con mb-2 ${darkModeOn ? 'dark-mode' : ''}">
            <div class="img me-3 ${darkModeOn ? 'dark-mode' : ''}">
            <img src="assets/images/recommended/offers${key+1 >= 10 ? key+1 : "0" + (key+1)}.png" class="img-fluid mx-auto d-block activity  ${darkModeOn ? 'dark-mode' : ''}" alt="product picture"></div>
            <div class="contentdes  ${darkModeOn ? 'dark-mode' : ''}">                            
            <h1 class="fs-4 mt-4 fw-bold text-truncate ${darkModeOn ? 'dark-mode' : ''}">${$(children[0]).html()}</h1>
            <p class="mb-2 theme-text-accent-two '${darkModeOn ? 'dark-mode' : ''}'">${$(children[1]).html()}</p>
            <p class='${darkModeOn ? 'dark-mode' : ''}'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, non! Voluptatibus eos quaerat magnam alias aut repudiandae, qui ullam accusantium quis optio animi fugit perferendis tenetur eius recusandae aspernatur, consequuntur laborum. Voluptates cupiditate tempore voluptatibus necessitatibus nesciunt asperiores aperiam delectus veniam accusantium, officia, voluptas corporis in? Dolore voluptatibus doloremque quod iste animi pariatur aliquid necessitatibus ex nobis veniam deleniti iusto reprehenderit voluptatum, quam porro esse assumenda ipsum aliquam ab delectus quo! Soluta necessitatibus delectus optio error aliquid! Quos quo ipsa deserunt inventore voluptatum neque facere fugiat distinctio? Veniam aperiam modi aspernatur dolores praesentium provident quam facilis, rem recusandae sequi, perferendis harum dignissimos quae consectetur dolore necessitatibus odio a nesciunt aliquid deleniti nemo, tempore rerum? Corporis nostrum eos vitae vel. Ut.</p>
            <div class="d-flex bottom mb-2 ${darkModeOn ? 'dark-mode' : ''}">
                <div class="rating-cover ${darkModeOn ? 'dark-mode' : ''}">
                    <div class='reviosa ${darkModeOn ? 'dark-mode' : ''}'>
                        <span class="p-1 rounded-1 bg-${bgcolor} theme-text-white" ${darkModeOn ? 'dark-mode' : ''}>${$(stat[0]).html()}</span>
                        <span class="me-2 theme-text-accent-one ${darkModeOn ? 'dark-mode' : ''}"">${status}</span>
                        <span class="${darkModeOn ? 'dark-mode' : ''}"">${$(stat[2]).html()}</span>
                    </div>
                    <button href="#" class="btn btn-${rated[key] == 1 ? 'danger' : 'primary'} btn-sm tombolRate ${rated[key] == 1 ? 'removeRate' : 'addRate'} ${darkModeOn ? 'dark-mode' : ''}" data-rate="${key}">${rated[key] == 1 ? 'Remove Rating' : 'Add Rating'}</button>
                    <span class='rating ${darkModeOn ? 'dark-mode' : ''}' data-index='${key}' data-rating="${productsRate[key]}">
                        ${ratingHandler(productsRate[key])}
                    </span>
                </div>
            </div>
            <p class="mb-0 theme-text-accent-one ${darkModeOn ? 'dark-mode' : ''}">${$(children[3]).html()}</p>
            <button class="btn btn-secondary mt-3 addtocart ${darkModeOn ? 'dark-mode' : ''}" data-productkey=${key}>${buttonText}</button>
            </div>
        </div>
    `
    $('.DetailOffer').html(modal)
})
