async function fetchData() {
  const passdata = await fetch('./data/passengerData.json').then((response) => response.json());
  const strdata = await fetch('./data/str.json').then((response) => response.json());
  const HVSData = await fetch('./data/hvsData.json').then((response) => response.json());

  let pass2019 = [];
  let pass2021 = [];
  let passDiff = [];
  let date = [];

  for (let i = 0; i < Object.keys(passdata[2021]).length; i++) {
    date.unshift(passdata[2021][i].date);
    pass2021.unshift(passdata[2021][i].passengers);
    pass2019.unshift(passdata[2019][i].passengers);
    passDiff.unshift(100 - Math.floor((passdata[2021][i].passengers / passdata[2019][i].passengers) * 100));
  }

  let occData2019 = [];
  let occData2020 = [];
  let occData2021 = [];
  let adrData2019 = [];
  let adrData2020 = [];
  let adrData2021 = [];
  let weeks = [...Object.keys(strdata[2019])];

  for (let i = 1; i <= 52; i++) {
    occData2019.push(strdata[2019][i][0]);
    occData2020.push(strdata[2020][i][0]);
    adrData2019.push(strdata[2019][i][1]);
    adrData2020.push(strdata[2020][i][1]);
  }
  for (let i = 1; i <= Object.keys(strdata[2021]).length; i++) {
    occData2021.push(strdata[2021][i][0]);
    adrData2021.push(strdata[2021][i][1]);
  }

  let HVSOccData = [];
  let HVSRoomAvData = [];
  let HVSNewSuppData = [];
  let HVSTimeData = [];

  for (let i = 0; i < HVSData.length; i++) {
    HVSOccData.push(HVSData[i].occ);
    HVSRoomAvData.push(HVSData[i].roomsAvailable);
    HVSNewSuppData.push(HVSData[i].newSupply);
    HVSTimeData.push(HVSData[i].date);
  }

  let OCCoptions = {
    series: [
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
    ],
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
      fontFamily: 'Roboto, Arial, sans-serif',
      height: 350,
      width: 650,
      type: 'line',
      zoom: {
        enabled: false,
      },
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
    title: {
      text: 'U.S. Hotel Occupancy (weeks)',
      align: 'center',
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: weeks,
      labels: {
        rotate: 0,
      },
      title: {
        text: 'Updated Weekly. Source: STR, str.com',
        offsetX: 215,
        style: {
          color: '#9C9C9C',
          fontSize: '10px',
          fontFamily: 'Roboto, sans-serif',
          fontWeight: 400,
        },
      },
      tickAmount: 18,
    },
    yaxis: {
      decimalsInFloat: 0,
      labels: {
        formatter: function (val, index) {
          return val + '%';
        },
      },
    },
  };
  let occChart = new ApexCharts(document.querySelector('#OCCChart'), OCCoptions);
  occChart.render();

  let ADRoptions = {
    series: [
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
    ],
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
      fontFamily: 'Roboto, Arial, sans-serif',
      height: 350,
      width: 650,
      type: 'line',
      zoom: {
        enabled: false,
      },
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
    title: {
      text: 'U.S. Hotel ADR (weeks)',
      align: 'center',
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: weeks,
      labels: {
        rotate: 0,
      },
      title: {
        text: 'Updated Weekly. Source: STR, str.com',
        offsetX: 215,
        style: {
          color: '#9C9C9C',
          fontSize: '10px',
          fontFamily: 'Roboto, sans-serif',
          fontWeight: 400,
        },
      },
      tickAmount: 18,
    },
    yaxis: {
      decimalsInFloat: 0,
      labels: {
        formatter: function (val, index) {
          return '$' + val;
        },
      },
    },
  };
  let adrChart = new ApexCharts(document.querySelector('#ADRChart'), ADRoptions);
  adrChart.render();

  let HVSoptions = {
    series: [
      {
        name: 'Annual Occupied Rooms',
        data: HVSOccData,
      },
      {
        name: 'New Supply',
        data: HVSNewSuppData,
      },
      {
        name: 'Annual Available Rooms',
        data: HVSRoomAvData,
      },
    ],
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
      fontFamily: 'Roboto, Arial, sans-serif',
      height: 350,
      width: 650,
      type: 'line',
      zoom: {
        enabled: false,
      },
    },
    colors: ['#2b2d42', '#d90429', '#8d99ae'],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'straight',
      width: 3,
    },
    title: {
      text: 'U.S. Hotel Demand & Supply',
      align: 'center',
    },
    grid: {
      column: {
        colors: [
          'transparent',
          'transparent',
          'transparent',
          'transparent',
          'transparent',
          'transparent',
          'transparent',
          'transparent',
          'transparent',
          'transparent',
          'transparent',
          'transparent',
          'transparent',
          '#bbbbbb',
          '#bbbbbb',
          '#bbbbbb',
        ],
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: HVSTimeData,
      labels: {
        rotate: -45,
      },
      title: {
        text: 'Updated Annually. Source: HVS, hvs.com',
        offsetX: 230,
        offsetY: -10,
        style: {
          color: '#9C9C9C',
          fontSize: '10px',
          fontFamily: 'Roboto, sans-serif',
          fontWeight: 400,
        },
      },
    },
    yaxis: [
      {
        decimalsInFloat: 0,
        labels: {
          formatter: function (val, index) {
            return Math.floor(val / 1000000) + 'M';
          },
        },
      },
      {
        seriesName: 'New Supply',
        opposite: true,
        title: {
          text: 'New Supply',
        },
        labels: {
          formatter: function (val, index) {
            return Math.floor(val / 1000) + 'K';
          },
        },
      },
    ],
  };
  let HVSChart = new ApexCharts(document.querySelector('#HVSChart'), HVSoptions);
  HVSChart.render();

  let TSAoptions = {
    series: [
      {
        name: '2019',
        data: pass2019,
      },
      {
        name: '2021',
        data: pass2021,
      },
      {
        name: 'Difference',
        type: 'column',
        data: passDiff,
      },
    ],
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
      fontFamily: 'Roboto, Arial, sans-serif',
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
        text: 'Updated Weekly. Source: TSA, tsa.gov',
        offsetX: 225,
        style: {
          color: '#9C9C9C',
          fontSize: '10px',
          fontFamily: 'Roboto, sans-serif',
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
        seriesName: 'Difference',
        max: 100,
        min: 0,
        labels: {
          formatter: function (val, index) {
            return val + '%';
          },
        },
      },
    ],
  };

  let TSAchart = new ApexCharts(document.querySelector('#TSAChart'), TSAoptions);
  TSAchart.render();
}
