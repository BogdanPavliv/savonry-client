import React from 'react';

export interface IAccordionProps {
  children: React.ReactNode
  title: string | React.ReactElement
  titleClass: string
  rotateIconClass?: string
}