import path from 'node:path'
import{test} from '../rahulshettyacademy//pageFixture/pagefixture'
import { Excel } from '../rahulshettyacademy/Utility/Excel'
const filepath = path.join(__dirname, '../Test Data/excel.xlsx');
const filename="Login"
const testdata:any=Excel.ExcelData(filepath,filename)
const data=testdata[1]

test("Application Login",async({login})=>
{
    await login.applicationUrl(data.url)
    await login.logininfo(data.username,data.password)
})