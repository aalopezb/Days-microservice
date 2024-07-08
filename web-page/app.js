async function convert() {
    const days = document.getElementById('days').value;

    const responses = await Promise.all([
        fetch('http://localhost:4001/convert', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ days })
        }).then(res => res.json()),
        fetch('http://localhost:4002/convert', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ days })
        }).then(res => res.json()),
        fetch('http://localhost:4003/convert', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ days })
        }).then(res => res.json())
    ]);

    document.getElementById('result').innerText = `
        ${days} days is equal to:
        ${responses[0].hours} hours,
        ${responses[1].minutes} minutes,
        ${responses[2].seconds} seconds
    `;
}
