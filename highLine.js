Plotly.d3.csv("https://raw.githubusercontent.com/ManoaDataVisualizationProject/JAE/master/UHWeekXL.csv", function(err, rows) {
        function unpack(rows, key) {
            return rows.map(function (row) {
                return row[key];
            });
        }



        var names           = rows[2];
        var dates           = unpack(rows, 'Access Point ID').splice(4,151);
        var bachman         = unpack(rows, '1').splice(4, 151).map(function(x){ return parseInt(x, 10)});
        var kuykendallNorth = unpack(rows, '2').splice(4, 151).map(function(x){ return parseInt(x, 10)});
        var kuykendallWest  = unpack(rows, '3').splice(4, 151).map(function(x){ return parseInt(x, 10)});
        var geophysics      = unpack(rows, '4').splice(4, 151).map(function(x){ return parseInt(x, 10)});
        var physical        = unpack(rows, '5').splice(4, 151).map(function(x){ return parseInt(x, 10)});
        var sinclair        = unpack(rows, '6').splice(4, 151).map(function(x){ return parseInt(x, 10)});
        var admin           = unpack(rows, '7').splice(4, 151).map(function(x){ return parseInt(x, 10)});
        var parking         = unpack(rows, '8').splice(4, 151).map(function(x){ return parseInt(x, 10)});
        var crawford        = unpack(rows, '9').splice(4, 151).map(function(x){ return parseInt(x, 10)});
        var hawaii          = unpack(rows, '10').splice(4, 151).map(function(x){ return parseInt(x, 10)});
        var qlcc            = unpack(rows, '11').splice(4, 151).map(function(x){ return parseInt(x, 10)});
        var kennedy         = unpack(rows, '12').splice(4, 151).map(function(x){ return parseInt(x, 10)});
        var hamilton        = unpack(rows, '13').splice(4, 151).map(function(x){ return parseInt(x, 10)});
        var keller          = unpack(rows, '14').splice(4, 151).map(function(x){ return parseInt(x, 10)});
        var webster         = unpack(rows, '16').splice(4, 151).map(function(x){ return parseInt(x, 10)});
        var eastWest        = unpack(rows, '17').splice(4, 151).map(function(x){ return parseInt(x, 10)});
        var oceanography    = unpack(rows, '18').splice(4, 151).map(function(x){ return parseInt(x, 10)});
        var watanabe        = unpack(rows, '20').splice(4, 151).map(function(x){ return parseInt(x, 10)});
        var art             = unpack(rows, '21').splice(4, 151).map(function(x){ return parseInt(x, 10)});
        var lawSchool       = unpack(rows, '24').splice(4, 151).map(function(x){ return parseInt(x, 10)});
        var lawLibrary      = unpack(rows, '25').splice(4, 151).map(function(x){ return parseInt(x, 10)});
        var koreanStudies   = unpack(rows, '26').splice(4, 151).map(function(x){ return parseInt(x, 10)});
        var recCenter       = unpack(rows, '27').splice(4, 151).map(function(x){ return parseInt(x, 10)});
        var campusCenter    = unpack(rows, '29').splice(4, 151).map(function(x){ return parseInt(x, 10)});
        var gateway         = unpack(rows, '30').splice(4, 151).map(function(x){ return parseInt(x, 10)});

        var colors = Highcharts.getOptions().colors;

        Highcharts.chart('container1', {

            title: {
                text: 'HighLine of Data'
            },
            xAxis: {
              maxPadding: 0,
              type: 'category',
              crosshair: true,
              categories: dates
            },
            series: [{
                name: 'Bachman',
                data: bachman
            },
                {
                    name: 'Kuykendall North',
                    data: kuykendallNorth
                },
                {
                    name: 'Kuykendall West',
                    data: kuykendallWest
                },
                {
                    name: 'Geophysics',
                    data: geophysics
                },
                {
                    name: 'Physical Science',
                    data: physical
                },
                {
                    name: 'Sinclair Library',
                    data: sinclair
                },
                {
                    name: 'Administartive Services',
                    data: admin
                },
                {
                    name: 'Parking Kiosk',
                    data: parking
                },
                {
                    name: 'Crawford Hall',
                    data: crawford
                },
                {
                    name: 'Hawaii Hale',
                    data: hawaii
                },
                {
                    name: 'Queen Liliokulani',
                    data: qlcc
                },
                {
                    name: 'Kennedy Theatre',
                    data: kennedy
                },
                {
                    name: 'Hamilton Library',
                    data: hamilton
                },
                {
                    name: 'Keller Hall',
                    data: keller
                },
                {
                    name: 'Webster Hall',
                    data: webster
                },
                {
                    name: 'East West Center',
                    data: eastWest
                },
                {
                    name: 'Oceanography',
                    data: oceanography
                },
                {
                    name: 'Watanabe Hall',
                    data: watanabe
                },
                {
                    name: 'Art Building',
                    data: art
                },
                {
                    name: 'Law School',
                    data: lawSchool
                },
                {
                    name: 'Law Library',
                    data: lawLibrary
                },
                {
                    name: 'Korean Studies',
                    data: koreanStudies
                },
                {
                    name: 'Recreation Center',
                    data: recCenter
                },
                {
                    name: 'Campus Center',
                    data: campusCenter
                },
                {
                    name: 'Gateway',
                    data: gateway
                }]


        })
    });