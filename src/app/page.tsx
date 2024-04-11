'use client';

import { Input } from '@/components/Input';
import { Text5 } from '@/components/Texts';
import React from 'react';

export default function Home() {
  return (
    <div className="flex flex-col h-full bg-brand-primary pt-60 w-[400px] p-10 shadow-solid">
      <Text5>{'olá mundo !!!'}</Text5>
      <Input withoutControl placeholder="teste" />
      <Input variant={'flushed'} withoutControl placeholder="teste2" />
    </div>
  );
}
