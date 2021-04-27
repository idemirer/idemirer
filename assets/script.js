async function fetchData() {
  let pass2019 = [];
  let pass2021 = [];
  let date = [];
  const passdata = await fetch('./data/passengerData.json').then((response) => response.json());
  for (let i = 0; i < Object.keys(passdata[2021]).length; i++) {
    date.unshift(passdata[2021][i].date);
    pass2021.unshift(passdata[2021][i].passengers);
    pass2019.unshift(passdata[2019][i].passengers);
  }

  const strdata = await fetch('./data/str.json').then((response) => response.json());

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
    colors: ['#0000FF', '#8CFCBA', '#FF0000'],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'straight',
      width: 4,
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
        text: 'Source: STR, str.com',
        offsetX: 250,
        style: {
          fontSize: '10px',
          fontWeight: 400,
        },
      },
      tickAmount: 18,
    },
    yaxis: {
      decimalsInFloat: 0,
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
    colors: ['#0000FF', '#8CFCBA', '#FF0000'],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'straight',
      width: 4,
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
        text: 'Source: STR, str.com',
        offsetX: 250,
        style: {
          fontSize: '10px',
          fontWeight: 400,
        },
      },
      tickAmount: 18,
    },
    yaxis: {
      decimalsInFloat: 0,
    },
  };
  let adrChart = new ApexCharts(document.querySelector('#ADRChart'), ADRoptions);
  adrChart.render();

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
    colors: ['#0000FF', '#FF0000'],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'straight',
      width: 4,
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
        rotate: 0,
      },
      title: {
        text: 'Source: TSA, tsa.gov',
        offsetX: 235,
        style: {
          color: '#9C9C9C',
          fontSize: '10px',
          fontFamily: 'Roboto, sans-serif',
          fontWeight: 400,
        },
      },
      tickAmount: 16,
    },
    yaxis: {
      decimalsInFloat: 0,
    },
  };

  let TSAchart = new ApexCharts(document.querySelector('#TSAChart'), TSAoptions);
  TSAchart.render();
}
