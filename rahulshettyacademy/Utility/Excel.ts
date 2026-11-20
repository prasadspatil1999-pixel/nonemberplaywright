import xlsx from 'xlsx'
export class Excel {
    static ExcelData(filepath: string, filename: string) {
        try {
            const workbook = xlsx.readFile(filepath)
            const sheet = workbook.Sheets[filename]
            const testdata = xlsx.utils.sheet_to_json(sheet)
            //console.log(testdata)
            return testdata
        }
        catch (error) {
            console.log(error)
            return error
        }

    }
}