import 'date-fns';
import esLocale from "date-fns/locale/es";
import React, { useState, useEffect } from 'react';
import mercadoPago from './../images/general/mercadopago.png';
import openpay from './../images/general/openpay.png';
import wow from './../images/general/wow.png';
import rappi from './../images/general/rappi.png';
import DownloadExcel from './../components/DownloadExcel';
import LoadingBlack from './../components/LoadingBlack'
import api from "../services/ServiceGeneral";


import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';


import {
  PAYMENT_METHOD_ID_MERCADOPAGO,
  PAYMENT_METHOD_ID_WOW,
  PAYMENT_METHOD_ID_RAPPI,
  PAYMENT_METHOD_ID_OPENPAY
} from "../constants/constants"


const dataMock = [
  {
    branch: "7097",
    account: "33333333365501945930",
    date: "24/10/2019",
    code: "100",
    description: "DEPOSITO",
    signo: "+",
    amount: "69",
    affiliation: "204232385",
  },
  {
    branch: "7097",
    account: "33333333365501945930",
    date: "24/10/2019",
    code: "COM7097NB",
    description: "COMISION",
    signo: "-",
    amount: "0.93",
    affiliation: "204232385",
  },
];


function Dashboard() {

  // sate
  const [isLoading, guardarIsLoading] = useState(false);

  const [mercadoPagoData, setMercadoPagoData] = useState([]);
  const [fromDateMP, setFromDateMP] = useState(null);
  const [toDateMP, setToDateMP] = useState(null);

  const [wowData, setWowData] = useState([]);
  const [fromDateWow, setFromDateWow] = useState(null);
  const [toDateWow, setToDateWow] = useState(null);

  const [openpayData, setOpenpayData] = useState([]);
  const [fromDateOpenPay, setFromDateOpenPay] = useState(null);
  const [toDateOpenPay, setToDateOpenPay] = useState(null);

  const [rappiData, setRappiData] = useState([]);
  const [fromDateRappi, setFromDateRappi] = useState(null);
  const [toDateRappi, setToDateRappi] = useState(null);

  useEffect(() => {
    const consultarAPIMP = async () => {
      try {
        const data = await api.services.getTokenPayments(1, 2, PAYMENT_METHOD_ID_MERCADOPAGO);
        console.info(data);
      } catch (error) {

      }
    }
    consultarAPIMP();
  }, []);


  const getPayments = async (fromDate, toDate, paymentId) => {
    
    guardarIsLoading(true);
    let dataPayments = [];
   
    try {
      if (fromDate !== null && toDate !== null) {
        console.info("001");
        if (validateTwoDates(fromDate, toDate)) {
          console.info("002");
          // const data = await api.services.getPayments(1, 2, paymentId);
          const data = dataMock;
          console.info(data);

          return data;
        }
      }
    } catch (error) {
      dataPayments = [];
    }

    guardarIsLoading(false);
    return dataPayments;
  }


  // MercadoPago
  useEffect(() => {
    const consultarAPIMP = async () => {
      const data = await getPayments(fromDateMP, toDateMP, PAYMENT_METHOD_ID_MERCADOPAGO);
      console.info(data);
      setMercadoPagoData(data);
    }
    consultarAPIMP();
  }, [fromDateMP, toDateMP]);


  // Wow
  useEffect(() => {
    const consultarAPI = async () => {
      const data = await getPayments(fromDateWow, toDateWow, PAYMENT_METHOD_ID_WOW);
      setWowData(data);
    }
    consultarAPI();
  }, [fromDateWow, toDateWow]);

  // OpenPay
  useEffect(() => {
    const consultarAPI = async () => {
      const data = await getPayments(fromDateOpenPay, toDateOpenPay, PAYMENT_METHOD_ID_OPENPAY);
      setOpenpayData(data);
    }
    consultarAPI();
  }, [fromDateOpenPay, toDateOpenPay]);

  // Rappi
  useEffect(() => {
    const consultarAPI = async () => {
      const data = await getPayments(fromDateRappi, toDateRappi, PAYMENT_METHOD_ID_RAPPI);
      setRappiData(data);
    }
    consultarAPI();
  }, [fromDateRappi, toDateRappi]);

  const validateTwoDates = (first, second) => {

        // let formatted_date = current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate() + " " + current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds() 
        // console.log(formatted_date)
    if (first !== null && second !== null && (new Date(first).getTime() <= new Date(second).getTime())) {
      console.info("It's Ok");
      return true;
    }
    return false;
  }


  return (

    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-1"></div>
        <div className="col-12 col-xs-12 col-sm-12 col-md-10 col-lg-10">
          <div className="row mt-4">

            <div className="card-container">
              <div className="card-select card-animate card-color-style">
                <img src={mercadoPago} alt="mercado pago" />
                <div>

                  <MuiPickersUtilsProvider locale={esLocale} utils={DateFnsUtils}>
                    <Grid container justify="space-around">
                      <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="Fecha inicial"
                        format="MM/dd/yyyy"
                        value={fromDateMP}
                        onChange={date => {
                          console.info(date);
                          setFromDateMP(date)
                        }}
                        KeyboardButtonProps={{
                          'aria-label': 'change date',
                        }}
                        minDate={new Date('2019/11/01')}
                        maxDate={new Date()}
                      />

                      <KeyboardDatePicker
                        margin="normal"
                        locale="fr"
                        id="date-picker-dialog"
                        label="Fecha final"
                        format="MM/dd/yyyy"
                        value={toDateMP}
                        onChange={date => {
                          console.info(date);
                          setToDateMP(date)
                        }}
                        KeyboardButtonProps={{
                          'aria-label': 'change date',
                        }}
                        minDate={new Date('2019/11/01')}
                        maxDate={new Date()}
                      />

                    </Grid>
                  </MuiPickersUtilsProvider>

                  <DownloadExcel dataSet={mercadoPagoData} ></DownloadExcel>

                </div>
              </div>
            </div>

            <div className="card-container">
              <div className="card-select card-animate card-color-style">
                <img src={wow} alt="wow" />
                <div>

                  <MuiPickersUtilsProvider locale={esLocale} utils={DateFnsUtils}>
                    <Grid container justify="space-around">
                      <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="Fecha inicial"
                        format="MM/dd/yyyy"
                        value={fromDateWow}
                        onChange={date => {
                          console.info(date);
                          setFromDateWow(date)
                        }}
                        KeyboardButtonProps={{
                          'aria-label': 'change date',
                        }}
                        minDate={new Date('2019/11/01')}
                        maxDate={new Date()}
                      />

                      <KeyboardDatePicker
                        margin="normal"
                        locale="fr"
                        id="date-picker-dialog"
                        label="Fecha final"
                        format="MM/dd/yyyy"
                        value={toDateWow}
                        onChange={date => {
                          console.info(date);
                          setToDateWow(date)
                        }}
                        KeyboardButtonProps={{
                          'aria-label': 'change date',
                        }}
                        minDate={new Date('2019/11/01')}
                        maxDate={new Date()}
                      />

                    </Grid>
                  </MuiPickersUtilsProvider>

                  <DownloadExcel dataSet={wowData} ></DownloadExcel>

                </div>
              </div>
            </div>

            <div className="card-container">
              <div className="card-select card-animate card-color-style">
                <img src={openpay} alt="openpay" />
                <div>

                  <MuiPickersUtilsProvider locale={esLocale} utils={DateFnsUtils}>
                    <Grid container justify="space-around">
                      <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="Fecha inicial"
                        format="MM/dd/yyyy"
                        value={fromDateOpenPay}
                        onChange={date => {
                          console.info(date);
                          setFromDateOpenPay(date)
                        }}
                        KeyboardButtonProps={{
                          'aria-label': 'change date',
                        }}
                        minDate={new Date('2019/11/01')}
                        maxDate={new Date()}
                      />

                      <KeyboardDatePicker
                        margin="normal"
                        locale="fr"
                        id="date-picker-dialog"
                        label="Fecha final"
                        format="MM/dd/yyyy"
                        value={toDateOpenPay}
                        onChange={date => {
                          console.info(date);
                          setToDateOpenPay(date)
                        }}
                        KeyboardButtonProps={{
                          'aria-label': 'change date',
                        }}
                        minDate={new Date('2019/11/01')}
                        maxDate={new Date()}
                      />
                    </Grid>
                  </MuiPickersUtilsProvider>

                  <DownloadExcel dataSet={openpayData} ></DownloadExcel>

                </div>
              </div>
            </div>

            <div className="card-container">
              <div className="card-select card-animate card-color-style">
                <img src={rappi} alt="rappi" />
                <div>

                  <MuiPickersUtilsProvider locale={esLocale} utils={DateFnsUtils}>
                    <Grid container justify="space-around">
                      <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="Fecha inicial"
                        format="MM/dd/yyyy"
                        value={fromDateRappi}
                        onChange={date => {
                          console.info(date);
                          setFromDateRappi(date)
                        }}
                        KeyboardButtonProps={{
                          'aria-label': 'change date',
                        }}
                        minDate={new Date('2019/11/01')}
                        maxDate={new Date()}
                      />

                      <KeyboardDatePicker
                        margin="normal"
                        locale="fr"
                        id="date-picker-dialog"
                        label="Fecha final"
                        format="MM/dd/yyyy"
                        value={toDateRappi}
                        onChange={date => {
                          console.info(date);
                          setToDateRappi(date)
                        }}
                        KeyboardButtonProps={{
                          'aria-label': 'change date',
                        }}
                        minDate={new Date('2019/11/01')}
                        maxDate={new Date()}
                      />
                    </Grid>
                  </MuiPickersUtilsProvider>

                  <DownloadExcel dataSet={rappiData} ></DownloadExcel>

                </div>
              </div>
            </div>


          </div>

        </div>
        <div className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-1"></div>
      </div>
      {(isLoading) ? <LoadingBlack></LoadingBlack> : null}
    </div>

  );
}


export default Dashboard;