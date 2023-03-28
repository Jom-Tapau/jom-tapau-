import React from 'react';
import useOrders from '../../hooks/useOrders';
import * as FileSaver from 'file-saver';
import XLSX from 'sheetjs-style'

const ExcelGenerator = () => {

    const {orders} = useOrders();

    let newOrder = [];
    orders.map(order=>{
        let text = ""
        order.orders.map(or=>{
            text = text + `${or.quantity}x${or.name} `;
        })
        const orderObj ={
            name:order.name,
            address:order.deliveryAddress,
            food:text,
            total:order.total
        }

        newOrder.push(orderObj)
    })

    // newOrder = JSON.stringify(newOrder)
    console.log(newOrder)

    const fileType = 'application/vnd.openxmlformats-officedocuments.spreedsheethtml.sheet;charset=UTF-8';
    const fileExtention = '.csv';


    const exportToExcel = async()=>{
        const ws = XLSX.utils.json_to_sheet(newOrder);
        const wb = {Sheets : {'data':ws},SheetNames:['data']};
        const excelBuffer = XLSX.write(wb, {bookType:'xlsx',type:'array'});
        const data = new Blob([excelBuffer],{type:fileType});
        FileSaver.saveAs(data,"Order list" + fileExtention);
    } 


    return (
        <div>
            <button 
                onClick={(e)=>exportToExcel()}
            >
                Excel
            </button>
        </div>
    );
};

export default ExcelGenerator;