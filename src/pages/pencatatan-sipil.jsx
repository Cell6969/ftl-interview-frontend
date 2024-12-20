import PencatatanSipilCreate from "@/components/administrasi/PencatatanSipilCreate";
import PageHeader from "@/components/shared/pageHeader/PageHeader";

const PencatatanSipil = () => {
  return (
    <>
      <PageHeader></PageHeader>
      <div className="main-content">
        <div className="row">
          <PencatatanSipilCreate />
        </div>
      </div>
    </>
  );
};

export default PencatatanSipil;
