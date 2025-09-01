document.getElementById('search').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        const query = encodeURIComponent(this.value.trim());
        if (query) {
            const url = `https://www.google.com/search?q=${query}&udm=14`;
            window.open(url, '_blank');
            this.value = '';
        }
    }
});
