import { ColumnsType } from "antd/es/table";
import useSWR from "swr";
import { Space, Table, Button, Typography } from "antd";
import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import Statistics from "./Interface/InterfaceStatistics";
import {
  fetchStatistics,
  statistics,
} from "./StatisticsService/StatisticsService";
import { StatisticsAntDrawer } from "../../components/AntDrawer/StatisticsAntDrawer";

export const StatisticsCRUD: React.FC = () => {
  const columns: ColumnsType<Statistics> = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Fecha",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Puntaje",
      dataIndex: "score",
      key: "score",
    },
    {
      title: "Id de Miembro",
      dataIndex: "memberId",
      key: "memberId",
    },
    {
      title: "Id de canción",
      dataIndex: "songId",
      key: "songId",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Typography.Link
            onClick={() => fieldsEdit(record)}
            style={{ marginRight: 8 }}
          >
            Editar
          </Typography.Link>
          <Typography.Link style={{ marginRight: 8 }}>Eliminar</Typography.Link>
        </Space>
      ),
    },
  ];

  const [editingData, setEditingData] = useState<Statistics | undefined>(
    undefined
  );
  const [open, setOpen] = useState(false);
  const fieldsEdit = (field: Statistics) => {
    setEditingData(field);
    setOpen(true);
  };
  const showDrawer = () => {
    setEditingData(undefined);
    setOpen(true);
  };

  const { data, error } = useSWR<Statistics[]>(statistics, fetchStatistics, {
    suspense: false,
  });

  return (
    <>
      <StatisticsAntDrawer
        open={open}
        setOpen={setOpen}
        fields={editingData}
      ></StatisticsAntDrawer>
      <Button type="primary" icon={<PlusOutlined />} onClick={showDrawer}>
        Agregar
      </Button>
      <Table columns={columns} dataSource={data}></Table>
    </>
  );
};
