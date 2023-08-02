import { AxiosError } from 'axios';
import { DefaultResponse } from '../../services/types';

export type CustomAxiosError = AxiosError<DefaultResponse<null>>;
