import PageHeader from "@/components/shared/pageHeader/PageHeader";
import StuntingEditForm from "@/components/stunting/StuntingEdit";

const StuntingEdit = () => {
  return (
    <>
      <PageHeader></PageHeader>
      <div className="main-content">
        <div className="row">
          <StuntingEditForm />
        </div>
      </div>
    </>
  );
};

export default StuntingEdit;
