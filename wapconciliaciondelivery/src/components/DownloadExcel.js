import React from "react";
import ReactExport from "react-data-export";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

function DownloadExcel(props) {

    console.info(props);

    return (
        <ExcelFile 
            filename={'reporte'}
            element={<button 
            disabled={(props.dataSet.length == 0)} 
            className="btn btn-primary w-100 mb-3 mt-2">Generar Reporte</button>}>
            <ExcelSheet data={props.dataSet} name="Reporte">
                <ExcelColumn label="Tienda" value="branch" />
                <ExcelColumn label="NUMERO DE CUENTA" value="account" />
                <ExcelColumn label="FECHA" value="date" />
                <ExcelColumn label="CODIGO BANCARIO" value="code" />
                <ExcelColumn label="DESCRIPCION" value="description" />
                <ExcelColumn label="SIGNO" value="signo" />
                <ExcelColumn label="IMPORTE" value="amount" />
                <ExcelColumn label="AFILIACION" value="affiliation" />
                {/* <ExcelColumn label="Marital Status"
                        value={(col) => col.is_married ? "Married" : "Single"} /> */}
            </ExcelSheet>
        </ExcelFile>
    );
}

export default DownloadExcel;