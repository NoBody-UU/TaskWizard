import {  Buffer } from 'buffer';



export interface FetchBufferResult {
  success: boolean;
  status: number;
  buffer: Buffer | null;
}