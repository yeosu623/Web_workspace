const labels = [
    'July', 'August', 'September', 'October', 'November', 'December'
];
const data = {
    labels : labels,
    datasets : [{
        label : '벤치프레스',
        backgroundColor: 'rgb(255,99,132)',
        borderColor: 'rgb(255,99,132)',
        data : [10, 20, 30, 40, 60, 100],
    },{
        label : '데드리프트',
        backgroundColor: 'rgb(132,255,99)',
        borderColor: 'rgb(132,255,99)',
        data : [40,40,50,60,70,80],
    },{
        label : '스쿼트',
        backgroundColor: 'rgb(99,132,255)',
        borderColor: 'rgb(99,132,255)',
        data : [20,30,40,40,40,60],
    },]
};
const config = {
    type : 'line',
    data : data,
    options: {
        plugins: {
            title: {
                display: true,
                text: '3대 측정 기록',
                color: '#50BCDF',
                font:{
                    size:36,
                }
            }
        }
    }
};
const myChart = new Chart(
    document.getElementById('myChart'),
    config
);