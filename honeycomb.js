Highcharts.chart('container2', {
        chart: {
            type: 'tilemap',
            inverted: true,
            height: '80%'
        },
        title: {
            text: 'HoneyComb Chart of UH'
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            visible: false
        },
        yAxis: {
            visible: false
        },
        colorAxis: {
            dataClasses: [{
                from: 0,
                to: 1000000,
                color: '#F9EDB3',
                name: '< 1M'
            }, {
                from: 1000000,
                to: 5000000,
                color: '#FFC428',
                name: '1M - 5M'
            }, {
                from: 5000000,
                to: 20000000,
                color: '#FF7987',
                name: '5M - 20M'
            }, {
                from: 20000000,
                color: '#FF2371',
                name: '> 20M'
            }]
        },
        tooltip: {
            headerFormat: '',
            pointFormat: 'The population of <b> {point.name}</b> is <b>{point.value}</b>'
        },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '{point.hc-a2}',
                    color: '#000000',
                    style: {
                        textOutline: false
                    }
                }
            }
        },
        series: [{
            name: '',
            data: [{
                'hc-a2': 'S Lib',
                name: 'Sinclair Library',
                region: 'South',
                x: 2,
                y: 1,
                value: 4849377
            },
                {
                    'hc-a2': 'Kiosk',
                    name: 'Parking Kiosk',
                    region: 'West',
                    x: 3,
                    y: 1,
                    value: 6745408
                }, {
                    'hc-a2': 'Bach',
                    name: 'Bachman',
                    region: 'South',
                    x: 4,
                    y: 1,
                    value: 2994079
                }, {
                    'hc-a2': 'Admin',
                    name: 'Administrative Services',
                    region: 'West',
                    x: 3,
                    y: 3,
                    value: 1634464
                }, {
                    'hc-a2': 'CC',
                    name: 'Campus Center',
                    region: 'West',
                    x: 3,
                    y: 4,
                    value: 584153
                },
                {
                    'hc-a2': 'WRC',
                    name: 'Warrior Rec Center',
                    region: 'West',
                    x: 2,
                    y: 4,
                    value: 584153
                },
                {
                    'hc-a2': 'Kuyk',
                    name: 'Kuykendall',
                    region: 'West',
                    x: 3,
                    y: 5,
                    value: 584153
                },
                {
                    'hc-a2': 'Art',
                    name: 'Art Building',
                    region: 'West',
                    x: 2,
                    y: 5,
                    value: 584153
                },
                {
                    'hc-a2': 'QLCC',
                    name: 'Queen Lilioukalani Center',
                    region: 'West',
                    x: 0,
                    y: 4,
                    value: 584153
                },
                {
                    'hc-a2': 'Webster',
                    name: 'Webster Hall',
                    region: 'West',
                    x: 0,
                    y: 5,
                    value: 584153
                },
                {
                    'hc-a2': 'Hamilton',
                    name: 'Hamilton Library',
                    region: 'West',
                    x: 0,
                    y: 9,
                    value: 584153
                },
                {
                    'hc-a2': 'Kor Stud',
                    name: 'Korean Studies',
                    region: 'West',
                    x: 0,
                    y: 11,
                    value: 584153
                },
                {
                    'hc-a2': 'Keller',
                    name: 'Keller',
                    region: 'West',
                    x: 2,
                    y: 9,
                    value: 584153
                },
                {
                    'hc-a2': 'Kennedy',
                    name: 'Kennedy Theatre',
                    region: 'West',
                    x: 3,
                    y: 10,
                    value: 584153
                },
                {
                    'hc-a2': 'Kiosk',
                    name: 'East West Parking Kiosk',
                    region: 'West',
                    x: 4,
                    y: 10,
                    value: 584153
                },
                {
                    'hc-a2': 'Gateway',
                    name: 'Gateway House',
                    region: 'West',
                    x: 6,
                    y: 11,
                    value: 584153
                },
                {
                    'hc-a2': 'Phys Sci',
                    name: 'Physical Science',
                    region: 'West',
                    x: 3,
                    y: 9,
                    value: 584153
                },
                {
                    'hc-a2': 'Watanabe',
                    name: 'Watanabe Hall',
                    region: 'West',
                    x: 3,
                    y: 8,
                    value: 584153
                },
                {
                    'hc-a2': 'Ocean',
                    name: 'Oceanography',
                    region: 'West',
                    x: 4,
                    y: 8,
                    value: 584153
                },
                {
                    'hc-a2': 'Geo Phys',
                    name: 'Geophysics',
                    region: 'West',
                    x: 3,
                    y: 7,
                    value: 584153
                },
                {
                    'hc-a2': 'Law Library',
                    name: 'Law Library',
                    region: 'West',
                    x: 6,
                    y: 7,
                    value: 584153
                },
                {
                    'hc-a2': 'Law School',
                    name: 'Law School',
                    region: 'West',
                    x: 6,
                    y: 4,
                    value: 584153
                },
                {
                    'hc-a2': 'Hawaii',
                    name: 'Hawaii Hale',
                    region: 'West',
                    x: 1,
                    y: 4,
                    value: 584153
                }
            ]
        }]
    });