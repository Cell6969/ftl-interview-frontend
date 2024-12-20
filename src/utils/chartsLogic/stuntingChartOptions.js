export function StuntingChartOptions(data) {
  const labels = data.map(({ nama }) => nama);
  const series = data.map(({ jumlah }) => jumlah);
  return {
    dataLabels: {
      enabled: 1,
    },
    colors: [
      "#FF5733", // Bright Orange
      "#33FF57", // Bright Green
      "#5733FF", // Bright Blue
      "#FFC300", // Yellow
      "#DAF7A6", // Light Green
      "#C70039", // Red
      "#900C3F", // Maroon
      "#581845", // Purple
      "#28B463", // Forest Green
      "#3498DB", // Sky Blue
      "#1ABC9C", // Teal
      "#F39C12", // Orange
      "#9B59B6", // Lavender
      "#34495E", // Dark Blue Gray
      "#2ECC71", // Light Green
      "#E74C3C", // Coral Red
      "#7D3C98", // Dark Purple
    ],
    series: series,
    labels: labels,
    stroke: {
      width: 0,
      lineCap: "round",
    },
    legend: {
      show: 1,
      position: "right",
      fontFamily: "Inter",
      fontWeight: 500,
      labels: {
        colors: "#A0ACBB",
        fontFamily: "Inter",
      },
      markers: {
        width: 10,
        height: 10,
      },
      itemMargin: {
        horizontal: 20,
        vertical: 5,
      },
    },

    responsive: [
      {
        breakpoint: 380,
        options: {
          chart: {
            width: 280,
          },
          legend: {
            show: !1,
          },
        },
      },
    ],
    tooltip: {
      style: {
        colors: "#A0ACBB",
        fontFamily: "Inter",
      },
    },
  };
}
