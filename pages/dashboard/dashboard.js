import Head from 'next/head';
import Layout, { siteTitle } from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';
import Link from 'next/link';
import Date from '../../components/date';
import CreateChart from '../../components/apexchartlayout';
import strdata from '../../public/data/str.json';
import tsaData from '../../public/data/passengerData.json';

const updateDate = 'Nov 23, 2021';

let occData2019 = [];
let occData2020 = [];
let occData2021 = [];
let adrData2019 = [];
let adrData2020 = [];
let adrData2021 = [];
let revParData2019 = [];
let revParData2020 = [];
let revParData2021 = [];
let weeks = [...Object.keys(strdata[2019])];

for (let i = 1; i <= 52; i++) {
  occData2019.push(strdata[2019][i][0]);
  occData2020.push(strdata[2020][i][0]);
  adrData2019.push(strdata[2019][i][1]);
  adrData2020.push(strdata[2020][i][1]);
  revParData2019.push(strdata[2019][i][2]);
  revParData2020.push(strdata[2020][i][2]);
}
for (let i = 1; i <= Object.keys(strdata[2021]).length; i++) {
  occData2021.push(strdata[2021][i][0]);
  adrData2021.push(strdata[2021][i][1]);
  revParData2021.push(strdata[2021][i][2]);
}

let pass2019 = [];
let pass2021 = [];
let passDiff = [];
let date = [];

for (let i = 0; i < Object.keys(tsaData[2021]).length; i++) {
  date.unshift(tsaData[2021][i].date);
  pass2021.unshift(tsaData[2021][i].passengers);
  pass2019.unshift(tsaData[2019][i].passengers);
  passDiff.unshift(100 - Math.floor((tsaData[2021][i].passengers / tsaData[2019][i].passengers) * 100));
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
];

const tsaChartData = [
  {
    name: '2019',
    data: pass2019,
  },
  {
    name: '2021',
    data: pass2021,
  },
  {
    name: 'Gap',
    type: 'column',
    data: passDiff,
  },
];

const occChartOptions = {
  chart: {
    fontFamily: 'Inter, Roboto, Arial, sans-serif',
    height: 350,
    width: 650,
    type: 'line',
    zoom: {
      enabled: false,
    },
  },
  title: {
    text: 'U.S. Hotel Occupancy (weekly)',
    align: 'center',
  },
  xaxis: {
    categories: weeks,
    labels: {
      rotate: 0,
    },
    title: {
      text: 'Source: STR, str.com. Last update: ' + updateDate,
      offsetX: 190,
      style: {
        color: '#9C9C9C',
        fontSize: '10px',
        fontFamily: 'Inter, Roboto, sans-serif',
        fontWeight: 400,
      },
    },
    tickAmount: 18,
  },
  colors: ['#2b2d42', '#8d99ae', '#d90429'],
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
    mode: 'light',
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
    fontFamily: 'Inter, Roboto, Arial, sans-serif',
    height: 350,
    width: 650,
    type: 'line',
    zoom: {
      enabled: false,
    },
  },
  title: {
    text: 'U.S. Hotel ADR (weekly)',
    align: 'center',
  },
  xaxis: {
    categories: weeks,
    labels: {
      rotate: 0,
    },
    title: {
      text: 'Source: STR, str.com. Last update: ' + updateDate,
      offsetX: 190,
      style: {
        color: '#9C9C9C',
        fontSize: '10px',
        fontFamily: 'Inter, Roboto, sans-serif',
        fontWeight: 400,
      },
    },
    tickAmount: 18,
  },
  colors: ['#2b2d42', '#8d99ae', '#d90429'],
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
    mode: 'light',
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
    fontFamily: 'Inter, Roboto, Arial, sans-serif',
    height: 350,
    width: 650,
    type: 'line',
    zoom: {
      enabled: false,
    },
  },
  title: {
    text: 'U.S. Hotel RevPAR (weekly)',
    align: 'center',
  },
  xaxis: {
    categories: weeks,
    labels: {
      rotate: 0,
    },
    title: {
      text: 'Source: STR, str.com. Last update: ' + updateDate,
      offsetX: 190,
      style: {
        color: '#9C9C9C',
        fontSize: '10px',
        fontFamily: 'Inter, Roboto, sans-serif',
        fontWeight: 400,
      },
    },
    tickAmount: 18,
  },
  colors: ['#2b2d42', '#8d99ae', '#d90429'],
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
    mode: 'light',
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
  theme: {
    mode: 'light',
    palette: 'palette6',
    monochrome: {
      enabled: false,
      color: '#255aee',
      shadeTo: 'light',
      shadeIntensity: 0.65,
    },
  },
  chart: {
    fontFamily: 'Inter, Roboto, Arial, sans-serif',
    height: 350,
    width: 650,
    type: 'line',
    zoom: {
      enabled: false,
    },
  },
  colors: ['#2b2d42', '#d90429', '#8d99ae'],
  fill: {
    type: 'solid',
    opacity: [1, 1, 0.5],
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
  },
  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5,
    },
  },
  xaxis: {
    categories: date,
    labels: {
      rotate: -45,
    },
    title: {
      text: 'Source: TSA, tsa.gov. Last update: ' + updateDate,
      offsetX: 190,
      style: {
        color: '#9C9C9C',
        fontSize: '10px',
        fontFamily: 'Inter, Roboto, sans-serif',
        fontWeight: 400,
      },
    },
    tickAmount: 18,
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
      seriesName: '2020',
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
      min: 0,
      title: {
        text: 'Gap',
      },
      labels: {
        formatter: function (val, index) {
          return val + '%';
        },
      },
    },
  ],
};

export default function Dashboard() {
  return (
    <Layout>
      <Head>
        <title>Hospitality Data Dashboard</title>
      </Head>
      <h2 className={utilStyles.headingLg}>Hospitality Data Dashboard</h2>
      <section>
        <div>
          <h3>Occupancy Data:</h3>
          <CreateChart data={occChartData} options={occChartOptions} type={'line'} width={650} />
        </div>
        <div>
          <h3>ADR Data:</h3>
          <CreateChart data={ADRChartData} options={ADRChartOptions} type={'line'} width={650} />
        </div>
        <div>
          <h3>RevPAR Data:</h3>
          <CreateChart data={revPARChartData} options={revPARChartOptions} type={'line'} width={650} />
        </div>
        <div>
          <h3>TSA Passenger Data:</h3>
          <CreateChart data={tsaChartData} options={tsaChartOptions} type={'line'} width={650} />
        </div>
      </section>
    </Layout>
  );
}
