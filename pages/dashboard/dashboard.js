import Head from 'next/head';
import Layout, { siteTitle } from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';
import CreateChart from '../../components/apexchartlayout';
import strdata from '../../assets/data/str.json';
import tsaData from '../../assets/data/passengerData.json';

const updateDate = 'Jan 20, 2022';

let occData2019 = [];
let occData2020 = [];
let occData2021 = [];
let occData2022 = [];

let adrData2019 = [];
let adrData2020 = [];
let adrData2021 = [];
let adrData2022 = [];

let revParData2019 = [];
let revParData2020 = [];
let revParData2021 = [];
let revParData2022 = [];

let weeks = [...Object.keys(strdata[2019])];

for (let i = 1; i <= 52; i++) {
  occData2019.push(strdata[2019][i][0]);
  occData2020.push(strdata[2020][i][0]);
  occData2021.push(strdata[2021][i][0]);
  adrData2019.push(strdata[2019][i][1]);
  adrData2020.push(strdata[2020][i][1]);
  adrData2021.push(strdata[2021][i][1]);
  revParData2019.push(strdata[2019][i][2]);
  revParData2020.push(strdata[2020][i][2]);
  revParData2021.push(strdata[2021][i][2]);
}
for (let i = 1; i <= Object.keys(strdata[2022]).length; i++) {
  occData2022.push(strdata[2022][i][0]);
  adrData2022.push(strdata[2022][i][1]);
  revParData2022.push(strdata[2022][i][2]);
}

let pass2019 = [];
let pass2021 = [];
let pass2022 = [];
let passDiff = [];
let date = [];

for (let i = 0; i < Object.keys(tsaData[2022]).length; i++) {
  date.unshift(tsaData[2022][i].date);
  pass2022.unshift(tsaData[2022][i].passengers);
  pass2019.unshift(tsaData[2019][i].passengers);
  passDiff.unshift(100 - Math.floor((tsaData[2022][i].passengers / tsaData[2019][i].passengers) * 100));
}

const occChartData = [
  {
    name: '2019',
    data: occData2019,
  },
  {
    name: '2020',
    data: occData2020,
  },
  {
    name: '2021',
    data: occData2021,
  },
  {
    name: '2022',
    data: occData2022,
  },
];

const ADRChartData = [
  {
    name: '2019',
    data: adrData2019,
  },
  {
    name: '2020',
    data: adrData2020,
  },
  {
    name: '2021',
    data: adrData2021,
  },
  {
    name: '2022',
    data: adrData2022,
  },
];

const revPARChartData = [
  {
    name: '2019',
    data: revParData2019,
  },
  {
    name: '2020',
    data: revParData2020,
  },
  {
    name: '2021',
    data: revParData2021,
  },
  {
    name: '2022',
    data: revParData2022,
  },
];

const tsaChartData = [
  {
    name: '2019',
    data: pass2019,
  },
  {
    name: '2022',
    data: pass2022,
  },
  {
    name: 'Gap',
    type: 'column',
    data: passDiff,
  },
];

const occChartOptions = {
  chart: {
    background: '#000',
    dropShadow: {
      enabled: true,
      enabledOnSeries: [0, 1, 2],
      top: 1,
      left: 1,
      blur: 0,
      color: '#000',
      opacity: 1,
    },
    toolbar: {
      show: false,
    },
    fontFamily: 'Inter, Roboto, Arial, sans-serif',
    type: 'line',
    zoom: {
      enabled: false,
    },
  },
  title: {
    text: 'U.S. Hotel Occupancy (Weekly)',
    align: 'center',
    style: {
      fontWeight: 600,
      fontSize: '16px',
    },
  },
  grid: {
    borderColor: '#333',
    opacity: 0.1,
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  xaxis: {
    categories: weeks,
    labels: {
      rotate: 0,
      maxHeight: 120,
    },
    title: {
      text: 'Source: STR, str.com. Updated: ' + updateDate,
      align: 'right',
      style: {
        color: '#9C9C9C',
        fontSize: '10px',
        fontFamily: 'Inter, Roboto, sans-serif',
        fontWeight: 400,
      },
    },
    tickAmount: 18,
  },
  colors: ['#d90429', '#dddddd', '#ffb300'],
  fill: {
    type: 'solid',
    opacity: [1, 0.5, 1],
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'straight',
    width: 3,
  },
  theme: {
    mode: 'dark',
    palette: 'palette6',
    monochrome: {
      enabled: false,
      color: '#255aee',
      shadeTo: 'light',
      shadeIntensity: 0.65,
    },
  },
};

const ADRChartOptions = {
  chart: {
    background: '#000',
    dropShadow: {
      enabled: true,
      enabledOnSeries: [0, 1, 2],
      top: 1,
      left: 1,
      blur: 0,
      color: '#000',
      opacity: 1,
    },
    toolbar: {
      show: false,
    },
    fontFamily: 'Inter, Roboto, Arial, sans-serif',
    type: 'line',
    zoom: {
      enabled: false,
    },
  },
  title: {
    text: 'U.S. Hotel ADR (weekly)',
    align: 'center',
    style: {
      fontWeight: 600,
      fontSize: '16px',
    },
  },
  grid: {
    borderColor: '#333',
    opacity: 0.1,
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  xaxis: {
    categories: weeks,
    labels: {
      rotate: 0,
    },
    title: {
      text: 'Source: STR, str.com. Updated: ' + updateDate,
      style: {
        color: '#9C9C9C',
        fontSize: '10px',
        fontFamily: 'Inter, Roboto, sans-serif',
        fontWeight: 400,
      },
    },
    tickAmount: 18,
  },
  colors: ['#d90429', '#dddddd', '#ffb300'],
  fill: {
    type: 'solid',
    opacity: [1, 0.5, 1],
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'straight',
    width: 3,
  },
  theme: {
    mode: 'dark',
    palette: 'palette6',
    monochrome: {
      enabled: false,
      color: '#255aee',
      shadeTo: 'light',
      shadeIntensity: 0.65,
    },
  },
};

const revPARChartOptions = {
  chart: {
    background: '#000',
    dropShadow: {
      enabled: true,
      enabledOnSeries: [0, 1, 2],
      top: 1,
      left: 1,
      blur: 0,
      color: '#000',
      opacity: 1,
    },
    toolbar: {
      show: false,
    },
    fontFamily: 'Inter, Roboto, Arial, sans-serif',
    type: 'line',
    zoom: {
      enabled: false,
    },
  },
  title: {
    text: 'U.S. Hotel RevPAR (weekly)',
    align: 'center',
    style: {
      fontWeight: 600,
      fontSize: '16px',
    },
  },
  grid: {
    borderColor: '#333',
    opacity: 0.1,
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  xaxis: {
    categories: weeks,
    labels: {
      rotate: 0,
      maxHeight: 60,
    },
    title: {
      text: 'Source: STR, str.com. Updated: ' + updateDate,
      style: {
        color: '#9C9C9C',
        fontSize: '10px',
        fontFamily: 'Inter, Roboto, sans-serif',
        fontWeight: 400,
      },
    },
    tickAmount: 18,
  },
  colors: ['#d90429', '#dddddd', '#ffb300'],
  fill: {
    type: 'solid',
    opacity: [1, 0.5, 1],
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'straight',
    width: 3,
  },
  theme: {
    mode: 'dark',
    palette: 'palette6',
    monochrome: {
      enabled: false,
      color: '#255aee',
      shadeTo: 'light',
      shadeIntensity: 0.65,
    },
  },
};

const tsaChartOptions = {
  chart: {
    background: '#000',
    dropShadow: {
      enabled: true,
      enabledOnSeries: [0, 1, 2],
      top: 3,
      left: 0,
      blur: 1,
      color: '#333',
      opacity: 1,
    },
    toolbar: {
      show: false,
    },
    fontFamily: 'Inter, Roboto, Arial, sans-serif',
    type: 'line',
    zoom: {
      enabled: false,
    },
  },
  theme: {
    mode: 'dark',
    palette: 'palette6',
    monochrome: {
      enabled: false,
      color: '#255aee',
      shadeTo: 'light',
      shadeIntensity: 0.65,
    },
  },
  grid: {
    borderColor: '#333',
    opacity: 0.1,
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  colors: ['#d90429', '#ffb300', '#dddddd'],
  fill: {
    type: 'solid',
    opacity: [1, 1, 0.2],
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'straight',
    width: 3,
  },
  title: {
    text: 'TSA Passenger Data',
    align: 'center',
    style: {
      fontWeight: 600,
      fontSize: '16px',
    },
  },
  xaxis: {
    categories: date,
    labels: {
      rotate: -45,
      maxHeight: 60,
    },
    title: {
      text: 'Source: TSA, tsa.gov. Updated: ' + updateDate,
      style: {
        color: '#9C9C9C',
        fontSize: '10px',
        fontFamily: 'Inter, Roboto, sans-serif',
        fontWeight: 400,
      },
    },
    tickAmount: 18,
  },
  legend: {
    height: 35,
  },
  yaxis: [
    {
      seriesName: '2019',
      show: false,
      max: 3000000,
      min: 0,
      decimalsInFloat: 0,
      labels: {
        formatter: function (val, index) {
          return (val / 1000000).toFixed(1) + 'M';
        },
      },
    },
    {
      seriesName: '2022',
      show: true,
      max: 3000000,
      min: 0,
      decimalsInFloat: 0,
      labels: {
        formatter: function (val, index) {
          return (val / 1000000).toFixed(1) + 'M';
        },
      },
    },
    {
      opposite: true,
      seriesName: 'Gap',
      max: 100,
      min: -25,
      tickAmount: 10,
      title: {
        text: 'Gap',
        style: {
          fontWeight: 600,
        },
      },
      labels: {
        formatter: function (val, index) {
          return val + '%';
        },
      },
    },
  ],
  annotations: {
    position: 'back',
    yaxis: [
      {
        y: 0,
        y2: -50,
        yAxisIndex: 2,
        strokeDashArray: 0,
        borderColor: '#333',
        fillColor: '#ccc',
        opacity: 0.2,
        offsetX: 0,
        offsetY: 0,
      },
    ],
  },
};

export default function Dashboard() {
  return (
    <Layout>
      <Head>
        <title>Hospitality Data Dashboard</title>
      </Head>
      <h2 className={utilStyles.headingLg}>U.S. Hospitality Data Dashboard</h2>
      <section>
        <div>
          <h3>Occupancy Data:</h3>
          <CreateChart data={occChartData} options={occChartOptions} type={'line'} />
        </div>
        <div>
          <h3>ADR Data:</h3>
          <CreateChart data={ADRChartData} options={ADRChartOptions} type={'line'} />
        </div>
        <div>
          <h3>RevPAR Data:</h3>
          <CreateChart data={revPARChartData} options={revPARChartOptions} type={'line'} />
        </div>
        <div>
          <h3>TSA Passenger Data:</h3>
          <CreateChart data={tsaChartData} options={tsaChartOptions} type={'line'} />
        </div>
      </section>
    </Layout>
  );
}
