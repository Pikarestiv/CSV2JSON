# CSV TO JSON CONVERTER

An express API endpoint route [HTTP POST] that accepts the following payload

{  
 &nbsp;&nbsp;csv: {  
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;url: <https://linktocsv>,  
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;select_fields: [First Name, Last Name, Age],  
 &nbsp;&nbsp;}  
}

and does the following:

i. Ensures the URL contains a valid CSV  
ii. Converts the CSV to a JSON array  
iii. Ensures the JSON array contains the fields specified in the select_fields parameter.

## Procedure to use app:

1. Clone the repository into your system.
2. Run npm install
3. Run npm start
4. Direct an API POST request to the API endpoint http://localhost:3000/api

   Payload of the POST call should be in the form:

   {  
    &nbsp;&nbsp;"csv": {  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"url": "link to csv file",  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"select_fields": ["First Name", "Last Name", "Age"]  
    &nbsp;&nbsp;}  
   }

## To Demo The API:

Using POSTMAN or any other similar app, direct a POST call to the endpoint:  
https://csv2jsonconverter.glitch.me/api  
The Payload of the API call should be in the format in number 4 above.
