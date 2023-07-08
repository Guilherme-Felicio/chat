import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface Icon
  extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  width?: number;
  height?: number;
}
