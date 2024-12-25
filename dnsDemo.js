// Import the 'dns' module
const dns = require('dns');

// 1. dns.lookup()
dns.lookup('google.com', (err, address, family) => {
  if (err) {
    console.error('Error:', err);
  } else {
    console.log('IP Address:', address);
    console.log('IP Family:', family);
  }
});

// 2. dns.resolve4()
dns.resolve4('google.com', (err, addresses) => {
  if (err) {
    console.error('Error:', err);
  } else {
    console.log('IPv4 Addresses:', addresses);
  }
});

// 3. dns.resolveMx()
dns.resolveMx('example.com', (err, addresses) => {
  if (err) {
    console.error('Error:', err);
  } else {
    console.log('Mail Exchange Records (MX):', addresses);
  }
});
