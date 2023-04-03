// create an app object and intialize function
const app = {};

// event listener
const lights = document.querySelector('.switch');

lights.addEventListener('click', function() {
    const onOff = document.getElementById('light');
    // turn lights on and off
    if (onOff.style.visibility == 'visible') {
        onOff.style.visibility = 'hidden'
    } else {
        onOff.style.visibility = 'visible';
    }
});

app.init = () => {
};

app.init();