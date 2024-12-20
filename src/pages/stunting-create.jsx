import StuntingCreateForm from "@/components/stunting/StuntingCreate";
import PageHeader from "@/components/shared/pageHeader/PageHeader";

const StuntingCreate = () => {
  return (
    <>
      <PageHeader></PageHeader>
      <div className="main-content">
        <div className="row">
          <StuntingCreateForm />
        </div>
      </div>
    </>
  );
};

export default StuntingCreate;
