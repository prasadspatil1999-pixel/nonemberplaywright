import path from 'node:path'
import{test} from '../rahulshettyacademy//pageFixture/pagefixture'
import { Excel } from '../rahulshettyacademy/Utility/Excel'
const filepath = path.join(__dirname, '../Test Data/excel.xlsx');
const filename="Login"
const testdata:any=Excel.ExcelData(filepath,filename)
const data=testdata[0]
let city="Ind"
test("Application Login",async({login,product,credit})=>
{
    
    await login.applicationUrl(data.url)
    await login.logininfo(data.username,data.password)
    await product.products(data.productName)
    await credit.creditcard(data.CardNumber,data.cvv,data.Nameofcard)
    await credit.email(data.username)
    console.log("City:", data.city)
    console.log("Country:", data.usercountry)
    await credit.allcity(city,data.usercountry)
})
