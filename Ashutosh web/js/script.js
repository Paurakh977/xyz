function sub(){
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let number = document.getElementById('number').value
    let submsg = document.getElementById('Submited')
    if(name == '' || email == ''||number ==''){
        submsg.innerHTML = `input field can't be empty`
        setTimeout(function() {
            submsg.innerHTML = '';
        }, 1000);
    }
    else{

        submsg.innerHTML = `This msg represents that Your msg was submited !
        with name ${name} email ${email} and number ${number} The msg Disapears in 3 sec`
        setTimeout(function() {
            submsg.innerHTML = '';
        }, 3000);
    }

}
document.addEventListener('DOMContentLoaded', function() {
    const image1 = document.querySelector('.image-1');
    const image2 = document.querySelector('.image-2');
    const image3 = document.querySelector('.image-3');

    function changeWidths() {
        // Get the current widths of the images
        let width1 = parseFloat(image1.style.width) || 90;
        let width2 = parseFloat(image2.style.width) || 2.5;
        let width3 = parseFloat(image3.style.width) || 2.5;

        // Rotate the widths
        let temp = width1;
        width1 = width2;
        width2 = width3;
        width3 = temp;

        // Set the new widths
        image1.style.width = width1 + '%';
        image2.style.width = width2 + '%';
        image3.style.width = width3 + '%';
    }

    // Button click event listener
    document.querySelector('.btn-left').addEventListener('click', changeWidths);
});

document.addEventListener('DOMContentLoaded', function() {
    const image4 = document.querySelector('.image-4');
    const image5 = document.querySelector('.image-5');
    const image6 = document.querySelector('.image-6');

    function changeWidth() {
        // Get the current widths of the images
        let width4 = parseFloat(image4.style.width) || 95;
        let width5 = parseFloat(image5.style.width) || 2.5;
        let width6 = parseFloat(image6.style.width) || 2.5;

        // Rotate the widths
        let temp = width4;
        width4 = width5
        width5 = width6
        width6 = temp;

        // Set the new widths
        image4.style.width = width4 + '%';
        image5.style.width = width5 + '%';
        image6.style.width = width6 + '%';
    }

    // Button click event listener
    document.querySelector('.btn').addEventListener('click', changeWidth);
});
