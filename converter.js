import https from "https";
import readline from "readline";
import chalk from "chalk";
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})
const apikey = "f9f80b20f327e36dd63779f6";
const url = "https://v6.exchangerate-api.com/v6/f9f80b20f327e36dd63779f6/latest/USD"
https.get(url ,(reponse) => {
    let data = "";
reponse.on("data",(chunk) => {
data += chunk;
} )
const convertCurrency = (amount , rate) => {
return (amount *rate).toFixed(2)
}
reponse.on("end" , () => {
const rates = JSON.parse(data).conversion_rates;
rl.question("Enter the amount in USD:" , (amount) => {
rl.question("Enter the target currency (e.g., INR , EUR , NPR):" , (currency) => {
const  rate= rates[currency.toUpperCase()];
if(rate) {
    console.log(`${amount} USD is approximately ${convertCurrency(amount , rate)} ${currency}`);
} else
{
    console.log(`Invalid Currency Code`);
}
rl.close();
})
})
})
})