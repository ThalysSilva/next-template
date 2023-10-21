import { UseFormProps } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

type Props = {
  useFormProps?: Omit<UseFormProps, 'resolver'>;
  zodSchema?: z.ZodSchema<any>;
};

export function useCustomForm({ useFormProps, zodSchema }: Props) {
  const methods = useForm<z.infer<typeof zodSchema | any>>({
    reValidateMode: 'onChange',
    ...useFormProps,
    resolver: zodSchema ? zodResolver(zodSchema) : undefined,
  });

  return { methods };
}
