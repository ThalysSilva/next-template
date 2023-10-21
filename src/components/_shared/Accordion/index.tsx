import React from 'react';

import { AccordionObject } from './types';
import { Icon } from './components/icons';
import { Text3 } from '../Texts';
import {
  Accordion as AccordionChakra,
  AccordionButton,
  AccordionPanel,
  AccordionItem,
} from '@chakra-ui/react';

type Props = {
  items: AccordionObject[];
  titleClassname?:string;
};

export function Accordion({ items, titleClassname }: Props) {
  return (
    <AccordionChakra allowMultiple>
      {items.map(
        ({ contentElement, contentTitle, title, icon: IconProps, onExpandIcon }, index) => {
          return (
            <AccordionItem key={index} >
              {({ isExpanded }) => {
                return (
                  <div className=" w-full justify-between">
                    <AccordionButton className="flex w-full justify-between items-center gap-3">
                      <Text3 className={titleClassname ?? 'flex-1 items-center text-text-primary text-start font-bold xl:text-lg'}>
                        {title || contentTitle}
                      </Text3>
                      <Icon
                        iconProps={IconProps}
                        isExpanded={isExpanded}
                        onExpandIcon={onExpandIcon}
                      />
                    </AccordionButton>
                    <AccordionPanel pb={4}>{contentElement}</AccordionPanel>
                  </div>
                );
              }}
            </AccordionItem>
          );
        },
      )}
    </AccordionChakra>
  );
}
