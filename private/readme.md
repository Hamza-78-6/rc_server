## vendor signup

### parameter

{
"name":"Green Pakistan",
"email":"Greenpaksistan@gov.pk",
"password":"vendors@admin",
"owner_name":"Hamxah",
"fax":"090909090909",
"phoneNo":"090909090090",
"location":{
"province":"Punjab",
"district":"Narowal",
"city":"Narowal"
},
"material_to_pick":["Plastic-ABC","Plastic-EFG"],
"price_per_kg": [10,20]
}

### response

### if vendor does not exists already

{
"is_account_created": true,
"vendor": {
"name": "Green Pakistan",
"email": "Greenpaksistan@gov.pk",
"password": "vendors@admin",
"owner_name": "Hamxah",
"fax": "090909090909",
"phoneNo": "090909090090",
"location": {
"province": "Punjab",
"district": "Narowal",
"city": "Narowal"
},
"material_to_pick": [
"Plastic-ABC",
"Plastic-EFG"
],
"price_per_kg": [
10,
20
]
}
}

### if vendor already exists

{
"message": "vendor already exists",
"is_account_created": false
}

## vendor login

### parameters

{
"name":"Green Pakistan",
"password":"vendors@admin"
}

### responses

#### if vender exists

{
"message": "login success",
"status": true,
"vendor": {
"location": {
"province": "Punjab",
"district": "Narowal",
"city": "Narowal"
},
"\_id": "665d7fc5c883f850102e1e27",
"name": "Green Pakistan",
"email": "greenpaksistan@gov.pk",
"password": "vendors@admin",
"owner_name": "Hamxah",
"fax": "090909090909",
"phoneNo": "090909090090",
"material_to_pick": [
"Plastic-ABC",
"Plastic-EFG"
],
"price_per_kg": [
10,
20
],
"\_\_v": 0
}
}

#### if vendor does not exists

{
"message": "vendor does not exists",
"status": false
}
