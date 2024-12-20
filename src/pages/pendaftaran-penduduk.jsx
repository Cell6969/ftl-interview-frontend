import PageHeader from "@/components/shared/pageHeader/PageHeader";
import PendaftaranPendudukCreate from "@/components/administrasi/PendaftaranPendudukCreate";

const PendaftaranPenduduk = () => {
  return (
    <>
      <PageHeader></PageHeader>
      <div className="main-content">
        <div className="row">
          <PendaftaranPendudukCreate />
        </div>
      </div>
    </>
  );
};

export default PendaftaranPenduduk;
