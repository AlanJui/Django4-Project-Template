import http.client

conn = http.client.HTTPSConnection("ctext.org")
payload = ''
headers = {
    'User-Agent': 'Apifox/1.0.0 (https://apifox.com)'
}
conn.request("GET", "/dictionary.pl?if=%3Cif%3E&char=%3Cchar%3E", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
