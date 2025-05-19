import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface ProjectProjects {
  name : string,
  link : string,
  image: StaticImageData
  description: string
  stack : string,
  status : ReactNode
}