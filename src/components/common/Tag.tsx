import React from "react";
import { X } from "react-feather";
import { LabelsEntity } from "../../types/Kanban";

interface TagProps {
  item: LabelsEntity;
  removeLabel?: (label: LabelsEntity) => void;
}
export default function Tag(props: TagProps) {
  const { item, removeLabel } = props;
  return (
    <label style={{ backgroundColor: item.color, color: "#fff" }}>
      {item.text}
      {removeLabel && <X onClick={() => removeLabel(item)} />}
    </label>
  );
}
