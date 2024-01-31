document.addEventListener('DOMContentLoaded', () => {
    const dataInput = document.getElementById('dataInput');
    const sendBtn = document.getElementById('sendBtn');
    const serverMessage = document.getElementById('serverMessage');

    sendBtn.addEventListener('click', async () => {
        const dataToSend = dataInput.value;
        if (dataToSend.trim() === '') {
            alert('Please enter some data!');
            return;
        }

        try {
            const response = await fetch('/api/data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: dataToSend }),
            });
            
            const result = await response.json();
            serverMessage.textContent = `Server said: "${result.serverResponse}"`;
        } catch (error) {
            serverMessage.textContent = 'Error: Could not connect to the server.';
            console.error('Error:', error);
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const dataInput = document.getElementById('dataInput');
    const sendBtn = document.getElementById('sendBtn');
    const serverMessage = document.getElementById('serverMessage');
