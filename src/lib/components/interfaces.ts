import { ICommonProps } from "@redwallsolutions/common-interfaces-ts";

export interface AboutProps extends ICommonProps {
  version: string;
  visible: boolean;
  onDismiss:()=>void;
  height?:string;
}
