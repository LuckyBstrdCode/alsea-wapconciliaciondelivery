import React, { useState, useEffect } from 'react';
import mercadoPago from './../images/general/mercadopago.png';
import openpay from './../images/general/openpay.png';
import wow from './../images/general/wow.png';
import rappi from './../images/general/rappi.png';
import DownloadExcel from './../components/DownloadExcel';
import LoadingBlack from './../components/LoadingBlack';
import boxMenu from './../components/boxMenu';

const dataSet = [
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
  const [fromDateMP, setFromDateMP] = useState('');
  const [toDateMP, setToDateMP] = useState('');

  const [wowData, setWowData] = useState([]);
  const [fromDateWow, setFromDateWow] = useState('');
  const [toDateWow, setToDateWow] = useState('');

  const [openpayData, setOpenpayData] = useState([]);
  const [fromDateOpenPay, setFromDateOpenPay] = useState('');
  const [toDateOpenPay, setToDateOpenPay] = useState('');

  const [rappiData, setRappiData] = useState([]);
  const [fromDateRappi, setFromDateRappi] = useState('');
  const [toDateRappi, setToDateRappi] = useState('');

  // MercadoPago
  useEffect(() => {
    const consultarAPIMP = async () => {
      if (fromDateMP !== '' && toDateMP !== '') {
        guardarIsLoading(true);
        const validDates = validateTwoDates(fromDateMP,toDateMP);

        if(validDates) {
          setMercadoPagoData(dataSet);
        } else {
          setMercadoPagoData([]);
        }

        guardarIsLoading(false);
      } else {
        setMercadoPagoData([]);
      }
    }
    consultarAPIMP();
  }, [fromDateMP, toDateMP]);

  // Wow
  useEffect(() => {
    const consultarAPI = async () => {
      if (fromDateWow !== '' && toDateWow !== '') {
        guardarIsLoading(true);
        const validDates = validateTwoDates(fromDateWow,toDateWow);

        if(validDates) {
          setWowData(dataSet);
        } else {
          setWowData([]);
        }

        // guardarIsLoading(false);
      } else {
        setWowData([]);
      }
    }
    consultarAPI();
  }, [fromDateWow, toDateWow]);

  // OpenPay
  useEffect(() => {
    const consultarAPI = async () => {
      if (fromDateOpenPay !== '' && toDateOpenPay !== '') {
        guardarIsLoading(true);

        setOpenpayData(dataSet);
        guardarIsLoading(false);
      }
    }
    consultarAPI();
  }, [fromDateOpenPay, toDateOpenPay]);

  // Rappi
  useEffect(() => {
    const consultarAPI = async () => {
      if (fromDateRappi !== '' && toDateRappi !== '') {
        guardarIsLoading(true);

        setRappiData(dataSet);
        guardarIsLoading(false);
      }
    }
    consultarAPI();
  }, [fromDateRappi, toDateRappi]);

  const validateTwoDates = (first, second) => {
    if ((new Date(first).getTime() <= new Date(second).getTime())) {
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
                  <label>Fecha inicial</label>
                  <input className="form-control mb-2" type="date"
                    value={fromDateMP}
                    onChange={(event) => setFromDateMP(event.target.value)}
                  />
                  <label>Fecha final</label>
                  <input className="form-control mb-2" type="date"
                    value={toDateMP}
                    onChange={(event) => setToDateMP(event.target.value)}
                  />

                  <DownloadExcel dataSet={mercadoPagoData} ></DownloadExcel>

                </div>
              </div>
            </div>

            <div className="card-container">
              <div className="card-select card-animate card-color-style">
                <img src={wow} alt="wow" />
                <div>
                  <label>Fecha inicial</label>
                  <input className="form-control mb-2" type="date"
                    value={fromDateWow}
                    onChange={(event) => setFromDateWow(event.target.value)}
                  />
                  <label>Fecha final</label>
                  <input className="form-control mb-2" type="date"
                    value={toDateWow}
                    onChange={(event) => setToDateWow(event.target.value)}
                  />

                  <DownloadExcel dataSet={wowData} ></DownloadExcel>

                </div>
              </div>
            </div>

            <div className="card-container">
              <div className="card-select card-animate card-color-style">
                <img src={openpay} alt="openpay" />
                <div>
                  <label>Fecha inicial</label>
                  <input className="form-control mb-2" type="date"
                    value={fromDateOpenPay}
                    onChange={(event) => setFromDateOpenPay(event.target.value)}
                  />
                  <label>Fecha final</label>
                  <input className="form-control mb-2" type="date"
                    value={toDateOpenPay}
                    onChange={(event) => setToDateOpenPay(event.target.value)}
                  />

                  <DownloadExcel dataSet={openpayData} ></DownloadExcel>

                </div>
              </div>
            </div>

            <div className="card-container">
              <div className="card-select card-animate card-color-style">
                <img src={rappi} alt="rappi" />
                <div>
                  <label>Fecha inicial</label>
                  <input className="form-control mb-2" type="date"
                    value={fromDateRappi}
                    onChange={(event) => setFromDateRappi(event.target.value)}
                  />
                  <label>Fecha final</label>
                  <input className="form-control mb-2" type="date"
                    value={toDateRappi}
                    onChange={(event) => setToDateRappi(event.target.value)}
                  />

                  <DownloadExcel dataSet={rappiData} ></DownloadExcel>

                </div>
              </div>
            </div>


          </div>
          
          <boxMenu></boxMenu>
        </div>
        <div className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-1"></div>
      </div>
      {(isLoading) ? <LoadingBlack></LoadingBlack> : null}
    </div>

  );
}


export default Dashboard;