// Define the Worker code
addEventListener('fetch', (event: FetchEvent) => {
  event.respondWith(addCustomHeader(event.request))
})

async function addCustomHeader(request: Request): Promise<Response> {
  // Fetch the original response from the origin server
  const response = await fetch(request)

  // Create a new Headers object to store the custom header
  const headers = new Headers(response.headers)
  headers.set('X-Custom-Header', 'Hello, world!')

  // Return the original response with the custom header added
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: headers
  })
}
