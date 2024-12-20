import PageHeader from "@/components/shared/pageHeader/PageHeader";
import { FiPlus } from "react-icons/fi";
import MeetingTable from "../components/meeting/MeetingTable";

const data = [
  {
    id: 1,
    unit: "Conference Room A",
    ruang_meeting: "Room 101",
    kapasitas: 20,
    tanggal_rapat: "2023-10-15",
    waktu_mulai: "2023-10-15",
    waktu_selesai: "2023-10-15",
    jumlah_peserta: 15,
    snack_siang: true,
    makan_siang: false,
    snack_sore: true,
    nominal_konsumsi: 50000,
  },
];
const MeetingList = () => {
  return (
    <>
      <PageHeader>
        <div className="d-flex align-items-center gap-2">
          <a href="/meeting/add" className="btn btn-primary">
            <FiPlus size={16} className="me-2" />
            <span>Tambah</span>
          </a>
        </div>
      </PageHeader>
      <div className="main-content">
        <div className="row">
          <MeetingTable data={data} />
        </div>
      </div>
    </>
  );
};

export default MeetingList;
