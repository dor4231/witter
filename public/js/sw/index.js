self.addEventListener('fetch', function(event) {
    console.log(event.request);
    event.respondWith(
        fetch(event.request).then(function(response) {
            if (response.status === 404) {
                return fetch('/imgs/dr-evil.gif');
            }
            return response;
        }).catch(function() {
            return new Response("Bummer, nothing to display");
        })
    );
});