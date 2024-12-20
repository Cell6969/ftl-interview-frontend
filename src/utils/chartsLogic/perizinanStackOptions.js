export function PerizinanStackOptions(data) {
  const categories = data.map(({ jenis_izin }) => jenis_izin);
  const pendaftaran = data.map(({ jml_pendaftaran }) => jml_pendaftaran);
  const proses = data.map(({ jml_proses }) => jml_proses);
  const selesai = data.map(({ jml_selesai }) => jml_selesai);
  const ditolak = data.map(({ jml_ditolak }) => jml_ditolak);

  return {
    chart: {
      type: "bar",
      height: 450,
      stacked: !0,
      toolbar: {
        show: !1,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 5,
        columnWidth: "20%",
        horizontal: 1,
      },
    },
    series: [
      {
        name: "Pendaftaran",
        data: pendaftaran,
      },
      {
        name: "Proses",
        data: proses,
      },
      {
        name: "Selesai",
        data: selesai,
      },
      {
        name: "Ditolak",
        data: ditolak,
      },
    ],
    xaxis: {
      categories: categories,
      axisBorder: {
        show: !1,
      },
      axisTicks: {
        show: !1,
      },
      labels: {
        style: {
          fontSize: "10px",
          colors: "#64748b",
        },
      },
    },
    yaxis: {
      tickAmount: 50,
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
        left: 20,
        right: -10,
      },
    },
    dataLabels: {
      enabled: !1,
    },
    tooltip: {
      intersect: false,
      shared: !0,
      inverseOrder: !0,
      style: {
        fontSize: "11px",
        fontFamily: "Inter",
      },
    },
    legend: {
      show: !0,
      position: "top",
      horizontalAlign: "left",
      fontSize: "12px",
      fontFamily: "Inter",
      labels: {
        fontSize: "12px",
        colors: "#64748b",
      },
      markers: {
        shape: "circle",
      },
      itemMargin: {
        horizontal: 5,
        vertical: 15,
      },
    },
  };
}
