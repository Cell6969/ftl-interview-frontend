import { monthList } from "../dateFilterRange/monthList";

export const trenStuntingChartOptions = (data) => {
  const months = data.map((item) => {
    return monthList.find((month) => month.value === item.month).label;
  });

  const total = data.map((item) => item.total);

  const chartOptions = {
    chart: {
      width: "100%",
      stacked: !1,
      toolbar: {
        show: !1,
      },
    },
    stroke: {
      width: [1, 2, 3],
      curve: "smooth",
      lineCap: "round",
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        borderRadiusApplication: "end",
        columnWidth: "29%",
      },
    },
    colors: ["#3454d1", "#a2acc7", "#E1E3EA"],
    series: [
      {
        name: "Total",
        type: "line",
        data: total,
      },
    ],
    fill: {
      opacity: [0.85, 0.25, 1, 1],
      gradient: {
        inverseColors: !1,
        shade: "light",
        type: "vertical",
        opacityFrom: 0.5,
        opacityTo: 0.1,
        stops: [0, 100, 100, 100],
      },
    },
    markers: {
      size: 0,
    },
    xaxis: {
      categories: months,
      axisBorder: {
        show: !1,
      },
      axisTicks: {
        show: !1,
      },
      labels: {
        style: {
          fontSize: "10px",
          colors: "#A0ACBB",
        },
      },
    },
    yaxis: {
      labels: {
        offsetX: 0,
        offsetY: 0,
        style: {
          colors: "#A0ACBB",
        },
      },
    },
    grid: {
      xaxis: {
        lines: {
          show: !1,
        },
      },
      yaxis: {
        lines: {
          show: !1,
        },
      },
      padding: {
        left: 35,
        right: 28,
      },
    },
    dataLabels: {
      enabled: !1,
    },
    tooltip: {
      // intersect:false,
      // shared: !0,
      // inverseOrder: !0,
      style: {
        fontSize: "12px",
        fontFamily: "Inter",
      },
    },
    legend: {
      show: !1,
      labels: {
        fontSize: "12px",
        colors: "#A0ACBB",
      },
      fontSize: "12px",
      fontFamily: "Inter",
    },
  };
  return chartOptions;
};
