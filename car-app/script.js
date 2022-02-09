document.getElementById('btn').addEventListener('click', async () => {
    const response = await fetch('http://localhost:3000/api/cars');
    const cars = await response.json();
    document.querySelector('pre').innerHTML = JSON.stringify(cars, null, 2);
})

document.getElementById('create').addEventListener('click', async () => {
    const resp = await fetch('http://localhost:3000/api/cars', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({brand: 'Lamborghini', model: 'Aventador', speed: 370})
    });
})