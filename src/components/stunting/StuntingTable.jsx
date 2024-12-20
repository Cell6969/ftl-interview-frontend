import React from "react";
import { Link } from "react-router-dom";
import { FiEye, FiTrash2 } from "react-icons/fi";
import Table from "@/components/shared/table/Table";
import { monthList } from "@/utils/dateFilterRange/monthList";

const StuntingTable = ({ data, handleDelete }) => {
  const columns = [
    // {
    //   accessorKey: "id",
    //   meta: {
    //     headerClassName: "width-30",
    //   },
    // },

    {
      accessorKey: "year",
      header: () => "Tahun",
    },
    {
      accessorKey: "month",
      header: () => "Bulan",
      cell: (info) =>
        monthList.find((item) => item.value === info.getValue()).label,
    },
    {
      accessorKey: "puskesmas",
      header: () => "Puskesmas",
    },
    {
      accessorKey: "kecamatan",
      header: () => "Kecamatan",
    },
    {
      accessorKey: "jumlah",
      header: () => "Jumlah",
    },
    {
      accessorKey: "id",
      header: () => "Actions",
      cell: (info) => (
        <div className="hstack gap-2 justify-content-beginning">
          <Link
            to={`/stunting/data/${info.getValue()}`}
            className="avatar-text avatar-md"
          >
            <FiEye />
          </Link>
          <button
            className="avatar-text avatar-md"
            aria-label="Delete"
            type="button"
            onClick={() => handleDelete(info.getValue())}
          >
            <FiTrash2 />
          </button>
        </div>
      ),
      meta: {
        headerClassName: "text-end",
      },
    },
  ];
  return (
    <>
      <Table data={data} columns={columns} />
    </>
  );
};

export default StuntingTable;
