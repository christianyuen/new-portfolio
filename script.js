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

const info = document.querySelector('.info');
info.addEventListener('click', function() {
    console.log('click me')
    const infoHover = document.querySelector('.info-hover')
    if (infoHover.style.visibility == 'visible') {
        infoHover.style.visibility = 'hidden'
    } else {
        infoHover.style.visibility = 'visible';
    }
})


app.init = () => {
};

app.init();