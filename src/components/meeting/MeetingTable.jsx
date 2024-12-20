import Table from "@/components/shared/table/Table";
const MeetingTable = ({ data }) => {
  const columns = [
    {
      accessorKey: "unit",
      header: () => "UNIT",
    },
    {
      accessorKey: "ruang_meeting",
      header: () => "RUANG MEETING",
    },
    {
      accessorKey: "kapasitas",
      header: () => "KAPASITAS",
    },
    {
      accessorKey: "tanggal_rapat",
      header: () => "TANGGAL RAPAT",
    },
    {
      accessorKey: "waktu_mulai",
      header: () => "WAKTU",
    },
    {
      accessorKey: "jumlah_peserta",
      header: () => "JUMLAH_PESERTA",
    },
  ];
  return (
    <>
      <Table data={data} columns={columns} />
    </>
  );
};

export default MeetingTable;
