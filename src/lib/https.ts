import { Buffer } from "buffer";
import fetch, { RequestInit, Response } from 'node-fetch';
import { FetchBufferResult } from "../types/https";

/**
 * Fetches the buffer content from a specified URL.
 * @param {string} url - The URL to fetch the buffer from.
 * @param {RequestInit} [init] - Optional request initialization options.
 * @returns {Promise<FetchBufferResult>} - The result object containing the success status, response status, and buffer content.
 */
export async function fetchBuffer(url: string, init?: RequestInit): Promise<FetchBufferResult> {
  try {
    const response: Response = init ? await fetch(url, init) : await fetch(url);
    const arrayBuffer: ArrayBuffer = await response.arrayBuffer();
    const buffer: Buffer = Buffer.from(arrayBuffer);
    if (response.status !== 200) console.debug(response);
    return {
      success: response.status === 200,
      status: response.status,
      buffer,
    };
  } catch (ex) {
    console.debug(`URL: ${url}`);
    console.error(`fetchBuffer`, ex);
    return {
      success: false,
      status: -1,
      buffer: null
    };
  }
}