import React from "react";
import CardDataStats from "../component/CardDataStats";
import TableOne from "../component/Tables/TableOne";
import { FaRegGrinSquintTears, FaBed, FaStethoscope } from "react-icons/fa";
import { TbDental } from "react-icons/tb";

export default function Dashboard() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardDataStats
          title="ผู้มารับบริการวันนี้"
          total="$3.456K"
          rate="0.43%"
          levelUp
        >
          <FaStethoscope size={32} />
        </CardDataStats>
        <CardDataStats title="Admit วันนี้" total="$45,2K" rate="4.35%" levelUp>
          <FaBed size={32} />
        </CardDataStats>
        <CardDataStats
          title="แพทย์แผนไทย วันนี้"
          total="2.450"
          rate="2.59%"
          levelUp
        >
          <FaRegGrinSquintTears size={32} />
        </CardDataStats>
        <CardDataStats
          title="ทันตรกรรม วันนี้"
          total="3.456"
          rate="0.95%"
          levelDown
        >
          <TbDental size={32} />
        </CardDataStats>
      </div>
      <div className="col-span-12 xl:col-span-8 mt-4">
        <TableOne />
      </div>
    </div>
  );
}
