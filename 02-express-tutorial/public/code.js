fetch('/api/v1/products')
    .then((response) => response.json())
    .then((data) => {
        document.querySelector('#button').addEventListener('click', function event() {
            data.map((data) => {

                let output = `<div id='cardWrap'><h1 id='name'>${data.name}</h1><img src='${data.image}'><h2 id='price'>${data.price}</h2><h3 id='desc'>${data.desc}</h3></div>`;
                document.getElementById('dataOutput').insertAdjacentHTML('afterbegin', output)
            })
            document.querySelector('#button').removeEventListener('click', event)

        })

    })




